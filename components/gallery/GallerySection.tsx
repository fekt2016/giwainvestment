"use client";

import {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type KeyboardEvent,
} from "react";
import styled from "styled-components";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  GALLERY_TABS,
  DEFAULT_GALLERY_CATEGORY,
  galleryItems,
  isGalleryCategory,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/gallery-data";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/site";

const Wrap = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.maxWidth};
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
  padding-block: clamp(2.5rem, 5vw, 4rem);
`;

const Head = styled.div`
  max-width: 40rem;
  margin-bottom: 1.5rem;
`;

const H1 = styled.h1`
  font-family: ${(p) => p.theme.fonts.serif};
  font-weight: 700;
  color: ${(p) => p.theme.colors.primary};
  font-size: clamp(2rem, 5vw, 2.75rem);
  margin: 0 0 0.75rem;
`;

const Lead = styled.p`
  font-size: 1.125rem;
  color: ${(p) => p.theme.colors.muted};
  margin: 0;
`;

const TabList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.25rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scroll-snap-type: x proximity;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.colors.surface};
    border-radius: 3px;
  }
`;

const Tab = styled.button<{ $selected: boolean }>`
  flex: 0 0 auto;
  scroll-snap-align: start;
  font-family: ${(p) => p.theme.fonts.sans};
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.65rem 1.1rem;
  border-radius: 999px;
  border: 2px solid
    ${(p) =>
      p.$selected ? p.theme.colors.primary : "rgba(27, 67, 50, 0.15)"};
  background: ${(p) =>
    p.$selected ? p.theme.colors.primary : p.theme.colors.white};
  color: ${(p) =>
    p.$selected ? p.theme.colors.white : p.theme.colors.text};
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  white-space: nowrap;

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
    background: ${(p) =>
      p.$selected ? p.theme.colors.primaryHover : p.theme.colors.surface};
    color: ${(p) =>
      p.$selected ? p.theme.colors.white : p.theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.accent};
    outline-offset: 2px;
  }
`;

const TabHint = styled.p`
  margin: 0 0 1.25rem;
  font-size: 0.9rem;
  color: ${(p) => p.theme.colors.muted};
  max-width: 36rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ItemBtn = styled.button`
  position: relative;
  border-radius: ${(p) => p.theme.radius};
  overflow: hidden;
  aspect-ratio: 4 / 3;
  cursor: pointer;
  border: 0;
  padding: 0;
  width: 100%;
  display: block;
  background: ${(p) => p.theme.colors.surface};
  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.accent};
    outline-offset: 2px;
  }
`;

const Cap = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem 1rem;
  background: linear-gradient(transparent, rgba(15, 23, 42, 0.85));
  color: ${(p) => p.theme.colors.white};
  font-size: 0.85rem;
  text-align: left;
`;

const EmptyPanel = styled.div`
  padding: 2.5rem 1.5rem;
  text-align: center;
  background: ${(p) => p.theme.colors.surface};
  border-radius: ${(p) => p.theme.radius};
  border: 1px dashed rgba(27, 67, 50, 0.2);
`;

const EmptyTitle = styled.p`
  margin: 0 0 0.5rem;
  font-weight: 600;
  color: ${(p) => p.theme.colors.primary};
  font-family: ${(p) => p.theme.fonts.serif};
`;

const EmptyText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${(p) => p.theme.colors.muted};
`;

const Lightbox = styled.div<{ $active: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(15, 23, 42, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 4vw, 2rem);
  opacity: ${(p) => (p.$active ? 1 : 0)};
  visibility: ${(p) => (p.$active ? "visible" : "hidden")};
  transition: opacity 0.25s, visibility 0.25s;
`;

const LBInner = styled.div`
  max-width: 56rem;
  max-height: 90vh;
  position: relative;
`;

const LBClose = styled.button`
  position: absolute;
  top: -2.75rem;
  right: 0;
  background: ${(p) => p.theme.colors.white};
  border: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: ${(p) => p.theme.colors.text};
`;

const LBCap = styled.p`
  color: ${(p) => p.theme.colors.white};
  text-align: center;
  margin-top: 0.75rem;
  font-size: 0.95rem;
`;

const CtaRow = styled.p`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

function tabFromSearchParams(raw: string | null): GalleryCategory {
  if (raw && isGalleryCategory(raw)) {
    return raw;
  }
  return DEFAULT_GALLERY_CATEGORY;
}

export default function GallerySection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [category, setCategory] = useState<GalleryCategory>(() =>
    tabFromSearchParams(tabParam),
  );
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [liveMsg, setLiveMsg] = useState("");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setCategory(tabFromSearchParams(tabParam));
  }, [tabParam]);

  const filtered = useMemo(
    () => galleryItems.filter((i) => i.category === category),
    [category],
  );

  const tabMeta = useMemo(
    () => GALLERY_TABS.find((t) => t.id === category),
    [category],
  );

  useEffect(() => {
    if (
      lightboxItem &&
      !galleryItems.some(
        (i) => i.src === lightboxItem.src && i.category === category,
      )
    ) {
      setLightboxItem(null);
    }
  }, [category, lightboxItem]);

  useEffect(() => {
    const tab = GALLERY_TABS.find((t) => t.id === category);
    const count = galleryItems.filter((i) => i.category === category).length;
    setLiveMsg(
      `${tab?.label ?? category}: ${count} sample ${count === 1 ? "listing" : "listings"}. ${tab?.description ?? ""}`,
    );
  }, [category]);

  const selectCategory = useCallback(
    (id: GalleryCategory, focusIndex?: number) => {
      setCategory(id);
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", id);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      if (focusIndex !== undefined) {
        requestAnimationFrame(() => {
          tabRefs.current[focusIndex]?.focus();
        });
      }
    },
    [pathname, router, searchParams],
  );

  const closeLightbox = useCallback(() => setLightboxItem(null), []);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeLightbox]);

  useEffect(() => {
    document.body.style.overflow = lightboxItem ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxItem]);

  const onTabListKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const ids = GALLERY_TABS.map((t) => t.id);
    const idx = ids.indexOf(category);
    if (idx < 0) {
      return;
    }
    let nextIdx = idx;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIdx = (idx + 1) % ids.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIdx = (idx - 1 + ids.length) % ids.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIdx = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIdx = ids.length - 1;
    } else {
      return;
    }
    selectCategory(ids[nextIdx], nextIdx);
  };

  return (
    <Wrap>
      <div className="visually-hidden"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {liveMsg}
      </div>
      <Head>
        <H1>Gallery</H1>
        <Lead>
          Browse sample listings by category. Replace images and captions with
          your real inventory when ready.
        </Lead>
      </Head>

      <TabList
        role="tablist"
        aria-label="Listing categories"
        onKeyDown={onTabListKeyDown}
      >
        {GALLERY_TABS.map((t, i) => (
          <Tab
            key={t.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`gallery-tab-${t.id}`}
            aria-selected={category === t.id}
            aria-controls="gallery-panel"
            tabIndex={category === t.id ? 0 : -1}
            $selected={category === t.id}
            onClick={() => selectCategory(t.id)}
          >
            {t.label}
          </Tab>
        ))}
      </TabList>

      {tabMeta && <TabHint>{tabMeta.description}</TabHint>}

      <div
        id="gallery-panel"
        role="tabpanel"
        aria-labelledby={`gallery-tab-${category}`}
      >
        {filtered.length === 0 ? (
          <EmptyPanel>
            <EmptyTitle>No sample listings in this category yet</EmptyTitle>
            <EmptyText>
              Add entries in <code>lib/gallery-data.ts</code> with the matching{" "}
              <code>category</code>, or contact us to feature your properties.
            </EmptyText>
          </EmptyPanel>
        ) : (
          <Grid>
            {filtered.map((item) => (
              <ItemBtn
                key={item.src}
                type="button"
                aria-label={`Enlarge: ${item.caption}`}
                onClick={() => setLightboxItem(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <Cap>{item.caption}</Cap>
              </ItemBtn>
            ))}
          </Grid>
        )}
      </div>

      <CtaRow>
        <Button
          text="Enquire on WhatsApp"
          variant="secondary"
          href={WHATSAPP_URL}
          external
        />
        <Button text="Contact" href="/contact" variant="outline" />
      </CtaRow>

      <Lightbox
        $active={!!lightboxItem}
        role="dialog"
        aria-modal="true"
        aria-hidden={!lightboxItem}
        aria-label="Image preview"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeLightbox();
          }
        }}
      >
        {lightboxItem && (
          <LBInner>
            <LBClose
              type="button"
              aria-label="Close preview"
              onClick={closeLightbox}
            >
              ×
            </LBClose>
            <Image
              src={lightboxItem.src}
              alt={lightboxItem.alt}
              width={1200}
              height={900}
              sizes="90vw"
              style={{
                maxHeight: "85vh",
                width: "auto",
                margin: "0 auto",
                borderRadius: "12px",
                objectFit: "contain",
              }}
            />
            <LBCap>{lightboxItem.caption}</LBCap>
          </LBInner>
        )}
      </Lightbox>
    </Wrap>
  );
}

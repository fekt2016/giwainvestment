"use client";

import styled from "styled-components";
import Image from "next/image";
import { FOUNDER_PROFILE_PHOTOS } from "@/lib/founder-photos";

const Outer = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.maxWidth};
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
  padding-bottom: clamp(2rem, 4vw, 3rem);
`;

const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.serif};
  font-weight: 700;
  color: ${(p) => p.theme.colors.primary};
  font-size: clamp(1.35rem, 3vw, 1.65rem);
  margin: 0 0 0.5rem;
`;

const Lead = styled.p`
  margin: 0 0 1.5rem;
  font-size: 0.95rem;
  color: ${(p) => p.theme.colors.muted};
  max-width: 40rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  @media (min-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Figure = styled.figure`
  margin: 0;
  border-radius: ${(p) => p.theme.radius};
  overflow: hidden;
  background: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.shadow};
  border: 1px solid rgba(27, 67, 50, 0.08);
`;

const ImgWrap = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  background: ${(p) => p.theme.colors.surface};
`;

const Caption = styled.figcaption`
  padding: 0.65rem 0.85rem;
  font-size: 0.82rem;
  color: ${(p) => p.theme.colors.muted};
  line-height: 1.45;
`;

export default function FounderPhotoGallery() {
  return (
    <Outer>
      <Title>In pictures</Title>
      <Lead>
        Sarki Abass Giwa in leadership, ceremony, and day-to-day work across
        Ghana&rsquo;s real estate sector.
      </Lead>
      <Grid>
        {FOUNDER_PROFILE_PHOTOS.map((photo) => (
          <Figure key={photo.src}>
            <ImgWrap>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </ImgWrap>
            <Caption>{photo.caption}</Caption>
          </Figure>
        ))}
      </Grid>
    </Outer>
  );
}

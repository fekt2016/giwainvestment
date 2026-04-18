"use client";

import styled from "styled-components";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/site";
import {
  FOUNDER_HOME_BODY,
  FOUNDER_HOME_INTRO,
  FOUNDER_NAME,
} from "@/lib/founder";
import {
  FOUNDER_LEADERSHIP_ALT,
  FOUNDER_LEADERSHIP_IMAGE,
} from "@/lib/founder-photos";

const Hero = styled.section`
  padding: clamp(2.5rem, 6vw, 4.5rem) 0;
  background: linear-gradient(
    165deg,
    ${(p) => p.theme.colors.surface} 0%,
    ${(p) => p.theme.colors.bg} 45%,
    #e8f0ec 100%
  );
  border-bottom: 1px solid rgba(27, 67, 50, 0.08);
`;

const Wrap = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.maxWidth};
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
`;

const HeroGrid = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

const H1 = styled.h1`
  font-family: ${(p) => p.theme.fonts.serif};
  font-weight: 700;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.primary};
  font-size: clamp(2rem, 5vw, 2.75rem);
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
`;

const Lead = styled.p`
  font-size: 1.125rem;
  color: ${(p) => p.theme.colors.muted};
  max-width: 38rem;
  margin: 0 0 1.25rem;
`;

const BtnRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const HeroVisual = styled.div`
  border-radius: ${(p) => p.theme.radius};
  overflow: hidden;
  box-shadow: ${(p) => p.theme.shadow};
  aspect-ratio: 4 / 3;
  position: relative;
`;

const Section = styled.section<{ $surface?: boolean }>`
  padding: clamp(2.5rem, 5vw, 4rem) 0;
  background: ${(p) => (p.$surface ? p.theme.colors.surface : "transparent")};
`;

const SectionHead = styled.div`
  max-width: 40rem;
  margin-bottom: 2rem;
`;

const H2 = styled.h2`
  font-family: ${(p) => p.theme.fonts.serif};
  font-weight: 700;
  color: ${(p) => p.theme.colors.primary};
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  line-height: 1.2;
  margin: 0 0 0.75rem;
`;

const Cards = styled.div`
  display: grid;
  gap: 1.25rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.article`
  background: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radius};
  padding: 1.5rem;
  box-shadow: ${(p) => p.theme.shadow};
  border: 1px solid rgba(27, 67, 50, 0.06);
`;

const H3 = styled.h3`
  font-family: ${(p) => p.theme.fonts.serif};
  font-weight: 700;
  color: ${(p) => p.theme.colors.primary};
  font-size: 1.2rem;
  margin: 0 0 0.5rem;
`;

const CardP = styled.p`
  margin: 0;
  color: ${(p) => p.theme.colors.muted};
  font-size: 0.95rem;
`;

const Steps = styled.ol`
  display: grid;
  gap: 1rem;
  counter-reset: step;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StepLi = styled.li`
  position: relative;
  padding: 1.25rem 1.25rem 1.25rem 3.25rem;
  background: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radius};
  border: 1px solid rgba(27, 67, 50, 0.08);
  &::before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    left: 1rem;
    top: 1.1rem;
    width: 1.75rem;
    height: 1.75rem;
    background: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.text};
    font-weight: 700;
    font-size: 0.85rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StepStrong = styled.strong`
  display: block;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 0.35rem;
`;

const CtaBand = styled.div`
  background: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.white};
  padding: 2rem clamp(1rem, 4vw, 2rem);
  border-radius: ${(p) => p.theme.radius};
  text-align: center;
  margin-top: 2rem;
`;

const CtaH2 = styled.h2`
  font-family: ${(p) => p.theme.fonts.serif};
  color: ${(p) => p.theme.colors.white};
  margin: 0 0 0.5rem;
  font-size: clamp(1.35rem, 3vw, 1.75rem);
`;

const CtaP = styled.p`
  opacity: 0.92;
  margin: 0 0 1rem;
`;

const FounderGrid = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: minmax(0, 280px) 1fr;
    gap: 2.5rem;
  }
`;

const FounderPhoto = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  max-width: 280px;
  width: 100%;
  margin-inline: auto;
  border-radius: ${(p) => p.theme.radius};
  border: 2px solid rgba(27, 67, 50, 0.12);
  overflow: hidden;
  box-shadow: ${(p) => p.theme.shadow};
  background: ${(p) => p.theme.colors.surface};
`;

const FounderName = styled.h2`
  font-family: ${(p) => p.theme.fonts.serif};
  font-weight: 700;
  color: ${(p) => p.theme.colors.primary};
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  margin: 0 0 0.35rem;
`;

const FounderRole = styled.p`
  margin: 0 0 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${(p) => p.theme.colors.primary};
  opacity: 0.9;
`;

const FounderP = styled.p`
  margin: 0 0 0.85rem;
  color: ${(p) => p.theme.colors.muted};
  font-size: 1.02rem;
  line-height: 1.65;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default function HomeContent() {
  return (
    <>
      <Hero>
        <Wrap>
          <HeroGrid>
            <div>
              <H1>Homes, land, and rentals you can trust</H1>
              <Lead>
                Led by Sarki Abass Giwa, Giwa Investment helps Ghanaians buy,
                sell, and lease property — from houses and apartments to land —
                with straightforward guidance and responsive support.
              </Lead>
              <BtnRow>
                <Button
                  text="WhatsApp us"
                  variant="secondary"
                  href={WHATSAPP_URL}
                  external
                />
                <Button text="Contact" href="/contact" variant="primary" />
                <Button text="View gallery" href="/gallery" variant="outline" />
              </BtnRow>
            </div>
            <HeroVisual>
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80"
                alt="Modern residential home with lawn and blue sky"
                width={900}
                height={675}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </HeroVisual>
          </HeroGrid>
        </Wrap>
      </Hero>
      <Section $surface>
        <Wrap>
          <SectionHead>
            <H2>Our leadership</H2>
            <Lead style={{ margin: 0 }}>
              The values behind Giwa Investment — community, faith, and
              straight talk about property.
            </Lead>
          </SectionHead>
          <FounderGrid>
            <FounderPhoto>
              <Image
                src={FOUNDER_LEADERSHIP_IMAGE}
                alt={FOUNDER_LEADERSHIP_ALT}
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                style={{ objectFit: "cover" }}
              />
            </FounderPhoto>
            <div>
              <FounderName>{FOUNDER_NAME}</FounderName>
              <FounderRole>Founder · Chief · Real estate, land &amp; housing</FounderRole>
              <FounderP>{FOUNDER_HOME_INTRO}</FounderP>
              <FounderP>{FOUNDER_HOME_BODY}</FounderP>
              <BtnRow style={{ marginTop: "1rem" }}>
                <Button text="Read full profile" href="/about" variant="outline" />
                <Button text="Contact" href="/contact" variant="primary" />
              </BtnRow>
            </div>
          </FounderGrid>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead>
            <H2>What we do</H2>
            <Lead style={{ margin: 0 }}>
              Whether you are moving in, investing, or partnering on a project,
              we focus on clarity and realistic timelines.
            </Lead>
          </SectionHead>
          <Cards>
            <Card>
              <H3>Buy</H3>
              <CardP>
                Houses and completed homes — viewings, pricing in GHS, and
                support through your purchase journey.
              </CardP>
            </Card>
            <Card>
              <H3>Land</H3>
              <CardP>
                Plots and development land — we help you ask the right due
                diligence questions before you commit.
              </CardP>
            </Card>
            <Card>
              <H3>Rent</H3>
              <CardP>
                Apartments and houses for rent — shorter paths to scheduling
                viewings and lease conversations.
              </CardP>
            </Card>
          </Cards>
        </Wrap>
      </Section>
      <Section $surface>
        <Wrap>
          <SectionHead>
            <H2>How it works</H2>
            <Lead style={{ margin: 0 }}>
              A simple rhythm so you always know what comes next.
            </Lead>
          </SectionHead>
          <Steps>
            <StepLi>
              <StepStrong>Reach out</StepStrong>
              Tell us what you need — buy, rent, land, invest, or partner.
            </StepLi>
            <StepLi>
              <StepStrong>Align</StepStrong>
              We share options, realistic expectations, and documentation to
              review.
            </StepLi>
            <StepLi>
              <StepStrong>Move forward</StepStrong>
              Viewings, offers, and agreements with your advisers as needed.
            </StepLi>
          </Steps>
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <CtaBand>
            <CtaH2>Ready to talk?</CtaH2>
            <CtaP>
              Message us on WhatsApp or visit our contact page — we reply as
              soon as we can.
            </CtaP>
            <Button
              text="Open WhatsApp"
              variant="secondary"
              href={WHATSAPP_URL}
              external
            />
          </CtaBand>
        </Wrap>
      </Section>
    </>
  );
}

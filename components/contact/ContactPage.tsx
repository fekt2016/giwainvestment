"use client";

import styled from "styled-components";
import ContactForm from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import {
  CONTACT_EMAIL,
  WHATSAPP_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/site";

const Wrap = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.maxWidth};
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
  padding-block: clamp(2.5rem, 5vw, 4rem);
`;

const Head = styled.div`
  max-width: 40rem;
  margin-bottom: 2rem;
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

const Grid = styled.div`
  display: grid;
  gap: 2.5rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.1fr;
    align-items: start;
  }
`;

const Card = styled.div`
  background: ${(p) => p.theme.colors.white};
  padding: 1.5rem;
  border-radius: ${(p) => p.theme.radius};
  box-shadow: ${(p) => p.theme.shadow};
`;

const H2 = styled.h2`
  font-family: ${(p) => p.theme.fonts.serif};
  font-size: 1.35rem;
  color: ${(p) => p.theme.colors.primary};
  margin: 0 0 1rem;
`;

const Muted = styled.span`
  color: ${(p) => p.theme.colors.muted};
  font-size: 0.85rem;
`;

const P = styled.p`
  margin: 0 0 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Strong = styled.strong`
  color: ${(p) => p.theme.colors.text};
`;

export default function ContactPage() {
  return (
    <Wrap>
      <Head>
        <H1>Contact</H1>
        <Lead>
          Call, email, WhatsApp, or send a message — we will get back to you as
          soon as we can.
        </Lead>
      </Head>
      <Grid>
        <Card>
          <H2>Direct</H2>
          <P>
            <Strong>Phone</Strong>
            <br />
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>{" "}
            <Muted>(update)</Muted>
          </P>
          <P>
            <Strong>WhatsApp</Strong>
            <br />
            <Button
              text="Chat on WhatsApp"
              variant="secondary"
              href={WHATSAPP_URL}
              external
            />
          </P>
          <P>
            <Strong>Email</Strong>
            <br />
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </P>
          <P>
            <Strong>Office</Strong>
            <br />
            Add your address when ready; we can embed a map below.
          </P>
        </Card>
        <ContactForm />
      </Grid>
    </Wrap>
  );
}

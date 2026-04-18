"use client";

import styled from "styled-components";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

const Footer = styled.footer`
  background: ${(p) => p.theme.colors.footer};
  color: #e7e5e4;
  padding: 2.5rem 0;
  margin-top: auto;
`;

const Wrap = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.maxWidth};
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  @media (min-width: 640px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const FootH = styled.h3`
  color: ${(p) => p.theme.colors.white};
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 0.75rem;
  font-family: ${(p) => p.theme.fonts.sans};
`;

const FootList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin-bottom: 0.5rem;
  }
`;

const FootLink = styled(Link)`
  color: ${(p) => p.theme.colors.footerLink};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

const Mail = styled.a`
  color: ${(p) => p.theme.colors.footerLink};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

const Brand = styled.div`
  font-family: ${(p) => p.theme.fonts.serif};
  font-weight: 700;
  font-size: 1.1rem;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 0.5rem;
`;

const Copy = styled.p`
  font-size: 0.85rem;
  color: #a8a29e;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/investors", label: "Investors" },
  { href: "/work-with-us", label: "Work with us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
] as const;

export default function SiteFooter() {
  return (
    <Footer>
      <Wrap>
        <Grid>
          <div>
            <Brand>Giwa Investment</Brand>
            <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>
              Real estate in Ghana — houses, land, and rentals. Honest
              conversations, clear next steps.
            </p>
            <p
              style={{
                margin: "0.75rem 0 0",
                fontSize: "0.85rem",
                opacity: 0.88,
              }}
            >
              Led by <strong>Sarki Abass Giwa</strong>.
            </p>
          </div>
          <div>
            <FootH>Explore</FootH>
            <FootList>
              {links.map((l) => (
                <li key={l.href}>
                  <FootLink href={l.href}>{l.label}</FootLink>
                </li>
              ))}
            </FootList>
          </div>
          <div>
            <FootH>Contact</FootH>
            <FootList>
              <li>
                <Mail href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Mail>
              </li>
              <li>
                <FootLink href="/contact">Contact page</FootLink>
              </li>
            </FootList>
          </div>
        </Grid>
        <Copy>© {new Date().getFullYear()} Giwa Investment. Serving clients across Ghana.</Copy>
      </Wrap>
    </Footer>
  );
}

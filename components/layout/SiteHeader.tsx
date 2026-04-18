"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/investors", label: "Investors" },
  { href: "/work-with-us", label: "Work with us" },
  { href: "/contact", label: "Contact" },
] as const;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(250, 248, 245, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${(p) => p.theme.colors.surface};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: ${(p) => p.theme.headerHeight};
  gap: 1rem;
  width: 100%;
  max-width: ${(p) => p.theme.maxWidth};
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
`;

const Logo = styled(Link)`
  font-family: ${(p) => p.theme.fonts.serif};
  font-weight: 700;
  font-size: 1.15rem;
  color: ${(p) => p.theme.colors.primary};
  text-decoration: none;
  letter-spacing: -0.02em;
  &:hover {
    color: ${(p) => p.theme.colors.primaryHover};
  }
  span {
    color: ${(p) => p.theme.colors.accent};
  }
`;

const NavToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 1px solid ${(p) => p.theme.colors.surface};
  border-radius: ${(p) => p.theme.radius};
  background: ${(p) => p.theme.colors.white};
  cursor: pointer;
  color: ${(p) => p.theme.colors.primary};
  @media (min-width: 960px) {
    display: none;
  }
`;

const Bars = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 1.25rem;
  span {
    display: block;
    height: 2px;
    background: currentColor;
    border-radius: 1px;
  }
`;

const Nav = styled.nav<{ $open: boolean }>`
  display: none;
  ${(p) =>
    p.$open &&
    `
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    background: ${p.theme.colors.bg};
    border-bottom: 1px solid ${p.theme.colors.surface};
    padding: 1rem clamp(1rem, 4vw, 2rem) 1.5rem;
    box-shadow: ${p.theme.shadow};
  `}
  @media (min-width: 960px) {
    display: block !important;
    position: static !important;
    padding: 0 !important;
    border: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  @media (min-width: 960px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.15rem;
  }
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  display: block;
  padding: 0.65rem 0.75rem;
  border-radius: 8px;
  color: ${(p) => p.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  @media (min-width: 960px) {
    padding: 0.5rem 0.85rem;
  }
  &:hover,
  &[aria-current="page"] {
    background: ${(p) => p.theme.colors.surface};
    color: ${(p) => p.theme.colors.primary};
  }
`;

const Skip = styled.a`
  position: absolute;
  left: -9999px;
  z-index: 999;
  padding: 0.75rem 1rem;
  background: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.text};
  font-weight: 600;
  &:focus {
    left: clamp(1rem, 4vw, 2rem);
    top: clamp(1rem, 4vw, 2rem);
  }
`;

const HeaderWrap = styled.div`
  position: relative;
`;

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export default function SiteHeader() {
  const pathname = normalizePath(usePathname());
  const [open, setOpen] = useState(false);

  return (
    <>
      <Skip href="#main">Skip to content</Skip>
      <Header>
        <HeaderWrap>
          <Inner>
            <Logo href="/">
              Giwa <span>Investment</span>
            </Logo>
            <NavToggle
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="visually-hidden">Menu</span>
              <Bars aria-hidden="true">
                <span />
                <span />
                <span />
              </Bars>
            </NavToggle>
            <Nav id="site-menu" aria-label="Primary" $open={open}>
              <NavList>
                {nav.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      aria-current={
                        pathname === item.href ? "page" : undefined
                      }
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </NavList>
            </Nav>
          </Inner>
        </HeaderWrap>
      </Header>
    </>
  );
}

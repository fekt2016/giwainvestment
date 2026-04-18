"use client";

import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.maxWidth};
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
  padding-block: clamp(2.5rem, 5vw, 4rem);
`;

const Prose = styled.article`
  max-width: 42rem;
  font-family: ${(p) => p.theme.fonts.sans};
  color: ${(p) => p.theme.colors.text};
  line-height: 1.6;

  h1 {
    font-family: ${(p) => p.theme.fonts.serif};
    font-weight: 700;
    color: ${(p) => p.theme.colors.primary};
    font-size: clamp(2rem, 5vw, 2.75rem);
    line-height: 1.2;
    margin: 0 0 0.75rem;
  }

  h2 {
    font-family: ${(p) => p.theme.fonts.serif};
    font-weight: 700;
    color: ${(p) => p.theme.colors.primary};
    font-size: 1.35rem;
    margin: 1.5rem 0 0.5rem;
  }

  h3 {
    font-family: ${(p) => p.theme.fonts.serif};
    font-weight: 700;
    color: ${(p) => p.theme.colors.primary};
    font-size: 1.15rem;
    margin: 1.25rem 0 0.5rem;
  }

  p {
    margin: 0 0 1rem;
  }

  .lead {
    font-size: 1.125rem;
    color: ${(p) => p.theme.colors.muted};
  }

  ul {
    color: ${(p) => p.theme.colors.muted};
    padding-left: 1.25rem;
  }

  a {
    color: ${(p) => p.theme.colors.primary};
    font-weight: 600;
  }

  .legal-note {
    font-size: 0.8rem;
    color: ${(p) => p.theme.colors.muted};
    line-height: 1.5;
  }
`;

export default function ProsePage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrap>
      <Prose>{children}</Prose>
    </Wrap>
  );
}

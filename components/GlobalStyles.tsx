"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: ${(p) => p.theme.fonts.sans};
    font-size: 1rem;
    line-height: 1.6;
    color: ${(p) => p.theme.colors.text};
    background: ${(p) => p.theme.colors.bg};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.accent};
    outline-offset: 2px;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export default GlobalStyles;

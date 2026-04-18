"use client";

import styled, { css } from "styled-components";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const stylesForVariant = ($variant: Variant) => {
  switch ($variant) {
    case "primary":
      return css`
        background: ${(p) => p.theme.colors.primary};
        color: ${(p) => p.theme.colors.white};
        border-color: transparent;
        &:hover:not(:disabled) {
          background: ${(p) => p.theme.colors.primaryHover};
          color: ${(p) => p.theme.colors.white};
        }
      `;
    case "secondary":
      return css`
        background: ${(p) => p.theme.colors.accent};
        color: ${(p) => p.theme.colors.text};
        border-color: ${(p) => p.theme.colors.accent};
        &:hover:not(:disabled) {
          background: ${(p) => p.theme.colors.accentHover};
          border-color: ${(p) => p.theme.colors.accentHover};
        }
      `;
    case "outline":
      return css`
        background: transparent;
        color: ${(p) => p.theme.colors.primary};
        border-color: ${(p) => p.theme.colors.primary};
        &:hover:not(:disabled) {
          background: ${(p) => p.theme.colors.surface};
        }
      `;
    default: {
      const _exhaustive: never = $variant;
      return _exhaustive;
    }
  }
};

const StyledButton = styled.button<{
  $variant: Variant;
  $fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.35rem;
  font-family: ${(p) => p.theme.fonts.sans};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${(p) => p.theme.radius};
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  width: ${(p) => (p.$fullWidth ? "100%" : "auto")};
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
  ${(p) => stylesForVariant(p.$variant)}
`;

const StyledLinkButton = styled(Link)<{ $variant: Variant; $fullWidth?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.35rem;
  font-family: ${(p) => p.theme.fonts.sans};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${(p) => p.theme.radius};
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  width: ${(p) => (p.$fullWidth ? "100%" : "auto")};
  ${(p) => stylesForVariant(p.$variant)}
`;

export type ButtonProps = {
  text: string;
  icon?: ReactNode;
  variant?: Variant;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  href?: string;
  external?: boolean;
  "aria-label"?: string;
};

export function Button({
  text,
  icon,
  variant = "primary",
  fullWidth,
  disabled,
  loading,
  type = "button",
  onClick,
  href,
  external,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const content = (
    <>
      {loading ? "Loading…" : text}
      {!loading && icon}
    </>
  );

  if (href) {
    if (external) {
      return (
        <StyledLinkButton
          $variant={variant}
          $fullWidth={fullWidth}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {content}
        </StyledLinkButton>
      );
    }
    return (
      <StyledLinkButton
        $variant={variant}
        $fullWidth={fullWidth}
        href={href}
        aria-label={ariaLabel}
      >
        {content}
      </StyledLinkButton>
    );
  }

  return (
    <StyledButton
      type={type}
      $variant={variant}
      $fullWidth={fullWidth}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading || undefined}
      aria-label={ariaLabel}
    >
      {content}
    </StyledButton>
  );
}

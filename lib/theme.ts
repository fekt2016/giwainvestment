export interface AppTheme {
  colors: {
    primary: string;
    primaryHover: string;
    accent: string;
    accentHover: string;
    bg: string;
    surface: string;
    text: string;
    muted: string;
    footer: string;
    white: string;
    footerLink: string;
  };
  fonts: {
    sans: string;
    serif: string;
  };
  radius: string;
  shadow: string;
  maxWidth: string;
  headerHeight: string;
}

const theme: AppTheme = {
  colors: {
    primary: "#1b4332",
    primaryHover: "#152f24",
    accent: "#c9a227",
    accentHover: "#b08d1f",
    bg: "#faf8f5",
    surface: "#f0ede8",
    text: "#292524",
    muted: "#57534e",
    footer: "#0f172a",
    white: "#ffffff",
    footerLink: "#fde68a",
  },
  fonts: {
    sans: "var(--font-dm-sans), system-ui, sans-serif",
    serif: "var(--font-source-serif), Georgia, serif",
  },
  radius: "12px",
  shadow: "0 4px 24px rgba(15, 23, 42, 0.08)",
  maxWidth: "72rem",
  headerHeight: "4rem",
};

export default theme;

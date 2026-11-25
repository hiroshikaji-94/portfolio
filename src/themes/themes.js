// Design tokens. Colours are exposed to every component as CSS custom
// properties (see GlobalStyles), so switching theme only swaps variables.
const bpSize = {
  mobile: '30em', // 480px
  tablet: '48em', // 768px
  laptop: '64em', // 1024px
};

export const base = {
  fonts: {
    // Inter has no Japanese glyphs, so the browser falls through to Noto Sans
    // JP for Japanese text and keeps Inter for Latin text in the same line.
    sans: "'Inter', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
  },
  bp: {
    mobile: `only screen and (max-width: ${bpSize.mobile})`,
    tablet: `only screen and (max-width: ${bpSize.tablet})`,
    laptop: `only screen and (max-width: ${bpSize.laptop})`,
  },
};

const shared = {
  primary: '#6366f1',
  primaryDark: '#4f46e5',
  accent: '#f59e0b',
  success: '#10b981',
  violet: '#8b5cf6',
  // The navbar, footer and code window stay dark in both themes.
  navBg: 'rgba(15, 23, 42, 0.9)',
  footerBg: '#0f172a',
  codeBg: '#0f172a',
  shadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  shadowHover:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

export const lightTheme = {
  ...shared,
  name: 'light',
  bg: '#ffffff',
  bgAlt: '#f8fafc',
  // Cards sit on either background; both are white in light mode.
  surface: '#ffffff',
  surfaceOnAlt: '#ffffff',
  surfaceMuted: '#f8fafc',
  text: '#0f172a',
  textBody: '#334155',
  textSecondary: '#64748b',
  textMuted: '#94a3b8',
  border: '#e2e8f0',
  cardBorder: 'transparent',
  tagBg: '#f8fafc',
};

export const darkTheme = {
  ...shared,
  name: 'dark',
  bg: '#0f172a',
  bgAlt: '#1e293b',
  surface: '#1e293b',
  surfaceOnAlt: '#0f172a',
  surfaceMuted: '#0f172a',
  text: '#f1f5f9',
  textBody: '#d5dde8',
  textSecondary: '#cbd5e1',
  textMuted: '#8b9ab1',
  border: '#334155',
  cardBorder: 'rgba(148, 163, 184, 0.12)',
  tagBg: 'rgba(148, 163, 184, 0.1)',
  shadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
  shadowHover:
    '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.25)',
};

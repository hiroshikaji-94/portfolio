import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: ${({ theme }) => theme.primary};
    --primary-dark: ${({ theme }) => theme.primaryDark};
    --accent: ${({ theme }) => theme.accent};
    --success: ${({ theme }) => theme.success};
    --violet: ${({ theme }) => theme.violet};
    --bg: ${({ theme }) => theme.bg};
    --bg-alt: ${({ theme }) => theme.bgAlt};
    --surface: ${({ theme }) => theme.surface};
    --surface-on-alt: ${({ theme }) => theme.surfaceOnAlt};
    --surface-muted: ${({ theme }) => theme.surfaceMuted};
    --text: ${({ theme }) => theme.text};
    --text-body: ${({ theme }) => theme.textBody};
    --text-secondary: ${({ theme }) => theme.textSecondary};
    --text-muted: ${({ theme }) => theme.textMuted};
    --border: ${({ theme }) => theme.border};
    --card-border: ${({ theme }) => theme.cardBorder};
    --tag-bg: ${({ theme }) => theme.tagBg};
    --shadow: ${({ theme }) => theme.shadow};
    --shadow-hover: ${({ theme }) => theme.shadowHover};
    --nav-bg: ${({ theme }) => theme.navBg};
    --footer-bg: ${({ theme }) => theme.footerBg};
    --code-bg: ${({ theme }) => theme.codeBg};
    --font-sans: ${({ theme }) => theme.fonts.sans};
    --font-mono: ${({ theme }) => theme.fonts.mono};
    --gradient: linear-gradient(135deg, var(--primary), var(--primary-dark));
    --radius: 0.75rem;
    --nav-height: 4rem;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    /* Cards read this, and each Section sets it for its own background. */
    --card-bg: var(--surface);
    color-scheme: ${({ theme }) => theme.name};
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    /* Keeps anchored sections clear of the fixed navbar. */
    scroll-padding-top: calc(var(--nav-height) + 1rem);
    -webkit-text-size-adjust: 100%;
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
  }

  body {
    font-family: var(--font-sans);
    color: var(--text);
    background-color: var(--bg);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    color: var(--text);
  }

  p {
    color: var(--text-secondary);
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: var(--transition);
  }

  a:hover {
    color: var(--primary-dark);
  }

  img, picture, svg, video {
    display: block;
    max-width: 100%;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }

  ::selection {
    background-color: rgba(99, 102, 241, 0.25);
  }

  :focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 3px;
    border-radius: 0.25rem;
  }

  .sr-only {
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

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;

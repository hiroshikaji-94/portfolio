import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

// Shared layout and component primitives used by every section.

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media ${({ theme }) => theme.bp.mobile} {
    padding: 0 1rem;
  }
`;

export const Section = styled.section`
  padding: 6rem 0;
  background-color: ${({ $alt }) => ($alt ? 'var(--bg-alt)' : 'var(--bg)')};
  /* Cards on this section pick the surface that contrasts with it. */
  --card-bg: ${({ $alt }) =>
    $alt ? 'var(--surface-on-alt)' : 'var(--surface)'};
  transition: background-color 0.3s ease;

  @media ${({ theme }) => theme.bp.tablet} {
    padding: 4rem 0;
  }
`;

export const StyledSectionHeader = styled(motion.header)`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    position: relative;
    display: inline-block;
    font-size: 2.5rem;
    margin-bottom: 1rem;

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 3rem;
      height: 3px;
      background: var(--gradient);
      border-radius: 2px;
    }
  }

  p {
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
  }

  @media ${({ theme }) => theme.bp.mobile} {
    margin-bottom: 3rem;

    h2 {
      font-size: 2rem;
    }
  }
`;

// Hover lift uses the standalone `translate` property so it composes with the
// transform framer-motion writes inline for scroll reveals.
export const cardStyles = css`
  background-color: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: translate 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;
`;

export const hoverLift = (distance = '4px') => css`
  &:hover {
    translate: 0 -${distance};
    box-shadow: var(--shadow-hover);
  }
`;

const buttonVariants = {
  primary: css`
    background-color: var(--primary);
    color: #ffffff;

    &:hover {
      background-color: var(--primary-dark);
      color: #ffffff;
      translate: 0 -2px;
      box-shadow: var(--shadow-hover);
    }
  `,
  secondary: css`
    background-color: transparent;
    color: var(--text);
    border-color: var(--border);

    &:hover {
      background-color: var(--bg-alt);
      color: var(--text);
      translate: 0 -2px;
    }
  `,
  outline: css`
    background-color: transparent;
    color: var(--primary);
    border-color: var(--primary);

    &:hover {
      background-color: var(--primary);
      color: #ffffff;
    }
  `,
};

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid transparent;
  border-radius: var(--radius);
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease, box-shadow 0.3s ease, translate 0.3s ease;

  svg {
    width: 1em;
    height: 1em;
    flex-shrink: 0;
  }

  ${({ $variant = 'primary' }) => buttonVariants[$variant]}
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.li`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: 1rem;
  background-color: var(--tag-bg);
  color: var(--text);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.3;
  white-space: nowrap;
`;

const badgeTones = {
  primary: 'var(--primary)',
  success: 'var(--success)',
  accent: 'var(--accent)',
  violet: 'var(--violet)',
};

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  background-color: ${({ $tone = 'primary' }) => badgeTones[$tone]};
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.3;
  white-space: nowrap;
`;

export const IconBox = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: var(--gradient);
  color: #ffffff;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

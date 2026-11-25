import styled, { css } from 'styled-components';

export const StyledNavbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: var(--nav-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const StyledNavInner = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: 1200px;
  height: var(--nav-height);
  margin: 0 auto;
  padding: 0 1.5rem;

  @media ${({ theme }) => theme.bp.mobile} {
    padding: 0 1rem;
  }
`;

export const StyledBrand = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    transition: filter 0.2s ease;
  }

  &:hover img {
    filter: drop-shadow(0 0 6px rgba(129, 140, 248, 0.6));
  }
`;

export const StyledNavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.75rem;
  margin-left: auto;

  @media ${({ theme }) => theme.bp.laptop} {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    width: 100%;
    height: calc(100vh - var(--nav-height));
    height: calc(100dvh - var(--nav-height));
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.75rem;
    padding: 2.5rem 1.5rem;
    overflow-y: auto;
    background-color: var(--bg);
    box-shadow: var(--shadow);
    transform: translateX(${({ $open }) => ($open ? '0' : '-100%')});
    visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s;
  }
`;

export const StyledNavLink = styled.a`
  position: relative;
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 500;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: #e2e8f0;
  }

  &:hover::after {
    width: 100%;
  }

  /* The mobile menu panel uses the page background, so links follow the theme. */
  @media ${({ theme }) => theme.bp.laptop} {
    color: ${({ $active }) => ($active ? 'var(--primary)' : 'var(--text)')};
    font-size: 1.125rem;

    &:hover {
      color: var(--primary);
    }
  }
`;

export const StyledNavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  @media ${({ theme }) => theme.bp.laptop} {
    margin-left: auto;
  }
`;

export const StyledControlButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  height: 2.25rem;
  padding: 0 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  font-size: 0.8125rem;
  font-weight: 500;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  svg {
    width: 0.95rem;
    height: 0.95rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.3);
  }

  ${({ $square }) =>
    $square &&
    css`
      width: 2.25rem;
      padding: 0;
    `}
`;

export const StyledMenuToggle = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 2.5rem;
  height: 2.25rem;
  margin-left: 0.25rem;

  span {
    display: block;
    width: 25px;
    height: 3px;
    border-radius: 2px;
    background-color: #ffffff;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  ${({ $open }) =>
    $open &&
    css`
      span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    `}

  @media ${({ theme }) => theme.bp.laptop} {
    display: flex;
  }
`;

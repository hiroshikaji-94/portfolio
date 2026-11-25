import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 2rem 0;
  background-color: var(--footer-bg);
  color: #ffffff;
`;

export const StyledFooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;

  h2 {
    margin-bottom: 0.25rem;
    color: #ffffff;
    font-size: 1.875rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }

  @media ${({ theme }) => theme.bp.tablet} {
    flex-direction: column;
    text-align: center;
  }
`;

export const StyledFooterLinks = styled.ul`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    transition: background-color 0.3s ease, translate 0.3s ease;
  }

  a:hover {
    background-color: var(--primary);
    color: #ffffff;
    translate: 0 -2px;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const StyledFooterBottom = styled.div`
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9375rem;
  }
`;

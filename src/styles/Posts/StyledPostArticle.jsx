import styled from 'styled-components';

export const StyledArticleSection = styled.article`
  max-width: 760px;
  margin: 0 auto;
  padding: calc(var(--nav-height) + 3rem) 1.5rem 6rem;

  h1 {
    margin: 1rem 0 1.25rem;
    font-size: 2.75rem;
    line-height: 1.2;
  }

  @media ${({ theme }) => theme.bp.tablet} {
    padding-bottom: 4rem;

    h1 {
      font-size: 2.25rem;
    }
  }

  @media ${({ theme }) => theme.bp.mobile} {
    padding-left: 1rem;
    padding-right: 1rem;

    h1 {
      font-size: 1.875rem;
    }
  }
`;

export const StyledBackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.9375rem;
  font-weight: 500;

  svg {
    width: 0.85rem;
    height: 0.85rem;
    transition: translate 0.2s ease;
  }

  &:hover svg {
    translate: -3px 0;
  }
`;

export const StyledArticleMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.875rem;
`;

export const StyledArticleFigure = styled.figure`
  margin: 2.5rem 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);

  img {
    width: 100%;
    height: auto;
  }
`;

export const StyledArticleBody = styled.div`
  color: var(--text-body);
  font-size: 1.0625rem;
  line-height: 1.8;

  > * + * {
    margin-top: 1.25rem;
  }

  p {
    color: var(--text-body);
  }
`;

export const StyledArticleLead = styled.p`
  && {
    color: var(--text);
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
  }
`;

export const StyledArticleList = styled.ul`
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius);
  background-color: var(--bg-alt);

  li {
    position: relative;
    padding-left: 1.5rem;
  }

  li + li {
    margin-top: 0.5rem;
  }

  li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: 700;
  }
`;

export const StyledArticleDialogue = styled.p`
  && {
    padding: 0.5rem 0 0.5rem 1.25rem;
    border-left: 3px solid var(--primary);
    color: var(--text);
    font-style: ${({ lang }) => (lang === 'ja' ? 'normal' : 'italic')};
  }

  strong {
    color: var(--primary);
    font-style: normal;
    font-weight: 600;
  }
`;

export const StyledArticleAside = styled.p`
  && {
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.4;
    text-align: center;
  }
`;

export const StyledArticleEnd = styled.p`
  && {
    margin-top: 3rem;
    color: var(--text-muted);
    font-size: 0.875rem;
    letter-spacing: 0.2em;
    text-align: center;
  }
`;

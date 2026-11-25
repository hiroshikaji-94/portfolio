import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { cardStyles, hoverLift } from '../UI/StyledUI';

export const StyledProjectGrid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(340px, 100%), 1fr));
  gap: 2rem;
`;

export const StyledProjectCard = styled(motion.li)`
  ${cardStyles}
  ${hoverLift()}
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${({ $featured }) =>
    $featured &&
    css`
      border: 2px solid var(--primary);
    `}

  &:hover img {
    transform: scale(1.03);
  }
`;

export const StyledProjectMedia = styled.a`
  display: block;
  aspect-ratio: 5 / 3;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
  background-color: var(--bg-alt);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const StyledProjectBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.75rem 2rem 2rem;

  h3 {
    margin: 1rem 0 0.75rem;
    font-size: 1.75rem;
  }

  > p {
    margin-bottom: 1.5rem;
    font-size: 0.9375rem;
    line-height: 1.65;
  }

  @media ${({ theme }) => theme.bp.mobile} {
    padding: 1.5rem;
  }
`;

export const StyledProjectTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const StyledProjectActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1.5rem;
`;

export const StyledAdditionalCard = styled(motion.div)`
  ${cardStyles}
  margin-top: 2rem;
  padding: 2rem;

  h3 {
    margin: 1rem 0 0.75rem;
    font-size: 1.75rem;
  }

  > p {
    margin-bottom: 1.5rem;
  }

  @media ${({ theme }) => theme.bp.mobile} {
    padding: 1.5rem;
  }
`;

export const StyledAdditionalList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem 2.5rem;
  margin-bottom: 2rem;

  li {
    position: relative;
    padding-left: 1.5rem;
  }

  li::before {
    content: '▸';
    position: absolute;
    left: 0;
    top: 0.05rem;
    color: var(--primary);
    font-weight: 700;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--text);
    font-weight: 600;

    svg {
      width: 0.75rem;
      height: 0.75rem;
      color: var(--text-muted);
      transition: color 0.2s ease;
    }

    &:hover,
    &:hover svg {
      color: var(--primary);
    }
  }

  p {
    margin-top: 0.25rem;
    font-size: 0.9375rem;
  }

  small {
    display: block;
    margin-top: 0.35rem;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 0.75rem;
  }

  @media ${({ theme }) => theme.bp.tablet} {
    grid-template-columns: 1fr;
  }
`;

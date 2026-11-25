import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 900px;
  margin: 0 auto;

  @media ${({ theme }) => theme.bp.laptop} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const StyledContactList = styled(motion.ul)`
  li {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  li + li {
    margin-top: 2rem;
  }

  h3 {
    margin-bottom: 0.25rem;
    font-size: 1.25rem;
  }

  a {
    color: var(--text-secondary);
    font-weight: 500;
    overflow-wrap: anywhere;
  }

  a:hover {
    color: var(--primary);
  }
`;

export const StyledContactIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--gradient);
  color: #ffffff;

  svg {
    width: 1.15rem;
    height: 1.15rem;
  }
`;

export const StyledContactCta = styled(motion.div)`
  text-align: center;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.875rem;
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  @media ${({ theme }) => theme.bp.mobile} {
    h3 {
      font-size: 1.5rem;
    }

    div {
      flex-direction: column;
    }
  }
`;

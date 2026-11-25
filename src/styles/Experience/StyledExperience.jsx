import styled from 'styled-components';
import { motion } from 'framer-motion';
import { cardStyles, hoverLift } from '../UI/StyledUI';

export const StyledExperienceList = styled.ol`
  max-width: 900px;
  margin: 0 auto;
`;

export const StyledExperienceCard = styled(motion.li)`
  ${cardStyles}
  ${hoverLift('2px')}
  padding: 2rem;

  & + & {
    margin-top: 2rem;
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 1.375rem;
  }

  @media ${({ theme }) => theme.bp.mobile} {
    padding: 1.5rem;
  }
`;

export const StyledExperienceHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.875rem;
  }

  @media ${({ theme }) => theme.bp.tablet} {
    flex-direction: column;
    gap: 0.75rem;

    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const StyledCompany = styled.p`
  color: var(--primary);
  font-weight: 600;
`;

export const StyledPeriod = styled.p`
  color: var(--text-muted);
  font-size: 0.875rem;
`;

export const StyledSummary = styled.p`
  margin-bottom: 1.5rem;
`;

export const StyledMetrics = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;

  div {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--surface-muted);
    text-align: center;
  }

  dd {
    margin-bottom: 0.25rem;
    color: var(--primary);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
  }

  dt {
    color: var(--text-muted);
    font-size: 0.75rem;
  }
`;

export const StyledHighlights = styled.ul`
  margin-bottom: 1.5rem;

  li {
    position: relative;
    padding-left: 1.5rem;
    color: var(--text);
  }

  li + li {
    margin-top: 0.75rem;
  }

  li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: 700;
  }
`;

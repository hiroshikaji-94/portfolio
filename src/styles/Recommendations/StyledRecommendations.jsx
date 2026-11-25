import styled from 'styled-components';
import { motion } from 'framer-motion';
import { cardStyles, hoverLift } from '../UI/StyledUI';

export const StyledRecommendationGrid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  @media ${({ theme }) => theme.bp.laptop} {
    grid-template-columns: 1fr;
    max-width: 760px;
    margin: 0 auto;
  }
`;

export const StyledRecommendationCard = styled(motion.li)`
  ${cardStyles}
  ${hoverLift()}
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media ${({ theme }) => theme.bp.mobile} {
    padding: 1.5rem;
  }
`;

export const StyledRecommendationTop = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;

  > svg {
    width: 2rem;
    height: 2rem;
    color: var(--primary);
    opacity: 0.25;
  }
`;

export const StyledRecommendationQuote = styled.blockquote`
  flex: 1;
  margin-bottom: 1.75rem;

  p {
    color: var(--text-body);
    font-size: 1rem;
    line-height: 1.75;
    font-style: ${({ lang }) => (lang === 'ja' ? 'normal' : 'italic')};
  }
`;

export const StyledRecommendationAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
`;

export const StyledRecommendationAvatar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  overflow: hidden;
  border: 2px solid var(--primary);
  border-radius: 50%;
  background: var(--gradient);
  color: #ffffff;
  font-weight: 600;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledRecommendationCredentials = styled.div`
  flex: 1;
  min-width: 0;

  h4 {
    font-size: 1rem;
  }

  span {
    display: block;
    color: var(--text-muted);
    font-size: 0.875rem;
  }
`;

export const StyledProfileLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--tag-bg);
  color: var(--text-secondary);
  transition: background-color 0.2s ease, color 0.2s ease, translate 0.2s ease;

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  &:hover {
    background-color: var(--primary);
    color: #ffffff;
    translate: 0 -2px;
  }
`;

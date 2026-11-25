import styled from 'styled-components';
import { motion } from 'framer-motion';
import { cardStyles, hoverLift } from '../UI/StyledUI';

export const StyledAboutGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;

  @media ${({ theme }) => theme.bp.laptop} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const StyledIntro = styled(motion.div)`
  margin-bottom: 3rem;

  p {
    font-size: 1.125rem;
    line-height: 1.7;
  }

  p + p {
    margin-top: 1rem;
  }
`;

export const StyledSubheading = styled.h3`
  margin-bottom: 2rem;
  font-size: 1.875rem;

  @media ${({ theme }) => theme.bp.mobile} {
    font-size: 1.5rem;
  }
`;

export const StyledHighlights = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const StyledHighlight = styled(motion.li)`
  ${cardStyles}
  ${hoverLift()}
  padding: 1.5rem;

  svg {
    width: 2rem;
    height: 2rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }

  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.375rem;
  }

  p {
    font-size: 0.9375rem;
  }
`;

export const StyledTimeline = styled.ol`
  position: relative;
`;

export const StyledTimelineItem = styled(motion.li)`
  position: relative;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1.5rem;
  padding-bottom: 2rem;

  /* Vertical rail from this entry's dot to the next one. The dot is centred
     in the column gap: 120px date column + 12px (half the 1.5rem gap). */
  &::before {
    content: '';
    position: absolute;
    left: 131px;
    top: 12px;
    bottom: -12px;
    width: 2px;
    background-color: var(--border);
  }

  &:last-child::before {
    display: none;
  }

  h4 {
    margin-bottom: 0.35rem;
    font-size: 1.375rem;
  }

  @media ${({ theme }) => theme.bp.tablet} {
    grid-template-columns: 1fr;
    gap: 0.35rem;

    &::before {
      display: none;
    }
  }
`;

export const StyledTimelineDate = styled.span`
  position: relative;
  padding-top: 0.2rem;
  color: var(--primary);
  font-size: 0.875rem;
  font-weight: 600;

  &::after {
    content: '';
    position: absolute;
    right: -17px;
    top: 7px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--primary);
    box-shadow: 0 0 0 4px var(--bg-alt);
  }

  @media ${({ theme }) => theme.bp.tablet} {
    padding-top: 0;

    &::after {
      display: none;
    }
  }
`;

export const StyledAside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${({ theme }) => theme.bp.laptop} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    align-items: start;
  }
`;

export const StyledProfileCard = styled(motion.div)`
  ${cardStyles}
  padding: 2rem;
  text-align: center;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.75rem;
  }

  > p {
    font-size: 0.9375rem;
  }
`;

export const StyledAvatar = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  overflow: hidden;
  border: 4px solid var(--primary);
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 18%;
  }
`;

export const StyledProfileStats = styled.dl`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  margin: 1.5rem 0;

  div {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  dd {
    color: var(--primary);
    font-size: 1.25rem;
    font-weight: 700;
  }

  dt {
    color: var(--text-muted);
    font-size: 0.75rem;
  }
`;

export const StyledTechCard = styled(motion.div)`
  ${cardStyles}
  padding: 1.5rem;

  h4 {
    font-size: 1.375rem;
  }
`;

export const StyledTechIcons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const StyledTechIcon = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: var(--tag-bg);
  color: ${({ theme, $color, $darkColor }) =>
    theme.name === 'dark' && $darkColor ? $darkColor : $color};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { cardStyles, hoverLift } from '../UI/StyledUI';

export const StyledSkillGroup = styled.div`
  & + & {
    margin-top: 3rem;
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 1.875rem;
    text-align: center;

    @media ${({ theme }) => theme.bp.mobile} {
      font-size: 1.5rem;
    }
  }
`;

export const StyledSkillGrid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const StyledSkillCard = styled(motion.li)`
  ${cardStyles}
  ${hoverLift()}
  padding: 1.5rem;
  text-align: center;

  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  p {
    font-size: 0.9375rem;
  }
`;

export const StyledSkillEmoji = styled.span`
  display: block;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  line-height: 1.2;
`;

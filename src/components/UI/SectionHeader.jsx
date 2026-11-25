import { useReducedMotion } from 'framer-motion';
import { StyledSectionHeader } from '../../styles/UI/StyledUI';
import { fadeUp, revealProps } from '../../utils/animations';

const SectionHeader = ({ id, title, subtitle }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <StyledSectionHeader {...revealProps(shouldReduceMotion)} variants={fadeUp}>
      <h2 id={id}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </StyledSectionHeader>
  );
};

export default SectionHeader;

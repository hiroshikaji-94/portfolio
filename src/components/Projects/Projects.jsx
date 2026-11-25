import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../UI/SectionHeader';
import ProjectCard from './ProjectCard';
import AdditionalProjects from './AdditionalProjects';
import { Container, Section } from '../../styles/UI/StyledUI';
import { StyledProjectGrid } from '../../styles/Projects/StyledProjects';
import { showcaseData } from '../../data/showcaseData';
import { CONSTANTS } from '../../constants';
import { revealProps, staggerChildren } from '../../utils/animations';

const Projects = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const cutoff = CONSTANTS.FEATURED_PROJECT_CUTOFF;
  const featured = showcaseData.slice(0, cutoff);
  const additional = showcaseData.slice(cutoff);

  return (
    <Section id='projects' $alt aria-labelledby='projects-title'>
      <Container>
        <SectionHeader
          id='projects-title'
          title={t('projects-heading')}
          subtitle={t('projects-section.subtitle')}
        />
        <StyledProjectGrid
          {...revealProps(shouldReduceMotion, 0.05)}
          variants={staggerChildren(0.1)}
        >
          {featured.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              description={t(`projects.${index}.description`)}
              featured={index === 0}
            />
          ))}
        </StyledProjectGrid>
        {additional.length > 0 && (
          <AdditionalProjects projects={additional} startIndex={cutoff} />
        )}
      </Container>
    </Section>
  );
};

export default Projects;

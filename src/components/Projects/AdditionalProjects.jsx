import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaArrowUpRightFromSquare,
  FaFolderOpen,
  FaGithub,
} from 'react-icons/fa6';
import { Badge, Button, IconBox } from '../../styles/UI/StyledUI';
import {
  StyledAdditionalCard,
  StyledAdditionalList,
  StyledProjectTop,
} from '../../styles/Projects/StyledProjects';
import { fadeUp, revealProps } from '../../utils/animations';
import { contactData } from '../../data/contactData';

// `startIndex` keeps the locale lookups aligned with showcaseData indexes.
const AdditionalProjects = ({ projects, startIndex }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <StyledAdditionalCard
      {...revealProps(shouldReduceMotion, 0.1)}
      variants={fadeUp}
    >
      <StyledProjectTop>
        <IconBox>
          <FaFolderOpen aria-hidden='true' />
        </IconBox>
        <Badge>{t('projects-section.more-badge')}</Badge>
      </StyledProjectTop>
      <h3>{t('projects-section.additional-title')}</h3>
      <p>{t('projects-section.additional-subtitle')}</p>
      <StyledAdditionalList>
        {projects.map((project, index) => (
          <li key={project.id}>
            <a
              href={project.livelink || project.repository}
              target='_blank'
              rel='noreferrer noopener'
            >
              {project.title}
              <FaArrowUpRightFromSquare aria-hidden='true' />
            </a>
            <p>{t(`projects.${startIndex + index}.description`)}</p>
            <small>{project.technologies.join(' · ')}</small>
          </li>
        ))}
      </StyledAdditionalList>
      <Button
        href={contactData.githubUrl}
        target='_blank'
        rel='noreferrer noopener'
        $variant='outline'
      >
        <FaGithub aria-hidden='true' />
        {t('projects-section.browse-github')}
      </Button>
    </StyledAdditionalCard>
  );
};

export default AdditionalProjects;

import { useTranslation } from 'react-i18next';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { Badge, Button, IconBox, Tag, TagList } from '../../styles/UI/StyledUI';
import {
  StyledProjectCard,
  StyledProjectMedia,
  StyledProjectBody,
  StyledProjectTop,
  StyledProjectActions,
} from '../../styles/Projects/StyledProjects';
import { fadeUp } from '../../utils/animations';

const ProjectCard = ({ project, description, featured }) => {
  const { t } = useTranslation();
  const {
    title,
    icon: Icon,
    imageUrl,
    technologies,
    livelink,
    repository,
  } = project;
  const primaryLink = livelink || repository;

  return (
    <StyledProjectCard $featured={featured} variants={fadeUp}>
      <StyledProjectMedia
        href={primaryLink}
        target='_blank'
        rel='noreferrer noopener'
        tabIndex={-1}
        aria-hidden='true'
      >
        <img src={imageUrl} alt='' width='1200' height='720' loading='lazy' />
      </StyledProjectMedia>
      <StyledProjectBody>
        <StyledProjectTop>
          {Icon && (
            <IconBox>
              <Icon aria-hidden='true' />
            </IconBox>
          )}
          <Badge $tone={livelink ? 'success' : 'primary'}>
            {livelink
              ? t('projects-section.badge-live')
              : t('projects-section.badge-code')}
          </Badge>
        </StyledProjectTop>
        <h3>{title}</h3>
        <p>{description}</p>
        <TagList aria-label={t('common.tech-stack')}>
          {technologies.map(tech => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </TagList>
        <StyledProjectActions>
          {livelink && (
            <Button
              href={livelink}
              target='_blank'
              rel='noreferrer noopener'
              $variant='outline'
              aria-label={`${t('projects-section.visit-site')}: ${title}`}
            >
              <FaArrowUpRightFromSquare aria-hidden='true' />
              {t('projects-section.visit-site')}
            </Button>
          )}
          {repository && (
            <Button
              href={repository}
              target='_blank'
              rel='noreferrer noopener'
              $variant='outline'
              aria-label={`${t('projects-section.view-code')}: ${title}`}
            >
              <FaGithub aria-hidden='true' />
              {t('projects-section.view-code')}
            </Button>
          )}
        </StyledProjectActions>
      </StyledProjectBody>
    </StyledProjectCard>
  );
};

export default ProjectCard;

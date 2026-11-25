import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../UI/SectionHeader';
import {
  Badge,
  Container,
  Section,
  Tag,
  TagList,
} from '../../styles/UI/StyledUI';
import {
  StyledExperienceList,
  StyledExperienceCard,
  StyledExperienceHeader,
  StyledCompany,
  StyledPeriod,
  StyledSummary,
  StyledMetrics,
  StyledHighlights,
} from '../../styles/Experience/StyledExperience';
import { experienceData } from '../../data/experienceData';
import { fadeUp, revealProps } from '../../utils/animations';

const BADGE_TONES = { current: 'primary', data: 'violet', backend: 'success' };

const asList = value => (Array.isArray(value) ? value : []);

const formatMonth = (yearMonth, locale) =>
  new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short' }).format(
    new Date(`${yearMonth}-01T00:00:00`)
  );

const Experience = () => {
  const { t, i18n } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const locale = i18n.resolvedLanguage === 'ja' ? 'ja-JP' : 'en-US';

  return (
    <Section id='experience' aria-labelledby='experience-title'>
      <Container>
        <SectionHeader
          id='experience-title'
          title={t('experience-heading')}
          subtitle={t('experience-section.subtitle')}
        />
        <StyledExperienceList>
          {experienceData.map((job, index) => {
            const metricLabels = asList(
              t(`experience.${index}.metrics`, { returnObjects: true })
            );
            const highlights = asList(
              t(`experience.${index}.highlights`, { returnObjects: true })
            );
            const period = `${formatMonth(job.start, locale)} – ${
              job.end
                ? formatMonth(job.end, locale)
                : t('experience-section.present')
            }`;
            return (
              <StyledExperienceCard
                key={job.id}
                {...revealProps(shouldReduceMotion, 0.15)}
                variants={fadeUp}
              >
                <StyledExperienceHeader>
                  <div>
                    <h3>{t(`experience.${index}.role`)}</h3>
                    <StyledCompany>{job.company}</StyledCompany>
                    <StyledPeriod>{period}</StyledPeriod>
                  </div>
                  <Badge $tone={BADGE_TONES[job.badge]}>
                    {t(`experience-section.badges.${job.badge}`)}
                  </Badge>
                </StyledExperienceHeader>

                <StyledSummary>
                  {t(`experience.${index}.summary`)}
                </StyledSummary>

                {job.metrics.length > 0 && (
                  <>
                    <h4>{t('experience-section.achievements')}</h4>
                    <StyledMetrics>
                      {job.metrics.map((value, metricIndex) => (
                        <div key={value}>
                          <dt>{metricLabels[metricIndex]}</dt>
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </StyledMetrics>
                  </>
                )}

                <h4>{t('experience-section.highlights')}</h4>
                <StyledHighlights>
                  {highlights.map(highlight => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </StyledHighlights>

                <TagList aria-label={t('common.tech-stack')}>
                  {job.technologies.map(tech => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </TagList>
              </StyledExperienceCard>
            );
          })}
        </StyledExperienceList>
      </Container>
    </Section>
  );
};

export default Experience;

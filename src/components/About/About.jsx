import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaDownload,
  FaRobot,
  FaDatabase,
  FaCubes,
  FaShieldHalved,
} from 'react-icons/fa6';
import SectionHeader from '../UI/SectionHeader';
import { Container, Section, Button } from '../../styles/UI/StyledUI';
import {
  StyledAboutGrid,
  StyledIntro,
  StyledSubheading,
  StyledHighlights,
  StyledHighlight,
  StyledTimeline,
  StyledTimelineItem,
  StyledTimelineDate,
  StyledAside,
  StyledProfileCard,
  StyledAvatar,
  StyledProfileStats,
  StyledTechCard,
  StyledTechIcons,
  StyledTechIcon,
} from '../../styles/About/StyledAbout';
import { coreTech } from '../../data/skillData';
import { contactData } from '../../data/contactData';
import { fadeUp, revealProps, staggerChildren } from '../../utils/animations';

// One icon per "Key Strengths" card, in the order of about.strengths.
const STRENGTH_ICONS = [FaRobot, FaDatabase, FaCubes, FaShieldHalved];

const asList = value => (Array.isArray(value) ? value : []);

const About = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const strengths = asList(t('about.strengths', { returnObjects: true }));
  const journey = asList(t('about.journey', { returnObjects: true }));
  const profileStats = asList(
    t('about.profile-stats', { returnObjects: true })
  );

  return (
    <Section id='about' $alt aria-labelledby='about-title'>
      <Container>
        <SectionHeader
          id='about-title'
          title={t('about-heading')}
          subtitle={t('about.subtitle')}
        />
        <StyledAboutGrid>
          <div>
            <StyledIntro {...revealProps(shouldReduceMotion)} variants={fadeUp}>
              <p>{t('about-text-top')}</p>
              <p>{t('about-text-bottom')}</p>
            </StyledIntro>

            <StyledSubheading>{t('about.strengths-title')}</StyledSubheading>
            <StyledHighlights
              {...revealProps(shouldReduceMotion, 0.1)}
              variants={staggerChildren()}
            >
              {strengths.map((strength, index) => {
                const Icon = STRENGTH_ICONS[index % STRENGTH_ICONS.length];
                return (
                  <StyledHighlight key={strength.title} variants={fadeUp}>
                    <Icon aria-hidden='true' />
                    <h4>{strength.title}</h4>
                    <p>{strength.description}</p>
                  </StyledHighlight>
                );
              })}
            </StyledHighlights>

            <StyledSubheading>{t('about.journey-title')}</StyledSubheading>
            <StyledTimeline>
              {journey.map(step => (
                <StyledTimelineItem
                  key={`${step.period}-${step.title}`}
                  {...revealProps(shouldReduceMotion, 0.4)}
                  variants={fadeUp}
                >
                  <StyledTimelineDate>{step.period}</StyledTimelineDate>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.detail}</p>
                  </div>
                </StyledTimelineItem>
              ))}
            </StyledTimeline>
          </div>

          <StyledAside>
            <StyledProfileCard
              {...revealProps(shouldReduceMotion)}
              variants={fadeUp}
            >
              <StyledAvatar>
                <img
                  src='/rasters/hiroshi.webp'
                  alt={t('about.photo-alt')}
                  width='900'
                  height='1205'
                  loading='lazy'
                />
              </StyledAvatar>
              <h3>{t('about.profile-name')}</h3>
              <p>{t('about.profile-role')}</p>
              <StyledProfileStats>
                {profileStats.map(stat => (
                  <div key={stat.label}>
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </StyledProfileStats>
              <Button
                href={contactData.resumeUrl}
                target='_blank'
                rel='noopener noreferrer'
                $variant='outline'
              >
                <FaDownload aria-hidden='true' />
                {t('common.resume')}
              </Button>
            </StyledProfileCard>

            <StyledTechCard
              {...revealProps(shouldReduceMotion)}
              variants={fadeUp}
            >
              <h4>{t('about.core-tech-title')}</h4>
              <StyledTechIcons>
                {coreTech.map(({ name, Icon, color, darkColor }) => (
                  <StyledTechIcon
                    key={name}
                    title={name}
                    $color={color}
                    $darkColor={darkColor}
                  >
                    <Icon aria-hidden='true' />
                    <span className='sr-only'>{name}</span>
                  </StyledTechIcon>
                ))}
              </StyledTechIcons>
            </StyledTechCard>
          </StyledAside>
        </StyledAboutGrid>
      </Container>
    </Section>
  );
};

export default About;

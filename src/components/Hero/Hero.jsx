import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBrain, FaDatabase, FaRobot } from 'react-icons/fa6';
import { SiPython } from 'react-icons/si';
import { Container, Button } from '../../styles/UI/StyledUI';
import {
  StyledHero,
  StyledHeroGrid,
  StyledHeroText,
  StyledHeroTitle,
  StyledGreeting,
  StyledName,
  StyledRole,
  StyledCaret,
  StyledHeroDescription,
  StyledStats,
  StyledActions,
  StyledHeroVisual,
  StyledFloatingIcon,
  StyledScrollIndicator,
} from '../../styles/Hero/StyledHero';
import CodeWindow from './CodeWindow';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { slideInLeft, slideInRight } from '../../utils/animations';

// Icons drift around the edges of the code window rather than over the code.
const FLOATING_ICONS = [
  {
    Icon: SiPython,
    style: { top: '-1.75rem', left: '-1rem', animationDelay: '0s' },
  },
  {
    Icon: FaRobot,
    style: { top: '18%', right: '-1.25rem', animationDelay: '1s' },
  },
  {
    Icon: FaDatabase,
    style: { bottom: '14%', left: '-1.5rem', animationDelay: '2s' },
  },
  {
    Icon: FaBrain,
    style: { bottom: '-1.75rem', right: '16%', animationDelay: '3s' },
  },
];

const Hero = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [hasScrolled, setHasScrolled] = useState(false);

  const roles = t('hero.roles', { returnObjects: true });
  const roleList = Array.isArray(roles) ? roles : [];
  const stats = t('hero.stats', { returnObjects: true });
  const typedRole = useTypingEffect(roleList, { enabled: !shouldReduceMotion });

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledHero id='home' aria-labelledby='hero-title'>
      <Container>
        <StyledHeroGrid>
          <StyledHeroText
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            animate='visible'
            variants={slideInLeft}
          >
            <StyledHeroTitle id='hero-title'>
              <StyledGreeting>{t('hero.greeting')}</StyledGreeting>
              <StyledName>{t('hero.name')}</StyledName>
              <span className='sr-only'>{roleList.join(', ')}</span>
              <StyledRole aria-hidden='true'>
                {typedRole}
                {!shouldReduceMotion && <StyledCaret />}
              </StyledRole>
            </StyledHeroTitle>
            <StyledHeroDescription>
              {t('hero.description')}
            </StyledHeroDescription>
            {Array.isArray(stats) && (
              <StyledStats>
                {stats.map(stat => (
                  <div key={stat.label}>
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </StyledStats>
            )}
            <StyledActions>
              <Button href='#projects' $variant='primary'>
                {t('hero.cta-work')}
              </Button>
              <Button href='#contact' $variant='secondary'>
                {t('hero.cta-contact')}
              </Button>
            </StyledActions>
          </StyledHeroText>
          <StyledHeroVisual
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            animate='visible'
            variants={slideInRight}
          >
            <CodeWindow />
            {FLOATING_ICONS.map(({ Icon, style }) => (
              <StyledFloatingIcon
                key={style.animationDelay}
                style={style}
                aria-hidden='true'
              >
                <Icon />
              </StyledFloatingIcon>
            ))}
          </StyledHeroVisual>
        </StyledHeroGrid>
      </Container>
      <StyledScrollIndicator
        href='#about'
        aria-label={t('hero.scroll-label')}
        $hidden={hasScrolled}
        tabIndex={hasScrolled ? -1 : 0}
      >
        <span />
      </StyledScrollIndicator>
    </StyledHero>
  );
};

export default Hero;

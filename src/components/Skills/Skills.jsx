import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../UI/SectionHeader';
import { Container, Section } from '../../styles/UI/StyledUI';
import {
  StyledSkillGroup,
  StyledSkillGrid,
  StyledSkillCard,
  StyledSkillEmoji,
} from '../../styles/Skills/StyledSkills';
import { skillGroups } from '../../data/skillData';
import { fadeUp, revealProps, staggerChildren } from '../../utils/animations';

const Skills = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id='technology' aria-labelledby='technology-title'>
      <Container>
        <SectionHeader
          id='technology-title'
          title={t('technology-heading')}
          subtitle={t('skills.subtitle')}
        />
        {skillGroups.map(group => (
          <StyledSkillGroup key={group.id}>
            <h3>{t(`skills.groups.${group.id}.title`)}</h3>
            <StyledSkillGrid
              {...revealProps(shouldReduceMotion, 0.1)}
              variants={staggerChildren()}
            >
              {group.items.map(item => (
                <StyledSkillCard key={item.id} variants={fadeUp}>
                  <StyledSkillEmoji aria-hidden='true'>
                    {item.emoji}
                  </StyledSkillEmoji>
                  <h4>{t(`skills.groups.${group.id}.items.${item.id}`)}</h4>
                  <p>{item.tools.join(', ')}</p>
                </StyledSkillCard>
              ))}
            </StyledSkillGrid>
          </StyledSkillGroup>
        ))}
      </Container>
    </Section>
  );
};

export default Skills;

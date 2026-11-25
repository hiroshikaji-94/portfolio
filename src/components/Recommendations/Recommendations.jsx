import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../UI/SectionHeader';
import RecommendationCard from './RecommendationCard';
import { Container, Section } from '../../styles/UI/StyledUI';
import { StyledRecommendationGrid } from '../../styles/Recommendations/StyledRecommendations';
import { recommendationData } from '../../data/recommendationData';
import { revealProps, staggerChildren } from '../../utils/animations';

const Recommendations = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id='recommendations' aria-labelledby='recommendations-title'>
      <Container>
        <SectionHeader
          id='recommendations-title'
          title={t('recommendations-heading')}
          subtitle={t('recommendations-section.subtitle')}
        />
        <StyledRecommendationGrid
          {...revealProps(shouldReduceMotion, 0.1)}
          variants={staggerChildren(0.12)}
        >
          {recommendationData.map(recommendation => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
            />
          ))}
        </StyledRecommendationGrid>
      </Container>
    </Section>
  );
};

export default Recommendations;

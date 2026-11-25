import { useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../UI/SectionHeader';
import PostCard from './PostCard';
import PostSkeleton from './PostSkeleton';
import { Button, Container, Section } from '../../styles/UI/StyledUI';
import { StyledPostGrid, StyledShowMore } from '../../styles/Posts/StyledPosts';
import { postData } from '../../data/postData';
import { CONSTANTS } from '../../constants';
import { revealProps, staggerChildren } from '../../utils/animations';

const Posts = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const shouldReduceMotion = useReducedMotion();
  const [showAllPosts, setShowAllPosts] = useState(false);

  const cutoff = CONSTANTS.FEATURED_POST_CUTOFF;
  const hasMorePosts = postData.length > cutoff;
  const visiblePosts = showAllPosts ? postData : postData.slice(0, cutoff);

  return (
    <Section id='posts' $alt aria-labelledby='posts-title'>
      <Container>
        <SectionHeader
          id='posts-title'
          title={t('posts-heading')}
          subtitle={t('posts-section.subtitle')}
        />
        <StyledPostGrid
          {...revealProps(shouldReduceMotion, 0.05)}
          variants={staggerChildren(0.1)}
        >
          {/* the index keeps locale lookups aligned with postData */}
          {visiblePosts.map((post, index) =>
            post.placeholder ? (
              <PostSkeleton key={post.id} />
            ) : (
              <PostCard
                key={post.id}
                post={post}
                title={t(`posts.${index}.title`)}
                excerpt={t(`posts.${index}.excerpt`)}
                imageAlt={t(`posts.${index}.imageAlt`)}
                lang={lang}
              />
            )
          )}
        </StyledPostGrid>
        {hasMorePosts && (
          <StyledShowMore>
            <Button
              as='button'
              type='button'
              $variant='secondary'
              aria-expanded={showAllPosts}
              onClick={() => setShowAllPosts(shown => !shown)}
            >
              {showAllPosts ? t('show-less-btn') : t('show-more-btn')}
            </Button>
          </StyledShowMore>
        )}
      </Container>
    </Section>
  );
};

export default Posts;

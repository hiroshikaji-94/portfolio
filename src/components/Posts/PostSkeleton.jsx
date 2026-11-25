import {
  StyledPostSkeleton,
  StyledSkeletonBlock,
  StyledSkeletonImage,
  StyledSkeletonBody,
  StyledSkeletonRow,
} from '../../styles/Posts/StyledPosts';
import { fadeUp } from '../../utils/animations';

// Placeholder for an unwritten post. It carries no content, so it is hidden
// from assistive tech rather than announced as an empty article.
const PostSkeleton = () => {
  return (
    <StyledPostSkeleton aria-hidden='true' variants={fadeUp}>
      <StyledSkeletonImage />
      <StyledSkeletonBody>
        <StyledSkeletonRow style={{ marginTop: 0 }}>
          <StyledSkeletonBlock $width='6.5rem' $height='1.4rem' $round />
          <StyledSkeletonBlock $width='5rem' $height='1.4rem' $round />
        </StyledSkeletonRow>
        <StyledSkeletonBlock
          $width='85%'
          $height='1.5rem'
          style={{ marginTop: '1.25rem' }}
        />
        <StyledSkeletonBlock $width='60%' $height='1.5rem' />
        <StyledSkeletonBlock style={{ marginTop: '1.25rem' }} />
        <StyledSkeletonBlock />
        <StyledSkeletonBlock $width='75%' />
        <StyledSkeletonRow>
          <StyledSkeletonBlock $width='4.5rem' $height='1.4rem' $round />
          <StyledSkeletonBlock $width='6rem' $height='1.4rem' $round />
          <StyledSkeletonBlock $width='5rem' $height='1.4rem' $round />
        </StyledSkeletonRow>
      </StyledSkeletonBody>
    </StyledPostSkeleton>
  );
};

export default PostSkeleton;

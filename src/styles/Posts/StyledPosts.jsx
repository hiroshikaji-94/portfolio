import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { cardStyles, hoverLift } from '../UI/StyledUI';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const StyledPostGrid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
  gap: 2rem;
`;

export const StyledPostCard = styled(motion.li)`
  ${cardStyles}
  ${hoverLift()}
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover img {
    transform: scale(1.03);
  }
`;

export const StyledPostImage = styled.a`
  display: block;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
  background-color: var(--bg-alt);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const StyledPostBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem 1.75rem 1.75rem;

  h3 {
    margin: 1rem 0 0.75rem;
    font-size: 1.375rem;
    line-height: 1.3;

    a {
      color: var(--text);
    }

    a:hover {
      color: var(--primary);
    }
  }

  > p {
    display: -webkit-box;
    margin-bottom: 1.25rem;
    overflow: hidden;
    font-size: 0.9375rem;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;

export const StyledPostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    background-color: var(--tag-bg);
    color: var(--text-secondary);
    font-size: 0.75rem;
    font-weight: 500;
  }

  span:first-child {
    background-color: var(--primary);
    color: #ffffff;
  }

  svg {
    width: 0.7rem;
    height: 0.7rem;
  }
`;

export const StyledPostFooter = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
`;

export const StyledShowMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

// Placeholder card for a post that has not been written yet.
export const StyledPostSkeleton = styled(motion.li)`
  ${cardStyles}
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const StyledSkeletonBlock = styled.span`
  display: block;
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '0.9rem'};
  border-radius: ${({ $round }) => ($round ? '1rem' : '0.375rem')};
  background: linear-gradient(
    90deg,
    var(--tag-bg) 25%,
    var(--border) 50%,
    var(--tag-bg) 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.6s ease-in-out infinite;

  & + & {
    margin-top: 0.75rem;
  }
`;

export const StyledSkeletonImage = styled(StyledSkeletonBlock)`
  aspect-ratio: 16 / 9;
  height: auto;
  border-radius: 0;
`;

export const StyledSkeletonBody = styled.div`
  padding: 1.5rem 1.75rem 1.75rem;
`;

export const StyledSkeletonRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.25rem;

  span + span {
    margin-top: 0;
  }
`;

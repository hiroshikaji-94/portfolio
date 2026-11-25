import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaCalendar, FaClock } from 'react-icons/fa6';
import { Button, Tag, TagList } from '../../styles/UI/StyledUI';
import {
  StyledPostCard,
  StyledPostImage,
  StyledPostBody,
  StyledPostMeta,
  StyledPostFooter,
} from '../../styles/Posts/StyledPosts';
import { fadeUp } from '../../utils/animations';

const PostCard = ({ post, title, excerpt, imageAlt, lang }) => {
  const { t } = useTranslation();
  const href = `#/posts/${post.slug}`;
  // post.date is a plain YYYY-MM-DD, which parses as UTC midnight; formatting
  // in UTC keeps visitors west of UTC from seeing the previous day.
  const formattedDate = new Intl.DateTimeFormat(
    lang === 'ja' ? 'ja-JP' : 'en-US',
    { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }
  ).format(new Date(post.date));

  return (
    <StyledPostCard variants={fadeUp}>
      {post.imageUrl && (
        <StyledPostImage href={href} tabIndex={-1} aria-hidden='true'>
          <img
            src={post.imageUrl}
            alt={imageAlt}
            width={post.imageWidth}
            height={post.imageHeight}
            loading='lazy'
          />
        </StyledPostImage>
      )}
      <StyledPostBody>
        <StyledPostMeta>
          <span>
            <FaCalendar aria-hidden='true' />
            <time dateTime={post.date}>{formattedDate}</time>
          </span>
          <span>
            <FaClock aria-hidden='true' />
            {t('reading-time', { minutes: post.readingTime })}
          </span>
        </StyledPostMeta>
        <h3>
          <a href={href}>{title}</a>
        </h3>
        <p>{excerpt}</p>
        <TagList>
          {post.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagList>
        <StyledPostFooter>
          <Button
            href={href}
            $variant='outline'
            aria-label={`${t('read-post')}: ${title}`}
          >
            {t('read-post')}
            <FaArrowRight aria-hidden='true' />
          </Button>
        </StyledPostFooter>
      </StyledPostBody>
    </StyledPostCard>
  );
};

export default PostCard;

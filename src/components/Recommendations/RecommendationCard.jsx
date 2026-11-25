import { useTranslation } from 'react-i18next';
import {
  FaArrowUpRightFromSquare,
  FaLinkedin,
  FaQuoteLeft,
} from 'react-icons/fa6';
import {
  StyledRecommendationCard,
  StyledRecommendationTop,
  StyledRecommendationQuote,
  StyledRecommendationAuthor,
  StyledRecommendationAvatar,
  StyledRecommendationCredentials,
  StyledProfileLink,
} from '../../styles/Recommendations/StyledRecommendations';
import { fadeUp } from '../../utils/animations';

const PROFILE_NETWORKS = [
  { host: 'linkedin.com', label: 'LinkedIn', Icon: FaLinkedin },
];

const resolveNetwork = url => {
  const match = PROFILE_NETWORKS.find(network => url.includes(network.host));
  return match ?? { label: 'website', Icon: FaArrowUpRightFromSquare };
};

const RecommendationCard = ({ recommendation }) => {
  const { t } = useTranslation();
  const { name, initials, role, profileUrl, avatarUrl, quote, quoteLang } =
    recommendation;
  const { label, Icon } = resolveNetwork(profileUrl);

  return (
    <StyledRecommendationCard variants={fadeUp}>
      <StyledRecommendationTop>
        <FaQuoteLeft aria-hidden='true' />
      </StyledRecommendationTop>
      <StyledRecommendationQuote lang={quoteLang} cite={profileUrl}>
        <p lang={quoteLang}>{quote}</p>
      </StyledRecommendationQuote>
      <StyledRecommendationAuthor>
        <StyledRecommendationAvatar aria-hidden='true'>
          {avatarUrl ? <img src={avatarUrl} alt='' loading='lazy' /> : initials}
        </StyledRecommendationAvatar>
        <StyledRecommendationCredentials>
          <h4>{name}</h4>
          <span>{role}</span>
        </StyledRecommendationCredentials>
        <StyledProfileLink
          href={profileUrl}
          target='_blank'
          rel='noreferrer noopener'
          aria-label={`${t('view-profile')}: ${name} (${label})`}
        >
          <Icon aria-hidden='true' />
        </StyledProfileLink>
      </StyledRecommendationAuthor>
    </StyledRecommendationCard>
  );
};

export default RecommendationCard;

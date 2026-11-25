import { useTranslation } from 'react-i18next';
import {
  FaArrowUpRightFromSquare,
  FaLinkedin,
  FaQuoteLeft,
} from 'react-icons/fa6';
import ZoomInfoSVG from '/src/assets/icons/zoominfo.svg';
import {
  StyledRecommendationCard,
  StyledRecommendationTop,
  StyledCompanyBadge,
  StyledRecommendationQuote,
  StyledRecommendationAuthor,
  StyledRecommendationAvatar,
  StyledRecommendationCredentials,
  StyledProfileLink,
} from '../../styles/Recommendations/StyledRecommendations';
import { fadeUp } from '../../utils/animations';

// The profile icon follows whichever network the link points at, so adding a
// recommendation only ever means setting `profileUrl`.
const PROFILE_NETWORKS = [
  { host: 'linkedin.com', label: 'LinkedIn', Icon: FaLinkedin },
  { host: 'zoominfo.com', label: 'ZoomInfo', Icon: ZoomInfoSVG },
];

const resolveNetwork = url => {
  const match = PROFILE_NETWORKS.find(network => url.includes(network.host));
  return match ?? { label: 'website', Icon: FaArrowUpRightFromSquare };
};

const RecommendationCard = ({ recommendation }) => {
  const { t } = useTranslation();
  const {
    name,
    initials,
    role,
    profileUrl,
    avatarUrl,
    company,
    companyUrl,
    logoUrl,
    logoBg,
    quote,
    quoteLang,
  } = recommendation;
  const { label, Icon } = resolveNetwork(profileUrl);

  return (
    <StyledRecommendationCard variants={fadeUp}>
      <StyledRecommendationTop>
        <StyledCompanyBadge
          href={companyUrl}
          target='_blank'
          rel='noreferrer noopener'
          aria-label={`${company} website`}
          $logoBg={logoUrl ? logoBg : undefined}
        >
          {logoUrl ? (
            <img src={logoUrl} alt={company} />
          ) : (
            <>
              {company}
              <FaArrowUpRightFromSquare aria-hidden='true' />
            </>
          )}
        </StyledCompanyBadge>
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
          {/* company is already named in the badge above, so it is not repeated */}
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

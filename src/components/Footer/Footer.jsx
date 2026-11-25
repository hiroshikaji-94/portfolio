import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaGithub, FaLocationDot } from 'react-icons/fa6';
import { Container } from '../../styles/UI/StyledUI';
import {
  StyledFooter,
  StyledFooterTop,
  StyledFooterLinks,
  StyledFooterBottom,
} from '../../styles/Footer/StyledFooter';
import { contactData } from '../../data/contactData';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const links = [
    {
      label: 'GitHub',
      href: contactData.githubUrl,
      Icon: FaGithub,
      external: true,
    },
    {
      label: t('contact.email'),
      href: `mailto:${contactData.email}`,
      Icon: FaEnvelope,
    },
    {
      label: t('contact.location'),
      href: contactData.mapsUrl,
      Icon: FaLocationDot,
      external: true,
    },
  ];

  return (
    <StyledFooter>
      <Container>
        <StyledFooterTop>
          <div>
            <h2>{t('footer.name')}</h2>
            <p>{t('footer.tagline')}</p>
          </div>
          <StyledFooterLinks>
            {links.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external && {
                    target: '_blank',
                    rel: 'noreferrer noopener',
                  })}
                >
                  <Icon aria-hidden='true' />
                </a>
              </li>
            ))}
          </StyledFooterLinks>
        </StyledFooterTop>
        <StyledFooterBottom>
          <p>{t('footer.copyright', { year })}</p>
        </StyledFooterBottom>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLocationDot,
  FaPaperPlane,
} from 'react-icons/fa6';
import SectionHeader from '../UI/SectionHeader';
import { Button, Container, Section } from '../../styles/UI/StyledUI';
import {
  StyledContactGrid,
  StyledContactList,
  StyledContactIcon,
  StyledContactCta,
} from '../../styles/Contact/StyledContact';
import { contactData } from '../../data/contactData';
import { fadeUp, revealProps } from '../../utils/animations';

const Contact = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const channels = [
    {
      key: 'email',
      Icon: FaEnvelope,
      label: t('contact.email'),
      value: contactData.email,
      href: `mailto:${contactData.email}`,
    },
    {
      key: 'github',
      Icon: FaGithub,
      label: 'GitHub',
      value: contactData.githubLabel,
      href: contactData.githubUrl,
      external: true,
    },
    {
      key: 'location',
      Icon: FaLocationDot,
      label: t('contact.location'),
      value: t('footer-address'),
      href: contactData.mapsUrl,
      external: true,
    },
  ];

  return (
    <Section id='contact' $alt aria-labelledby='contact-title'>
      <Container>
        <SectionHeader
          id='contact-title'
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />
        <StyledContactGrid>
          <StyledContactList
            {...revealProps(shouldReduceMotion)}
            variants={fadeUp}
          >
            {channels.map(({ key, Icon, label, value, href, external }) => (
              <li key={key}>
                <StyledContactIcon aria-hidden='true'>
                  <Icon />
                </StyledContactIcon>
                <div>
                  <h3>{label}</h3>
                  <a
                    href={href}
                    {...(external && {
                      target: '_blank',
                      rel: 'noreferrer noopener',
                    })}
                  >
                    {value}
                  </a>
                </div>
              </li>
            ))}
          </StyledContactList>
          <StyledContactCta
            {...revealProps(shouldReduceMotion)}
            variants={fadeUp}
          >
            <h3>{t('contact.cta-title')}</h3>
            <p>{t('contact.cta-text')}</p>
            <div>
              <Button href={`mailto:${contactData.email}`} $variant='primary'>
                <FaPaperPlane aria-hidden='true' />
                {t('contact.send-email')}
              </Button>
              <Button
                href={contactData.resumeUrl}
                target='_blank'
                rel='noopener noreferrer'
                $variant='secondary'
              >
                <FaDownload aria-hidden='true' />
                {t('common.resume')}
              </Button>
            </div>
          </StyledContactCta>
        </StyledContactGrid>
      </Container>
    </Section>
  );
};

export default Contact;

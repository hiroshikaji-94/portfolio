import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaMoon, FaSun } from 'react-icons/fa6';
import { useGlobalContext } from '../../Context/Context';
import { useActiveSection } from '../../hooks/useActiveSection';
import { CONSTANTS } from '../../constants';
import {
  StyledNavbar,
  StyledNavInner,
  StyledBrand,
  StyledNavLinks,
  StyledNavLink,
  StyledNavControls,
  StyledControlButton,
  StyledMenuToggle,
} from '../../styles/Navigation/StyledNavigation';

// Matches theme.bp.laptop: wider than this, the links sit in the bar itself.
const DESKTOP_QUERY = '(min-width: 64.0625em)';

const Navigation = ({ onArticle }) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const lang = i18n.resolvedLanguage;

  const links = t('navigation', { returnObjects: true });
  const navLinks = (Array.isArray(links) ? links : []).filter(
    link => CONSTANTS.SHOW_POSTS || link.href !== '#posts'
  );
  const sectionIds = navLinks.map(link => link.href.replace('#', ''));
  const activeId = useActiveSection(sectionIds, !onArticle);

  // While the mobile menu is open: Escape closes it and the page behind it
  // stops scrolling.
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = event => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const handleChange = event => {
      if (event.matches) setIsOpen(false);
    };
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const toggleLanguage = () => i18n.changeLanguage(lang === 'en' ? 'ja' : 'en');

  return (
    <StyledNavbar>
      <StyledNavInner aria-label={t('nav.label')}>
        <StyledBrand
          href='#home'
          aria-label={t('nav.home-label')}
          onClick={closeMenu}
        >
          HK
        </StyledBrand>
        <StyledNavLinks id='primary-navigation' $open={isOpen}>
          {navLinks.map(link => {
            const isActive =
              !onArticle && activeId === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <StyledNavLink
                  href={link.href}
                  $active={isActive}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {link.menuTitle}
                </StyledNavLink>
              </li>
            );
          })}
        </StyledNavLinks>
        <StyledNavControls>
          <StyledControlButton
            type='button'
            onClick={toggleLanguage}
            aria-label={t('nav.language-label')}
          >
            <FaGlobe aria-hidden='true' />
            <span lang={lang === 'en' ? 'ja' : 'en'}>
              {lang === 'en' ? '日本語' : 'EN'}
            </span>
          </StyledControlButton>
          <StyledControlButton
            type='button'
            $square
            onClick={toggleTheme}
            aria-label={
              theme === 'dark'
                ? t('nav.theme-to-light')
                : t('nav.theme-to-dark')
            }
          >
            {theme === 'dark' ? (
              <FaSun aria-hidden='true' />
            ) : (
              <FaMoon aria-hidden='true' />
            )}
          </StyledControlButton>
          <StyledMenuToggle
            type='button'
            $open={isOpen}
            aria-expanded={isOpen}
            aria-controls='primary-navigation'
            aria-label={t('nav.menu-label')}
            onClick={() => setIsOpen(open => !open)}
          >
            <span />
            <span />
            <span />
          </StyledMenuToggle>
        </StyledNavControls>
      </StyledNavInner>
    </StyledNavbar>
  );
};

export default Navigation;

import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { base, lightTheme, darkTheme } from './themes/themes';
import GlobalStyles from './styles/Global/GlobalStyles';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Posts from './components/Posts/Posts';
import PostArticle from './components/Posts/PostArticle';
import Recommendations from './components/Recommendations/Recommendations';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useGlobalContext } from './Context/Context';
import { useHashRoute, matchPostSlug } from './hooks/useHashRoute';
import { postData } from './data/postData';
import { CONSTANTS } from './constants';

function App() {
  const { theme } = useGlobalContext();
  const currentTheme = {
    ...base,
    ...(theme === 'dark' ? darkTheme : lightTheme),
  };

  const route = useHashRoute();
  const slug = CONSTANTS.SHOW_POSTS ? matchPostSlug(route) : null;
  const articleIndex = slug
    ? postData.findIndex(post => post.slug === slug)
    : -1;
  const isArticle = articleIndex >= 0;

  // The section the browser wants to reach only exists after the main view
  // renders, so restore the scroll position ourselves when leaving an article.
  useEffect(() => {
    if (isArticle) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }
    const { hash } = window.location;
    if (hash && !hash.startsWith('#/')) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [isArticle, articleIndex]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navigation onArticle={isArticle} />
      {isArticle ? (
        <main>
          <PostArticle post={postData[articleIndex]} index={articleIndex} />
        </main>
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          {CONSTANTS.SHOW_POSTS && <Posts />}
          <Recommendations />
          <Contact />
        </main>
      )}
      <Footer />
    </ThemeProvider>
  );
}

export default App;

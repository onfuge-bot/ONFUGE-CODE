import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import './styles/index.css';

import Header from './components/LaunchIntro';
import Footer from './components/Header';

const Home = lazy(() => import('./pages/HomePage'));
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const ContactSection = lazy(() => import('./components/FlameEffect'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<div role="status" style={{ minHeight: '50vh' }}>Loading page…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
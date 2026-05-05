import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import { PageLoader } from './components/PageLoader';
import { RootLayout } from './components/RootLayout';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AiPosCaseStudyPage } from './pages/AiPosCaseStudyPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  if (isLoading) {
    return <PageLoader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/uplevo-pos" element={<AiPosCaseStudyPage />} />
      </Route>
    </Routes>
  );
}

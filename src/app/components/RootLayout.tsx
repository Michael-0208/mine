import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { CustomCursor } from './CustomCursor';
import { ScrollProgress } from './ScrollProgress';
import { BackToTop } from './BackToTop';
import { SiteFooter } from './SiteFooter';

export function RootLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash) {
      const id = decodeURIComponent(hash.replace(/^#/, ''));
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <ScrollProgress />
      <CustomCursor />
      <BackToTop />
      <Navbar />
      <Outlet />
      <SiteFooter />
    </div>
  );
}

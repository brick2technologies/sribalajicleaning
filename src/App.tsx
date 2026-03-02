import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Global Components
import Navbar from "./comnponents/Navbar";
import Footer from "./comnponents/Footer";

// Pages
import HomePage from "./pages/HomePage"; // Standard import for the main entry
const FullServicesPage = lazy(() => import("./pages/ServicesPage"));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Scroll to top functionality for SPA navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Simple Branded Loader
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-surface">
    <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main Landing Entry */}
          <Route path="/" element={<HomePage />} />

          {/* Dedicated Sub-pages */}
          <Route path="/services" element={<FullServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 Handling */}
          <Route path="*" element={
            <section className="py-40 text-center">
              <h1 className="text-4xl font-black text-primary uppercase">404</h1>
              <p className="text-slate-500 mt-2 font-bold">Page not found.</p>
              <a href="/" className="mt-6 inline-block text-accent font-black tracking-widest uppercase text-xs border-b-2 border-accent pb-1">Back Home</a>
            </section>
          } />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
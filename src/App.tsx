import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./comnponents/Navbar";
import Hero from "./comnponents/HeroSection";
import Services from "./comnponents/Services";
import WaterTankProcess from "./comnponents/WatertankProcess";
import BeforeAfter from "./comnponents/BeforeAfter";
import InfinityFlow from "./comnponents/Locations";
import AutoTestimonials from "./comnponents/Testimonials";
import FinalCTA from "./comnponents/FinalCTA";
import Footer from "./comnponents/Footer";
import FullServicesPage from "./pages/ServicesPage"; // Your new page
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <WaterTankProcess />
            <BeforeAfter />
            <InfinityFlow />
            <AutoTestimonials />
            <FinalCTA />
          </>
        } />

        {/* Dedicated Services Page */}
        <Route path="/services" element={<FullServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
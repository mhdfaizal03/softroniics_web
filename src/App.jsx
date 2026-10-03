import React, { useState } from 'react';
import './styles/components.css';

import Navbar from './components/Navbar';
import TickerBar from './components/TickerBar';
import Hero from './components/Hero';
import UrgencyBanner from './components/UrgencyBanner';
import StatsBar from './components/StatsBar';
import ProgramOverview from './components/ProgramOverview';
import TopicsGrid from './components/TopicsGrid';
import CapstoneSection from './components/CapstoneSection';
import GraduatesRoles from './components/GraduatesRoles';
import CurriculumSection from './components/CurriculumSection';
import WhyChooseSection from './components/WhyChooseSection';
import HiringPartners from './components/HiringPartners';
import GlobalProfessionalsBanner from './components/GlobalProfessionalsBanner';
import MentorsSection from './components/MentorsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CertificateSection from './components/CertificateSection';
import FaqSection from './components/FaqSection';
import HubShowcaseSection from './components/HubShowcaseSection';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('AI Engineering Program');

  const handleOpenModal = (topic = 'AI Engineering Program') => {
    setModalTopic(topic);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const scrollToCurriculum = () => {
    const el = document.getElementById('curriculum');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page-root">
      {/* Main Navigation Bar */}
      <Navbar onEnquireClick={() => handleOpenModal('Course Enquiry')} />

      {/* 2. Announcement Ticker */}
      <TickerBar onApplyClick={() => handleOpenModal('Experienced Track Application')} />

      <main>
        {/* 3. Hero Section with Live Countdown and Connected Graphic */}
        <Hero
          onEnrollClick={() => handleOpenModal('AI Engineering Enrollment')}
          onViewCurriculumClick={scrollToCurriculum}
        />

        {/* Urgency Banner */}
        <UrgencyBanner onApplyClick={() => handleOpenModal('Experienced Track Application')} />

        {/* 5. Key Statistics Bar */}
        <StatsBar />

        {/* 6. Why This Program & Sticky Application Form */}
        <ProgramOverview onFormSuccess={() => { }} />

        {/* 7. AI Systems You'll Build (Topics Grid) */}
        <TopicsGrid />

        {/* 8. Capstone Project Section */}
        <CapstoneSection onExploreClick={() => handleOpenModal('Capstone Project Track')} />

        {/* 9. Where Our Graduates Work (Roles Grid) */}
        <GraduatesRoles />

        {/* 10. Curriculum Section (12 Weeks Accordion & Tabs) */}
        <CurriculumSection />

        {/* 11. Why Choose Softroniics & Large Orange CTA Banner */}
        <WhyChooseSection onRegisterClick={() => handleOpenModal('Course Registration')} />

        {/* 12. Hiring Partners (Companies Our Graduates Have Joined) */}
        <HiringPartners />

        {/* 13. Dark Global Professionals Banner */}
        <GlobalProfessionalsBanner onEnrollClick={() => handleOpenModal('Enrollment with Mentors')} />

        {/* 14. Meet Our Mentors */}
        <MentorsSection />

        {/* 15. Testimonials (What Our Engineers Say) */}
        <TestimonialsSection />

        {/* 16. NSDC Conformance Certificate */}
        <CertificateSection onApplyClick={() => handleOpenModal('Certificate Program Enrollment')} />

        {/* 17. FAQs Section with Accordion */}
        <FaqSection onContactClick={() => handleOpenModal('General Inquiry')} />

        {/* 18. Hub Showcase Section (World Map, Kochi Hub Card, Spinning Contact Stamp) */}
        <HubShowcaseSection onApplyClick={() => handleOpenModal('Direct Program Application')} />
      </main>

      {/* 19. Skyscraper Footer */}
      <Footer />

      {/* Interactive Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultTopic={modalTopic}
      />
    </div>
  );
}

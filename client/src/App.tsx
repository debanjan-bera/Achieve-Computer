import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Courses } from './components/Courses';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LearningProcess } from './components/LearningProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSir } from './components/AboutSir';
// import { Footers } from './components/Footers';


export function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string | undefined>(undefined);

  const handleOpenContact = (courseName?: string) => {
    setSelectedCourseForModal(courseName);
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
    setSelectedCourseForModal(undefined);
  };

  return (
    <motion.div
      className="min-h-screen text-[#1E293B] flex flex-col selection:text-[#0F172A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* 1. Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Sections */}
      <motion.main
        className="flex-1"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
      >
        {/* 2. Hero Section */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* 2.5 Stats Section */}
        <Stats />

        {/* 3. Courses Section */}
        <Courses onSelectCourse={(courseName) => handleOpenContact(courseName)} />
        <WhyChooseUs />
        <AboutSir onOpenContact={() => handleOpenContact()} />

        <LearningProcess />
        {/* 8. Contact & Admission CTA Section */}
        {/* <ContactAdmission onOpenContact={() => handleOpenContact()} /> */}
      </motion.main>

      {/* 9. Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />
      {/* <Footers onOpenContact={() => handleOpenContact()} /> */}

      {/* Interactive Contact & Admission Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
        selectedCourse={selectedCourseForModal}
      />
    </motion.div>
  );
}

export default App;

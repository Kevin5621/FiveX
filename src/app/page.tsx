import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import ContactFooter from './components/ContactFooter';
import Services from './components/Services';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#4A4A4A] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <ContactFooter />
    </div>
  );
}
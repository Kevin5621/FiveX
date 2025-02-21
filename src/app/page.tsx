import Navbar from './navbar/Navbar';
import Work from './work/Work';
import ContactFooter from './footer/ContactFooter';
import Services from './services/Services';
import Hero from './landing page/Hero';

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
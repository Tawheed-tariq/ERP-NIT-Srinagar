import { ExternalLink, ChevronRight, Award } from 'lucide-react';
import { erpMembers, quickLinks } from '../constants'; 
import ProfileCard from './components/ProfileCard';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainSection';

export default function InstitutionalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <MainSection erpMembers={erpMembers} quickLinks={quickLinks} />

      <Footer />
    </div>
  );
}
import { Award, ExternalLink, ChevronRight, Mail } from 'lucide-react';
import ProfileCard from './ProfileCard';
export default function MainSection({ erpMembers, quickLinks }) {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 lg:mb-16 text-center">
          <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-full mb-3 sm:mb-4 shadow-lg">
            <Award size={32} className="sm:hidden" />
            <Award size={40} className="hidden sm:block" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 relative">
            Samarth ERP Team
            <div className="h-1 w-16 sm:w-20 lg:w-24 bg-blue-600 mx-auto mt-3 sm:mt-4"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <div className="order-2 md:order-1 md:col-span-2">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
              {erpMembers.map((member, index) => (
                <div key={index} className="w-full sm:w-auto transform transition duration-300 hover:scale-105">
                  <ProfileCard 
                    name={member.name}
                    position={member.position}
                    email={member.email}
                    website={member.website}
                    contact={member.contact}
                    image={member.image}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 border border-blue-200">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b border-blue-300 pb-3 sm:pb-4 flex items-center">
                <ExternalLink size={20} className="sm:hidden mr-2 text-blue-600" />
                <ExternalLink size={24} className="hidden sm:block mr-3 text-blue-600" />
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="flex items-center text-blue-700 hover:text-blue-900 hover:bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 shadow-sm sm:shadow-md hover:shadow-lg group"
                    >
                      <div className="bg-blue-100 p-1 rounded-lg mr-2 text-blue-600 group-hover:bg-blue-200 transition-colors">
                        {link.icon}
                      </div>
                      <span className="font-medium text-sm sm:text-base">{link.title}</span>
                      <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Contact Section */}
              <h3 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-4 sm:mb-6 text-gray-800 border-b border-blue-300 pb-3 sm:pb-4 flex items-center">
                <Mail size={20} className="sm:hidden mr-2 text-blue-600" />
                <Mail size={24} className="hidden sm:block mr-3 text-blue-600" />
                Contact
              </h3>
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow">
                <a 
                  href="mailto:teamerp@nitsri.ac.in" 
                  className="flex items-center text-blue-700 hover:text-blue-900 group"
                >
                  <div className="bg-blue-100 p-1 sm:p-2 rounded-lg mr-2 text-blue-600 group-hover:bg-blue-200 transition-colors">
                    <Mail size={16} className="sm:hidden" />
                    <Mail size={18} className="hidden sm:block" />
                  </div>
                  <span className="font-medium text-sm sm:text-base break-all">teamerp@nitsri.ac.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
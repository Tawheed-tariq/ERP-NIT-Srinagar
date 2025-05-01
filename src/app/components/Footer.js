import { Phone, Mail, MapPin, ExternalLink, ChevronRight, BookOpen, Coffee } from 'lucide-react';
import { quickLinks } from '../../constants'; 


export default function Footer() {
    return(
        <footer className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white shadow-inner">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-white rounded-full p-2 mr-4">
                  <img src="NIT.png" alt="NIT logo" className="h-10 min-w-10 rounded-full" />
                </div>
                <h4 className="text-lg font-bold">National Institute of Technology Srinagar</h4>
              </div>
              <div className="flex items-center mb-4 bg-blue-800 bg-opacity-30 p-3 rounded-lg">
                <MapPin size={20} className="mr-3 text-blue-300" />
                <span>Hazratbal, Srinagar
                Jammu and Kashmir, 190006</span>
              </div>
              <a href='mailto:teamerp@nitsri.ac.in'>
                <div className="flex items-center bg-blue-800 bg-opacity-30 p-3 rounded-lg">
                  <Mail size={20} className="mr-3 text-blue-300" />
                  <span>teamerp@nitsri.ac.in</span>
                </div>
              </a>
            </div>
            
            <div className="md:col-span-1">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <div className="p-2 bg-blue-800 rounded-lg mr-3">
                  <ExternalLink size={20} className="text-blue-300" />
                </div>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.slice(0, 4).map((link, index) => (
                  <li key={index} className="flex items-center transition-transform hover:translate-x-2">
                    <ChevronRight size={16} className="mr-3 text-blue-400" />
                    <a href={link.url} className="hover:text-blue-300 transition-colors">
                      {link.title}
                    </a>
                  </li>
                ))}
                <li className="flex items-center transition-transform hover:translate-x-2">
                  <ChevronRight size={16} className="mr-3 text-blue-400" />
                  <a href="https://nitsri.ac.in/" className="hover:text-blue-300 transition-colors">
                    Home
                  </a>
                </li>
              </ul>
            </div>
            
            {/* <div className="md:col-span-1">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <div className="p-2 bg-blue-800 rounded-lg mr-3">
                  <BookOpen size={20} className="text-blue-300" />
                </div>
                Resources
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center transition-transform hover:translate-x-2">
                  <ChevronRight size={16} className="mr-3 text-blue-400" />
                  <a href="#help" className="hover:text-blue-300 transition-colors">Help Center</a>
                </li>
                <li className="flex items-center transition-transform hover:translate-x-2">
                  <ChevronRight size={16} className="mr-3 text-blue-400" />
                  <a href="#faq" className="hover:text-blue-300 transition-colors">FAQ</a>
                </li>
                <li className="flex items-center transition-transform hover:translate-x-2">
                  <ChevronRight size={16} className="mr-3 text-blue-400" />
                  <a href="#support" className="hover:text-blue-300 transition-colors">Technical Support</a>
                </li>
                <li className="flex items-center transition-transform hover:translate-x-2">
                  <ChevronRight size={16} className="mr-3 text-blue-400" />
                  <a href="#policies" className="hover:text-blue-300 transition-colors">Policies</a>
                </li>
              </ul>
            </div> */}

            <div className="md:col-span-1">
              <div className="bg-blue-800 bg-opacity-30 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 flex items-center">
                  <Coffee size={18} className="mr-2 text-blue-300" />
                  Campus Hours
                </h5>
                <p className="text-blue-100">Monday - Friday: 10:00 am - 5:00 pm</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
            <p className="text-center">© 2025 ERP NIT Srinagar. All rights reserved, designed by <a href='https://tavaheed.netlify.app/' className='hover:underline hover:cursor-pointer'>Tavaheed Tariq</a></p>
          </div>
        </div>
      </footer>
    )
}
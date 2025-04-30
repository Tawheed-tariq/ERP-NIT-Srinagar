import { Phone, Mail, Globe, MapPin, Twitter, Linkedin } from 'lucide-react';

const ProfileCard = ({ name, position, email, website, contact, image, location, social }) => {
  return (
    <div
      className="bg-gradient-to-br from-white to-blue-50 w-full md:w-[400px] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
      style={{
        boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)'
      }}
    >
      <div 
        className="h-24 bg-blue-600 relative overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2px, transparent 0)',
          backgroundSize: '100px 100px'
        }}
      />
      
      <div className="flex justify-center -mt-16 mb-4 relative z-10">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="object-cover object-top rounded-lg w-60 h-60 border-4 border-white"
            style={{
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      </div>
      
      <div className="px-6 pb-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-md font-medium mt-2">
            {position}
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 my-4" />
        
        {/* Contact information */}
        <div className="space-y-3">
          {email && (
            <div className="flex items-center group">
              <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Mail size={16} className="text-blue-600" />
              </div>
              <a href={`mailto:${email}`} className="text-sm ml-3 text-gray-700 group-hover:text-blue-600 transition-colors break-all">
                {email}
              </a>
            </div>
          )}
          
          {website && (
            <div className="flex items-center group">
              <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Globe size={16} className="text-blue-600" />
              </div>
              <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-sm ml-3 text-gray-700 group-hover:text-blue-600 transition-colors break-all">
                {website}
              </a>
            </div>
          )}
          
          {/* {contact && (
            <div className="flex items-center group">
              <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Phone size={16} className="text-blue-600" />
              </div>
              <a href={`tel:${contact}`} className="text-sm ml-3 text-gray-700 group-hover:text-blue-600 transition-colors">
                {contact}
              </a>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
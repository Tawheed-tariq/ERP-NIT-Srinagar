import {  ExternalLink,  Users, BookOpen, Coffee } from 'lucide-react';

export const erpMembers = [
    {
      name: "Prof.Najeeb-Ud-Din",
      position: "Chairperson",
      email: "chairmanerp@nitsri.ac.in",
      website: "http://nitsri.ac.in/",
      image: "najib.png"
    },
    {
      name: "Dr. Janibul Bashir",
      email: "coordinatorerp@nitsri.ac.in",
      website: "www.janibbashir.com",
      position: "Coordinator",
      image: "janib.png"
    },
    {
      name: "Miss Insha Shafi",
      position: "Technical Asistant",
      email: "insha_ta@nitsri.ac.in",
      image: "noimage.png"
    },
    {
      name: "Mr. Roaf Ahmad",
      position: "Office Asistant",
      email: "teamerp@nitsri.ac.in",
      website: "",
      image: "roaf.jpg"
    },
    {
      name: "Miss Maurifat",
      position: "Office Asistant",
      email: "officeerp@nitsri.ac.in",
      website: "",
      image: "noimage.png"
    }
  ];

export  const quickLinks = [
    { title: "Student Portal", url: "https://nitsri.samarth.edu.in/index.php/site/login", icon: <Coffee size={18} /> },
    { title: "Faculty Portal", url: "https://nitsri.samarth.ac.in/index.php/site/login", icon: <Users size={18} /> },
    // { title: "Registration Portal", url: "", icon: <ExternalLink size={18} /> },
    // { title: "Library Resources", url: "", icon: <BookOpen size={18} /> },
    {title: "Miscellaneous Fee Portal", url: "https://nitsri.samarth.edu.in/feeportal/index.php/site/login", icon: <ExternalLink size={18} />},
  ];

  // enterprise resource planning cell
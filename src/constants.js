import {  ExternalLink,  Users, BookOpen, Coffee } from 'lucide-react';

export const erpMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Chairperson",
      email: "sarah.johnson@example.edu",
      website: "www.janibbashir.com",
      contact: "+1 (555) 123-4567",
      image: "person.jpeg"
    },
    {
      name: "Dr. Janibul Bashir",
      email: "janibbashir@nitsri.ac.in",
      website: "www.janibbashir.com",
      position: "Coordinator",
      contact: "+91-8825099229",
      image: "janib.png"
    },
    {
      name: "Jennifer Williams",
      position: "Senior Employee",
      email: "jennifer.williams@example.edu",
      website: "www.jenniferwilliams.com",
      contact: "+1 (555) 345-6789",
      image: "person.jpeg"
    },
    {
      name: "Robert Garcia",
      position: "Technical Lead",
      email: "robert.garcia@example.edu",
      website: "www.robertgarcia.tech",
      contact: "+1 (555) 456-7890",
      image: "person.jpeg"
    },
    {
      name: "Lisa Thompson",
      position: "Communications Officer",
      email: "lisa.thompson@example.edu",
      website: "www.lisathompson.com",
      contact: "+1 (555) 567-8901",
      image: "person.jpeg"
    }
  ];

export  const quickLinks = [
    { title: "Student Portal", url: "https://nitsri.samarth.edu.in/index.php/site/login", icon: <Coffee size={18} /> },
    { title: "Faculty Portal", url: "https://erp.nitsri.ac.in/iitmsv4eGq0RuNHb0G5WbhLmTKLmTO7YBcJ4RHuXxCNPvuIw=?enc=EGbCGWnlHNJ/WdgJnKH8DA==", icon: <Users size={18} /> },
    { title: "Registration Portal", url: "", icon: <ExternalLink size={18} /> },
    { title: "Library Resources", url: "", icon: <BookOpen size={18} /> },
  ];
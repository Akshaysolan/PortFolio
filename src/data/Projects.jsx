import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/imagew4.png';

const projects = [
  {
    id: 1,
    title: 'Hospital Management System',
    description: 'A comprehensive system designed to streamline administrative workflows and enhance overall operational efficiency in healthcare facilities.',
    technologies: ['Java', 'Bootstrap', 'MySQL', 'HTML', 'CSS'],
    image: project1,
    github: 'https://github.com/Akshaysolan/HospitalManagementSystem',
    details: [
      'Developed to handle patient registration, appointment scheduling, and medical records management',
      'Implemented role-based access control (RBAC) for different user roles',
      'Conducted automated testing using Selenium'
    ],
    features: [
      'Secure patient data management',
      'Doctor appointment system',
      'Automated billing generation',
      'Inventory management for medical supplies'
    ]
  },
  {
    id: 2,
    title: 'Video Streaming Application',
    description: 'A full-stack platform for uploading, processing, and streaming videos with responsive UI.',
    technologies: ['React', 'Tailwind', 'Java', 'Spring Boot', 'FFmpeg'],
    image:project2,
    github: 'https://github.com/akshaysolan/application',
    details: [
      'Implemented video chunking and encoding using FFmpeg',
      'Developed user authentication and authorization',
      'Created responsive UI with Tailwind CSS'
    ],
    features: [
      'Video upload and processing',
      'Adaptive bitrate streaming',
      'User profiles and playlists',
      'Real-time comments on videos'
    ]
  },
  {
    id: 3,
    title: 'Emailing And Messaging System',
    description: 'A professional email system with advanced user interaction features.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind', 'Bootstrap'],
    image: project3,
    github: ' https://github.com/Akshaysolan/Wedding_booking',
    details: [
      'Implemented automatic folder generation for new users',
      'Developed real-time messaging functionality',
      'Created email filtering and sorting options'
    ],
    features: [
      'Real-time email notifications',
      'Email templates and signatures',
      'Advanced search functionality',
      'Contact management system'
    ]
  },
  {
  id: 4,
  title: 'Wedding Booking System',
  description: 'A full-featured platform for booking wedding venues, services, and managing events.',
  technologies: ['Spring Boot', 'Java', 'MySQL', 'React', 'Tailwind', 'Bootstrap'],
  image: project4,
  github: 'https://github.com/akshaysolan',
  details: [
    'Built RESTful APIs for venue, vendor, and booking management using Spring Boot',
    'Integrated user authentication and admin panel',
    'Handled complex date-based availability logic and booking workflows'
  ],
  features: [
    'Venue and vendor listings with filters',
    'User registration and login system',
    'Booking calendar with real-time availability',
    'Admin dashboard for managing users, bookings, and vendors'
  ]
}

];

export default projects;
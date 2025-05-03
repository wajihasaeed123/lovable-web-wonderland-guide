
import { ProjectType } from './types';

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "World Clock - Android App",
    description: "Feature-rich World Clock application built using Kotlin and XML in Android Studio with alarm, stopwatch, timer functionality, and Google AdMob integration.",
    image: "/lovable-uploads/039b7215-1274-477c-afe3-30cc9b6fdc5e.png",
    technologies: ["Kotlin", "XML", "Android Studio", "Room Database", "Google AdMob API"],
    links: {
      github: "https://github.com/wajihasaeed123/Project_Portfolio",
      youtube: "https://youtube.com/shorts/8sRqaQBaQF0?feature=share"
    },
    features: [
      "World Clock – Displays real-time clocks for countries and cities worldwide",
      "Alarm – Create, customize, and manage multiple alarms",
      "Stopwatch – Track time with precision, includes lap functionality",
      "Timer – Countdown feature with intuitive controls",
      "Room Database for local data storage"
    ],
    videoEmbed: "https://youtube.com/embed/8sRqaQBaQF0"
  },
  {
    id: 2,
    title: "Internet Speed Test App",
    description: "Comprehensive Android application for testing and optimizing internet connections with features like speed test, DNS optimization, WiFi mapping and analysis.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["Kotlin", "XML", "Android Studio", "Google Maps API", "Room Database"],
    links: {
      github: "https://github.com/wajihasaeed123/Project_Portfolio"
    },
    features: [
      "Internet speed test with download and upload metrics",
      "Speed optimization through DNS configuration",
      "App data usage tracking and analytics",
      "WiFi map using Google API for nearby networks",
      "WiFi analyzer for signal strength and channel analysis",
      "Connected devices detection for network monitoring"
    ]
  },
  {
    id: 3,
    title: "iFix - Automotive Diagnostic App",
    description: "Android application for automotive diagnostics using Bluetooth connectivity with ELM327 scanners. Diagnoses trouble codes, reads freeze frame data, and provides real-time vehicle performance insights.",
    image: "/lovable-uploads/bbb31169-f5bc-4f7f-9967-45a414bba0a2.png",
    technologies: ["Java", "XML", "Android Studio", "Firebase", "TSMaster", "OpenAI GPT-4 API"],
    links: {
      github: "https://github.com/wajihasaeed123/Project_Portfolio",
      youtube: "https://youtube.com/shorts/qxUiZfxbqU8?feature=share",
      tsMaster: "https://drive.google.com/file/d/1uHyL2BsP6b5XNpj4ie1oiwm29PcbYd8j/view?usp=sharing"
    },
    features: [
      "ISO CAN protocols (11-bit 500 baud, 29-bit 500 baud) support",
      "Real-time RPM monitoring with custom gauge",
      "SMS OTP verification with Firebase",
      "AI-powered DTC descriptions using ChatGPT",
      "Car profile management for personalized diagnostics"
    ],
    achievements: ["First Position in Final Year Project Exhibition (Air University)"],
    videoEmbed: "https://youtube.com/embed/qxUiZfxbqU8"
  },
  {
    id: 4,
    title: "ProMasters Only - Cross-Platform Diagnostic App",
    description: "Cross-platform automotive diagnostic application designed specifically for ProMaster vans. Built for both Android and iOS platforms.",
    image: "/lovable-uploads/1ee7a9f9-0166-48c9-aa93-dbc605da6fea.png",
    technologies: ["Android Studio", "TSMaster"],
    links: {
      github: "https://github.com/wajihasaeed123/Project_Portfolio",
      youtube: "https://youtu.be/uT3ZftO2v6Y",
      tsMaster: "https://drive.google.com/file/d/1uHyL2BsP6b5XNpj4ie1oiwm29PcbYd8j/view?usp=sharing"
    },
    features: [
      "Bluetooth connectivity with ELM327 scanners",
      "ProMaster Dodge van specific custom PID information",
      "Custom gauges for RPM and Coolant Temperature",
      "Real-time vehicle data monitoring",
      "Trouble code diagnosis"
    ],
    videoEmbed: "https://youtube.com/embed/uT3ZftO2v6Y"
  },
  {
    id: 5,
    title: "FineTerryTowels - E-Commerce Website",
    description: "Premium e-commerce website offering high-quality towels for all age groups with seamless shopping experiences.",
    image: "/lovable-uploads/dbed4469-2877-4b8d-a00c-7474541c004a.png",
    technologies: ["WordPress", "WooCommerce", "HTML", "CSS", "PHP", "JavaScript"],
    links: {
      github: "https://github.com/wajihasaeed123/Project_Portfolio",
      youtube: "https://youtube.com/shorts/FD3TmYHzQJ0",
      website: "https://fineterrytowels.com"
    },
    features: [
      "Fully responsive design for all devices",
      "WooCommerce integration for product management",
      "Multiple payment options (COD and bank payments)",
      "Custom CSS modifications with Elementor",
      "Backend optimization for smooth operation"
    ],
    videoEmbed: "https://youtube.com/embed/FD3TmYHzQJ0"
  }
];

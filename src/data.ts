import { Mail, Phone, MapPin, Linkedin, Bot, PlaySquare, Code, Search, Zap } from 'lucide-react';

export const portfolioData = {
  name: "Mueen Uddin",
  firstName: "Mueen",
  lastName: "Uddin",
  role: "AI Tool Operator & Social Media Content Creator",
  about: "I am an AI Tool Operator and Social Media Content Creator with 2+ years of experience, producing content that has garnered millions of views using various AI platforms. Additionally, I use AI for coding basic tools and specialize in WordPress SEO and performance optimization.",
  email: "mueentech@outlook.com",
  phone: "03041188171",
  location: "Khairpur",
  linkedin: "https://www.linkedin.com/in/mueenuddinai",
  skills: [
    { name: 'AI Tools Operator', icon: Bot, desc: 'Expert in leveraging AI platforms to maximize efficiency and content quality.' },
    { name: 'Social Media Content Creator', icon: PlaySquare, desc: 'Producing viral content with millions of views across various platforms.' },
    { name: 'Coding with AI', icon: Code, desc: 'Developing basic tools and scripts using AI-assisted coding techniques.' },
    { name: 'SEO', icon: Search, desc: 'Optimizing content and websites to rank higher on search engines.' },
    { name: 'WordPress Speed Optimizer', icon: Zap, desc: 'Enhancing WordPress performance for lightning-fast load times.' },
  ],
  ownerImage: "/owner.png",
  projects: [
    {
      title: 'Viral Video Content Project',
      metric: '10K Followers & 1.5M Views in 7 Days',
      desc: 'Spearheaded a rapid-growth Facebook video content campaign. Leveraged trend analysis and optimized pacing to achieve viral reach and significant audience growth within a single week.',
      images: ['/viral1.png', '/viral2.png']
    },
    {
      title: 'AI Thumbnail Analysis System',
      metric: 'Increased CTR & Impressions',
      desc: 'Assisted social media content creators by implementing an AI-driven tool to analyze thumbnail strengths and weaknesses. Provided actionable insights to drastically improve Click-Through Rates (CTR).',
      images: ['/thumblytics.png']
    }
  ]
};

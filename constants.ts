
import React from 'react';
// FIX: Add PortfolioItem to the import from types.
import { ServiceCategory, FaqItem, PortfolioItem } from './types';

export const CONTACT_PHONE = '0780586869';
export const CONTACT_EMAIL = 'aisolutionsrwanda@gmail.com';
export const CONTACT_WHATSAPP = 'https://wa.me/250780586869';

export const SOCIAL_LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/karangwa-franck-florien-0a47ba370',
  YOUTUBE: 'https://www.youtube.com/channel/UCeBm-efGCsO_kbTI117nSHw',
};

// FIX: Replaced JSX with React.createElement calls to be valid in a .ts file.
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'content',
    title: 'Content Creation',
    description: 'Blogs, SEO articles, social media posts, scripts & storytelling.',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" })),
    services: [
      { title: 'Blog Posts & SEO Articles', description: 'High-quality, keyword-optimized content to boost your online presence.' },
      { title: 'Social Media Content', description: 'Engaging posts tailored for platforms like LinkedIn, Twitter, and Instagram.' },
      { title: 'Scripts & Storytelling', description: 'Compelling scripts for videos, podcasts, and presentations.' },
    ],
  },
  {
    id: 'business',
    title: 'Business Planning',
    description: 'AI-driven business plans, market research, and customer predictions.',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6m-6 0H9m0 0h.01M17 19v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6m4 0h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2z" })),
    services: [
        { title: 'AI Business Plans', description: 'Comprehensive business plans generated with AI insights.' },
        { title: 'Market Research & Analysis', description: 'In-depth market analysis to identify trends and opportunities.' },
        { title: 'Customer Predictions', description: 'AI models to predict customer behavior and lifetime value.' },
    ]
  },
  {
    id: 'design',
    title: 'Design & Branding',
    description: 'Logos, posters, banners, thumbnails, and UI/UX mockups.',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }), React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })),
    services: [
        { title: 'Logos, Posters, Banners', description: 'Stunning visual assets for your brand.' },
        { title: 'Thumbnails & Graphics', description: 'Eye-catching graphics for social media and YouTube.' },
        { title: 'UI/UX Mockups', description: 'High-fidelity mockups for websites and mobile apps.' },
    ]
  },
  {
    id: 'dev',
    title: 'Website & App Development',
    description: 'AI website building, chatbot integration, and smart e-commerce.',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" })),
    services: [
        { title: 'AI Website Building', description: 'Fast, modern websites built with AI-powered tools.' },
        { title: 'Chatbot Integration', description: 'Intelligent chatbots to automate customer support.' },
        { title: 'Smart E-commerce', description: 'E-commerce platforms with AI-driven recommendations.' },
    ]
  },
  {
    id: 'video',
    title: 'Videos',
    description: 'Educational, promo, storytelling, AI video editing, and subtitles.',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" })),
    services: [
        { title: 'Educational & Promo Videos', description: 'Engaging video content to teach and promote.' },
        { title: 'AI Video Editing', description: 'Fast and professional video editing using AI tools.' },
        { title: 'Subtitles, Translations, Dubbing', description: 'Make your videos accessible to a global audience.' },
    ]
  },
  {
    id: 'automation',
    title: 'Automation & Productivity',
    description: 'Automating tasks, emails, reports, and virtual assistants.',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" })),
    services: [
        { title: 'Task & Email Automation', description: 'Automate repetitive tasks and manage your inbox efficiently.' },
        { title: 'Virtual Assistants', description: 'AI-powered assistants to handle scheduling and support.' },
        { title: 'Document Automation', description: 'Automate the creation and processing of documents.' },
    ]
  },
  {
    id: 'education',
    title: 'Education & Training',
    description: 'AI learning tools, children’s stories, and online courses.',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { d: "M12 14l9-5-9-5-9 5 9 5z" }), React.createElement('path', { d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" }), React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12l5.354-3.131m0 0L12 12l-5.646 3.131" })),
     services: [
        { title: 'AI-Powered Learning Tools', description: 'Custom educational tools and platforms.' },
        { title: 'Children’s Stories & Songs', description: 'Creative and educational content for kids.' },
        { title: 'Online Courses', description: 'Develop and structure online courses with AI assistance.' },
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing & Sales',
    description: 'Personalized ad campaigns, SEO, and customer targeting.',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" }), React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" })),
    services: [
        { title: 'Personalized Ad Campaigns', description: 'Targeted ad campaigns that convert.' },
        { title: 'SEO Optimization', description: 'Improve your search engine rankings and organic traffic.' },
        { title: 'Customer Targeting', description: 'Identify and target your ideal customer segments.' },
    ]
  },
  {
    id: 'creative',
    title: 'Creative Projects',
    description: 'Story writing, poems, art generation, and voiceovers.',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M5 3a2 2 0 00-2 2v1m16 0V5a2 2 0 00-2-2h-1m-4 16a2 2 0 01-2-2v-1m-8 0v1a2 2 0 002 2h1" })),
    services: [
        { title: 'Story Writing & Book Creation', description: 'Collaborate on writing projects from short stories to full books.' },
        { title: 'Poems & Art Generation', description: 'Create unique poems and visual art with AI.' },
        { title: 'Voiceovers & Translations', description: 'Professional voiceovers and translations for any project.' },
    ]
  },
];

export const faqItems: FaqItem[] = [
    { question: 'What is the "chat-first" process?', answer: 'To ensure I fully understand your needs, I require a brief chat conversation before you can hire me for a service. This helps us align on the project scope, timeline, and budget, ensuring a successful outcome.' },
    { question: 'How does the face-to-face meeting work?', answer: 'This is an in-person consultation to discuss your project. The total cost is 15,000 RWF, which covers a 10,000 RWF consultation fee and a 5,000 RWF transport fee. To schedule, please contact me directly.' },
    { question: 'What payment methods do you accept?', answer: 'I accept Mobile Money and direct bank transfers. For larger projects, payment terms can be discussed during our consultation.' },
    { question: 'What if I need a service not listed?', answer: 'Please start a chat with me! My skills are versatile. Describe your project, and I\'ll let you know if it\'s something I can help with.' },
];

// FIX: Added portfolioItems to be exported for use in the PortfolioScreen.
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AI-Powered Content Generation',
    description: 'Developed a system to generate high-quality blog posts and social media content for various clients, increasing engagement by 40%.',
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697320964?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#',
  },
  {
    title: 'E-commerce Chatbot Integration',
    description: 'Integrated an intelligent chatbot into a Shopify store, handling 60% of customer queries and boosting sales through personalized recommendations.',
    imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#',
  },
  {
    title: 'Automated Market Research Tool',
    description: 'Built a tool that automates market research by scraping web data, analyzing trends, and generating comprehensive reports for business planning.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#',
  },
];
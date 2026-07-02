import type { Cert, Project, SkillGroup } from './types';

import projWorkAnalytics from './assets/proj-work-analytics.png';
import projKnowledgeManagement from './assets/proj-knowledge-management.png';
import projFinancialReportAutomation from './assets/proj-financial-report-automation.png';
import projEmailAttachmentManager from './assets/proj-email-attachment-manager.png';
import projLeadQualificationAutomation from './assets/proj-lead-qualification-automation.png';
import projAsanaCrmAutomation from './assets/proj-asana-crm-automation.png';
import projContentRepurposing from './assets/proj-ai-content-repurposing.png';
import projSocialContentGenerator from './assets/proj-social-content-generator.png';
import projAiChatbot from './assets/proj-ai-chatbot.png';
import projAiVideoGenerator from './assets/proj-ai-video-generator.png';

export const CERTS: Cert[] = [
  { no: '01', title: 'The Complete Full-Stack Web Development Bootcamp', issuer: 'Udemy' },
  { no: '02', title: 'The Complete JavaScript Course 2025', issuer: 'Udemy' },
  { no: '03', title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp', issuer: 'Udemy' },
  { no: '04', title: 'The Ultimate React Course 2025', issuer: 'Udemy' },
];

export const PROJECTS: Project[] = [
  {
    no: '01',
    title: 'Time and Task Management Analytics',
    cat: 'web',
    catLabel: 'Web App',
    color: '#3B6CF6',
    link: 'https://github.com/Joestarnova/jikan-time-ledger',
    desc: 'Full-stack platform with live session tracking, task organization, and interactive productivity dashboards across daily, weekly, and monthly insights.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL'],
    img: projWorkAnalytics,
  },
  {
    no: '02',
    title: 'Digital Notebook Application',
    cat: 'web',
    catLabel: 'Web App',
    color: '#2A55D8',
    link: 'https://github.com/Joestarnova/mern-note-app',
    desc: 'Full-stack note-taking with CRUD operations, RESTful APIs, and Redis-powered rate limiting in a responsive interface.',
    stack: ['React 19', 'JavaScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Redis'],
    img: projKnowledgeManagement,
  },
  {
    no: '03',
    title: 'Financial Report Automation',
    cat: 'ai-automation',
    catLabel: 'AI Automation',
    color: '#F59E2E',
    link: '#',
    desc: 'Pulls a full year of Xero transactions on Asana task completion, builds structured Google Sheets reports, and returns finalized CSVs.',
    stack: ['Make', 'Asana', 'Xero', 'Sheets'],
    img: projFinancialReportAutomation,
  },
  {
    no: '04',
    title: 'Email Attachment Manager',
    cat: 'ai-automation',
    catLabel: 'AI Automation',
    color: '#8B5CF6',
    link: '#',
    desc: 'AI-driven Gmail workflow that renames, sorts, uploads, and logs attachments with automated email summaries.',
    stack: ['Make', 'Gmail', 'Gemini', 'Drive'],
    img: projEmailAttachmentManager,
  },
  {
    no: '05',
    title: 'Lead Qualification Engine',
    cat: 'ai-automation',
    catLabel: 'AI Automation',
    color: '#F0463B',
    link: '#',
    desc: 'Captures webhook leads, enriches them through the Apollo API, prioritizes prospects, and drafts alerts and emails automatically.',
    stack: ['Zapier', 'Apollo API', 'Slack'],
    img: projLeadQualificationAutomation,
  },
  {
    no: '06',
    title: 'Asana CRM Automation',
    cat: 'ai-automation',
    catLabel: 'AI Automation',
    color: '#F59E2E',
    link: '#',
    desc: 'Watches lead-status changes to trigger personalized follow-ups, quotes, onboarding emails, and folder creation — fully hands-free.',
    stack: ['Zapier', 'Asana', 'Drive', 'Gmail'],
    img: projAsanaCrmAutomation,
  },
  {
    no: '07',
    title: 'Content Repurposing Engine',
    cat: 'ai-automation',
    catLabel: 'AI Automation',
    color: '#8B5CF6',
    link: '#',
    desc: 'Transcribes uploaded videos, generates blog posts, and publishes them to social — end-to-end content repurposing.',
    stack: ['Zapier', 'AI', 'Drive'],
    img: projContentRepurposing,
  },
  {
    no: '08',
    title: 'Social Content Generator',
    cat: 'ai-automation',
    catLabel: 'AI Automation',
    color: '#38CFE0',
    link: '#',
    desc: 'Generates and posts daily content from live weather data, AI insights, and dynamic visuals, tracking outputs to avoid repeats.',
    stack: ['n8n', 'Gemini', 'Imejis'],
    img: projSocialContentGenerator,
  },
  {
    no: '09',
    title: 'AI Chatbot for Pages',
    cat: 'ai-automation',
    catLabel: 'AI Automation',
    color: '#2FC85B',
    link: '#',
    desc: '24/7 automated replies that continuously learn from an easily updatable Google Docs knowledge base.',
    stack: ['n8n', 'Gemini', 'Docs'],
    img: projAiChatbot,
  },
  {
    no: '10',
    title: 'AI Video Generator',
    cat: 'ai-automation',
    catLabel: 'AI Automation',
    color: '#7C3AED',
    link: '#',
    desc: 'Produces high-quality AI videos with Veo 3.1 and auto-uploads them to YouTube and other social platforms.',
    stack: ['n8n', 'Veo 3.1'],
    img: projAiVideoGenerator,
  },
];

const simpleIcon = (label: string, slug: string): { label: string; icon: string } => ({
  label,
  icon: `https://cdn.simpleicons.org/${slug}`,
});

export const SKILLS: SkillGroup[] = [
  {
    name: 'Frontend',
    items: [
      simpleIcon('React 19', 'react'),
      simpleIcon('TypeScript', 'typescript'),
      simpleIcon('JavaScript', 'javascript'),
      simpleIcon('Vite', 'vite'),
      simpleIcon('Tailwind CSS', 'tailwindcss'),
    ],
  },
  {
    name: 'Backend',
    items: [
      simpleIcon('Node.js', 'nodedotjs'),
      simpleIcon('Express.js', 'express'),
      simpleIcon('REST APIs', 'openapiinitiative'),
    ],
  },
  {
    name: 'Databases',
    items: [simpleIcon('PostgreSQL', 'postgresql'), simpleIcon('MongoDB', 'mongodb'), simpleIcon('Redis', 'redis')],
  },
  {
    name: 'Automation',
    items: [simpleIcon('Make (Integromat)', 'make'), simpleIcon('Zapier', 'zapier'), simpleIcon('n8n', 'n8n')],
  },
  {
    name: 'AI & APIs',
    items: [
      simpleIcon('Google Gemini', 'googlegemini'),
      simpleIcon('Veo 3.1', 'googlegemini'),
      simpleIcon('Apollo API', 'apollographql'),
      { label: 'OpenWeatherMap' },
    ],
  },
  {
    name: 'Tools & Apps',
    items: [
      simpleIcon('Asana', 'asana'),
      { label: 'Slack' },
      simpleIcon('Gmail', 'gmail'),
      simpleIcon('Google Workspace', 'google'),
      simpleIcon('Xero', 'xero'),
      simpleIcon('Git', 'git'),
    ],
  },
];

// ============================================================
// PORTFOLIO DATA — edit this file to update all content
// ============================================================

export const PERSONAL = {
  name: 'Kavier Jogie',           
  firstName: 'Kavier',
  role: 'Computer Science Honours Graduate',
  university: 'Nelson Mandela University',
  degree: 'BSc Honours in Computer Science and Information Systems',
  email: 'kavier.jogie@gmail.com', 
  github: 'https://github.com/kavierjogie007',
  linkedin: 'https://linkedin.com/in/kavier-jogie-2a9614319', 
  cvUrl: '/CV.pdf',                  // ← Place your CV at public/cv.pdf
};

export const SKILLS = [
  // Programming Languages
  { name: 'Java', category: 'Programming Languages', icon: '☕' },
  { name: 'C#', category: 'Programming Languages', icon: '#' },
  { name: 'Delphi', category: 'Programming Languages', icon: '#' },
  { name: 'F#',category: 'Programming Languages', icon: '#' },
  { name: 'Unity (C#)', category: 'Programming Languages', icon: '🎮' },
  { name: 'Android Development', category: 'Programming Languages', icon: '📱' },

  // IDEs
  { name: 'IntelliJ IDEA', category: 'IDEs', icon: '💡' },
  { name: 'Android Studio', category: 'IDEs', icon: '📱' },
  { name: 'Visual Studio', category: 'IDEs', icon: '🖥️' },
  { name: 'RStudio', category: 'IDEs', icon: '📊' },
  { name: 'Embarcadero RAD Studio', category: 'IDEs', icon: '🧰' },
  { name: 'Unity', category: 'IDEs', icon: '🎮' },

  // Data Analysis / Engineering
  { name: 'R', category: 'Data Analysis', icon: '📈' },
  { name: 'MATLAB', category: 'Data Analysis', icon: '📊' },

  // Productivity Tools
  { name: 'Microsoft Word', category: 'Productivity', icon: '📄' },
  { name: 'Microsoft Excel', category: 'Productivity', icon: '📊' },
  { name: 'Microsoft PowerPoint', category: 'Productivity', icon: '📽️' },
  { name: 'Microsoft Visio', category: 'Productivity', icon: '📐' },

  // Databases
  { name: 'SQL Server', category: 'Databases', icon: '🗄️' },
  { name: 'Microsoft Access', category: 'Databases', icon: '🗃️' },
  { name: 'Supabase', category: 'Databases', icon: '⚡' },

  // Version Control
  { name: 'Git', category: 'Version Control', icon: '🔀' },
  { name: 'GitHub', category: 'Version Control', icon: '🐙' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Madibaz Netball Statistics App',
    description:
      'A mobile app developed for netball coaches to capture real-time player statistics during matches and provide post-match performance analysis using interactive charts and analytics dashboards.',
    tags: ['Java', 'Android Studio', 'SQLite', 'MPAndroidChart'],
    category: 'Mobile App',
    accent: '#00E5FF',
    github: '#',
    demo: '#',
    featured: true,
  },

  {
    id: 2,
    title: 'AI Workplace Productivity Assistant',
    description:
      'An AI-powered web application designed to automate repetitive workplace tasks such as writing emails, summarizing meeting notes, planning schedules, and assisting with research. Built to improve productivity through intelligent task automation and structured AI tools.',
    tags: ['React', 'AI', 'TypeScript', 'Prompt Engineering', 'Vite'],
    category: 'Web App',
    accent: '#7C3AED',
    github: 'https://github.com/kavierjogie007/intelligent-aid-desk',
    demo: 'https://kavier-jogie-ai-productivity-assistant.lovable.app',
    featured: true,
  },
];

export const EXPERIENCE = [
  {
    title: 'Student Assistant (Lab Security)',
    company: 'Nelson Mandela University',
    period: 'Jul 2025 — Oct 2025',
    type: 'Part-time · On-site',
    description:
      'Responsible for securing and locking university labs weekly to ensure facility safety and compliance with university policies.',
    skills: ['Responsibility', 'Attention to Detail', 'Security Procedures', 'Reliability'],
    icon: '🔐',
  },

  {
    title: 'Student Assistant (Tech Lead)',
    company: 'Nelson Mandela University',
    period: 'Apr 2025 — Oct 2025',
    type: 'Part-time · On-site',
    description:
      'Served as a Tech Lead for third-year students, assisting in the planning, design, and development phases of their Computer Science projects.',
    skills: ['Leadership', 'Software Design', 'Project Planning', 'Mentoring', 'Team Collaboration'],
    icon: '🧠',
  },

  {
    title: 'Student Assistant (Programming & Assessment)',
    company: 'Nelson Mandela University',
    period: 'Feb 2025 — Jun 2025',
    type: 'Part-time · On-site',
    description:
      'Assisted second-year students with programming practicals, monitored and prevented academic dishonesty, graded assignments, and provided constructive feedback to support student improvement.',
    skills: ['Java', 'C#', 'Visual Studio', 'Assessment', 'Academic Integrity', 'Mentoring'],
    icon: '💻',
  },

  {
    title: 'Student Assistant (Programming Support)',
    company: 'Nelson Mandela University',
    period: 'Feb 2024 — Jun 2024',
    type: 'Part-time · On-site',
    description:
      'Assisted second-year students with programming practical sessions, helping them understand core programming concepts and complete assignments.',
    skills: ['Programming Fundamentals', 'Debugging', 'Mentoring', 'Communication'],
    icon: '🧑‍🏫',
  },
];

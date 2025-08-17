module.exports = {
  // Scroll reveal config (keep as-is unless you want to tweak animations)
  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),

  // Personal info
  email: 'gtonong2@alumni.nd.edu',
  socialMedia: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gautiertonongbe' },
    { name: 'GitHub', url: 'https://github.com/gautiertonongbe' },
  ],

  // Navigation links
  navLinks: [
    { name: 'About', url: '/#about' },
    { name: 'Experience', url: '/#jobs' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ],

  // Footer
  footer: {
    text: 'Built by Gautier Tonongbe with template by Brittany Chiang',
    url: 'https://brittanychiang.com',
  },

  // Resume
  resume: '/resume.pdf',

  // Theme colors (added to fix build error)
  colors: {
    darkNavy: '#0a192f',
    navy: '#0f1624',
    green: '#64ffda',
  },
};

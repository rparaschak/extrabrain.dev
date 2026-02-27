import { getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Agentic Engineering Roadmap',
      href: '/roadmap',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [{ text: 'Blog', href: getBlogPermalink() }],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/rparashchak/' },
  ],
  footNote: ``,
};

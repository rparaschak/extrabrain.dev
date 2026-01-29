import { getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Services',
    //   links: [
    //     {
    //       text: 'Supercharge Engineering Team with AI',
    //       href: getPermalink('/services/supercharge-engineering-team-with-ai'),
    //     },
    //     {
    //       text: 'Technical Due Diligence',
    //       href: getPermalink('/services/technical-due-diligence'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Presentations',
    //   links: [
    //     {
    //       text: 'Coding Agents 101: Foundation and Mindset',
    //       href: getPermalink('/presentations/coding-agents-101'),
    //     },
    //   ],
    // },
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

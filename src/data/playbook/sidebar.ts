export interface PlaybookSidebarSection {
  slug: string;
  title: string;
  pages: string[];
}

export const playbookSidebar: PlaybookSidebarSection[] = [
  {
    slug: 'core-concepts',
    title: 'Core Concepts',
    pages: ['context-window-management', 'session-strategies', 'prompting-with-documents'],
  },
  {
    slug: 'feedback-loop',
    title: 'Feedback Loop',
    pages: ['intro', 'static-checks', 'ai-review', 'automated-testing'],
  },
  {
    slug: 'orchestration',
    title: 'Orchestration',
    pages: ['swarms', 'teams'],
  },
];

export interface PlaybookSidebarSection {
  slug: string;
  title: string;
  pages: string[];
}

/** Standalone pages shown at the top of the sidebar (no section grouping) */
export const playbookTopPages: string[] = ['introduction'];

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

import { getCollection, render } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { PlaybookPage } from '~/types';
import { playbookSidebar } from '~/data/playbook/sidebar';
import { cleanSlug } from './permalinks';

const getNormalizedPlaybookPage = async (page: CollectionEntry<'playbook'>): Promise<PlaybookPage> => {
  const { id, data } = page;
  const { Content, headings } = await render(page);

  const slug = cleanSlug(id);

  return {
    id,
    slug,
    permalink: `/playbook/${data.section}/${slug}`,
    title: data.title,
    description: data.description,
    section: data.section,
    draft: data.draft || false,
    metadata: data.metadata || {},
    Content,
    headings,
  };
};

let _pages: PlaybookPage[];

export const fetchPlaybookPages = async (): Promise<PlaybookPage[]> => {
  if (!_pages) {
    const pages = await getCollection('playbook');
    const normalized = await Promise.all(pages.map((p) => getNormalizedPlaybookPage(p)));
    _pages = normalized;
  }
  return _pages;
};

export const getStaticPathsPlaybookPage = async () => {
  const pages = await fetchPlaybookPages();

  return pages.map((page) => ({
    params: {
      section: page.section,
      page: page.slug,
    },
    props: { page },
  }));
};

export const getPlaybookNavigation = (
  currentSection: string,
  currentSlug: string,
  allPages: PlaybookPage[]
): { prev?: PlaybookPage; next?: PlaybookPage } => {
  // Build flat ordered list from sidebar config
  const ordered: PlaybookPage[] = [];
  for (const section of playbookSidebar) {
    for (const pageSlug of section.pages) {
      const found = allPages.find((p) => p.slug === pageSlug && p.section === section.slug);
      if (found) ordered.push(found);
    }
  }

  const currentIndex = ordered.findIndex((p) => p.slug === currentSlug && p.section === currentSection);
  if (currentIndex === -1) return {};

  return {
    prev: currentIndex > 0 ? ordered[currentIndex - 1] : undefined,
    next: currentIndex < ordered.length - 1 ? ordered[currentIndex + 1] : undefined,
  };
};

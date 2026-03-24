// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curriculumSidebar: [
    'intro',
    'license',
    {
      type: 'category',
      label: 'Unit 1',
      description: 'Weeks 1–4',
      collapsed: false,
      items: [
        'week01-week-1',
        'week02-week-2',
        'week03-week-3',
        'week04-week-4',
      ],
    },
    {
      type: 'category',
      label: 'Unit 2',
      description: 'Weeks 5–6',
      items: [
        'week05-week-5',
        'week06-week-6',
      ],
    },
    {
      type: 'category',
      label: 'Unit 3',
      description: 'Weeks 7–8',
      items: [
        'week07-week-7',
        'week08-week-8',
      ],
    },
    {
      type: 'category',
      label: 'Unit 4',
      description: 'Weeks 9–11',
      items: [
        'week09-week-9',
        'week10-week-10',
        'week11-week-11',
      ],
    },
    {
      type: 'category',
      label: 'Unit 5',
      description: 'Weeks 12–14',
      items: [
        'week12-week-12',
        'week13-week-13',
        'week14-week-14',
      ],
    },
    {
      type: 'category',
      label: 'Final Project',
      description: 'Weeks 15–18: Build, refine, and showcase a creation',
      items: [
        'week15-week-15',
        'week16-week-16',
        'week17-week-17',
        'week18-week-18',
      ],
    },
    {
      type: 'category',
      label: 'Optional Extension',
      description: 'Bonus weeks',
      items: [
        'week-extension-1',
        'week-extension-2',
      ],
    },
    'curriculum-master',
  ],
};

export default sidebars;

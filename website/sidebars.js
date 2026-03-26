// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curriculumSidebar: [
    'intro',
    'caregiver-guide',
    'curriculum-master',
    'license',
    {
      type: 'category',
      label: 'The Anatomy of a Message',
      description: 'Weeks 1–4: How media is built and why it matters',
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
      label: 'The Attention Economy',
      description: 'Weeks 5–8: How free content makes money',
      items: [
        'week05-week-5',
        'week06-week-6',
        'week07-week-7',
        'week08-week-8',
      ],
    },
    {
      type: 'category',
      label: 'Verification & Debugging',
      description: 'Weeks 9–11: Fact-checking and spotting fakes',
      items: [
        'week09-week-9',
        'week10-week-10',
        'week11-week-11',
      ],
    },
    {
      type: 'category',
      label: 'The Algorithmic Echo',
      description: 'Weeks 12–14: Algorithms, filter bubbles, and bias',
      items: [
        'week12-week-12',
        'week13-week-13',
        'week14-week-14',
      ],
    },
    {
      type: 'category',
      label: 'Intentional Production',
      description: 'Weeks 15–18: Build, refine, and broadcast a media project',
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
      description: 'Bonus: AI-Generated Media & News Literacy',
      items: [
        'week-extension-1',
        'week-extension-2',
      ],
    },
    {
      type: 'category',
      label: 'Resources & Support',
      description: 'Glossary, assessment tools, discussion prompts, and more',
      items: [
        'materials',
        'glossary',
        'media-detective-notebook',
        'assessment-checkpoints',
        'final-project-rubric',
        'discussion-prompts',
      ],
    },
  ],
};

export default sidebars;

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const sharedNavbarItems = require('literacy-site-theme/navbarItems');
const footerConfig = require('literacy-site-theme/footerConfig');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Media Literacy Curriculum for Kids',
  tagline: 'A comprehensive program to introduce young learners to essential media literacy skills',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zcohen-nerd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it should match your repo name
  baseUrl: '/media_literacy_for_kids/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zcohen-nerd', // Usually your GitHub org/user name.
  projectName: 'media_literacy_for_kids', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zcohen-nerd/media_literacy_for_kids/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zcohen-nerd/media_literacy_for_kids/tree/main/website/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: ['literacy-site-theme'],

  plugins: [
    function transpileLiteracyTheme() {
      const themePath = require.resolve('literacy-site-theme');
      const themeDir = require('path').dirname(themePath);
      return {
        name: 'transpile-literacy-theme',
        configureWebpack(config) {
          config.module.rules.push({
            test: /\.[jt]sx?$/i,
            include: [themeDir],
            type: 'javascript/auto',
            use: config.module.rules
              .find((rule) => String(rule.test) === '/\\.[jt]sx?$/i')
              ?.use ?? [],
          });
          return {};
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/hero-image.png',
      navbar: {
        title: 'Media Literacy for Kids',
        logo: {
          alt: 'Media Literacy Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'curriculumSidebar',
            position: 'left',
            label: 'Curriculum',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          ...sharedNavbarItems,
          {
            href: 'https://github.com/zcohen-nerd/media_literacy_for_kids',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: footerConfig,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

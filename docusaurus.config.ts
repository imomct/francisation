import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Francisation',
  tagline: 'mes notes...',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://francisation.aris.la',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'imomct', // Usually your GitHub org/user name.
  projectName: 'francisation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  
  plugins: [require.resolve('docusaurus-lunr-search')],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/imomct/francisation/blob/main/',
          // showLastUpdateTime: true,
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Francisation',
      logo: {
        alt: 'Québec Logo',
        src: 'img/quebec-icon.svg',
      },
      items: [
        {
          to: '/category/notes',
          position: 'left',
          label: 'Notes',
        },
        {
          to: '/resources',
          position: 'left',
          label: 'Ressources',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Built with Docusaurus.`,
    },
    docs: {
      sidebar: {
        hideable: true
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'apple-touch-icon',
          href: 'https://francisation.aris.la/img/apple-touch-icon.png',
        },
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;

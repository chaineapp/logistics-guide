// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Ultimate Logistics Guide',
  tagline: 'An open-source guide on logistics, supply-chain and the U.S truckload markedt',
  url: 'https://logistics.chaineapp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'chaineapp', // Usually your GitHub org/user name.
  projectName: 'logistics-guide', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',

      {
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml'
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/chaineapp/logistics-guide',
          docLayoutComponent: '@theme/DocPage'
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/chaineapp/handbook/tree/main/blog'
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'logistics guide, supply chain guide,  freight guide, freight brokers guide, transportation guide'
        }
      ],
      navbar: {
        title: 'Chaine',
        logo: {
          alt: 'Chaine logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
          href: 'https://chaineapp.com/',
          width: 30,
          height: 'auto'
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Logistics guide'
          },
          {
            href: 'https://github.com/chaineapp/chaine/logistics-guide',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation Basics',
                to: '/documentation-basics/creating-docs'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/chaineapp'
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCqvev775FmwmTcMx7tF4nRA/featured'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ChaineApp'
              }
            ]
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog'
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/chaineapp/chaine/logistics-guide'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chaine, Inc.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config

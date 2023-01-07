# The Ultimate Logistics Guide

A guide with various topics in logistics and supply-chain, including a section on the U.S Truckload market.

You can access the guide here: [The Ultimate Logistics Guide ](https://chaineapp.com/the-ultimate-logistics-guide).

The guide is brought to you by [Chaine](https://chaineapp.com/), a social, collaborative logistics platform that makes it easy for freight brokers and truck carriers to work together.

PRs and contributions are welcome.

## Contributing

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Setup

- All docs are in the `docs` directory.
- Any custom components go in the `src` directory.
- The top nav bar is configured in `docusaurus.config.js`. See [official docs](https://docusaurus.io/docs/api/docusaurus-config)

### Configuring the sidebars.

See [official docs](https://docusaurus.io/docs/sidebar)

The sidebar for the different pages is configured in `sidebars.js` and then referenced in `docusaurus.config.js` in the themeConfig, under `navbar.items`. For sidebars configured in `sidebars.js`, they are referenced by setting items.type:'docSidebar', sidebarId: 'api'. For example, see this setup:

```js
// sidebars.js
const sidebars = {
  // ...
  api: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: ['api/truckload-visibility', 'api/ocean-visibility']
    },
    {
      type: 'autogenerated',
      dirName: 'api/docs'
    }
    // ...
  ]
}
```

```js
// docusaurus.config.js

const config = {
  //...
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //...
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'api',
          position: 'left',
          label: 'API Docs'
        }
        //...
      ]
    })
}
```

### creating doc cards for a section.

You can create doc cards for a section, for example:

<p align="center">
  <img width="300px" src="static/doc-cards.png">
</p>

You can do this in a few ways.

1. Autogenerated: add a sidebar item for a section, and put `type: 'autogenerated'`. For example, see below

```js
// sidebars.js
const sidebars = {
  // ...
  api: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: ['api/truckload-visibility', 'api/ocean-visibility']
    },
    {
      type: 'autogenerated',
      dirName: 'api/docs'
    }
    // ...
  ]
}
```

2. Custom generated and list the items

```js
// sidebars.js
const sidebars = {
  // ...
  api: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: ['api/truckload-visibility', 'api/ocean-visibility']
    }
    // ...
  ]
}
```

2. You can also do both auto-generated and custom in sidebars.js:

```js
// sidebars.js
const sidebars = {
  // ...
  api: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: ['api/truckload-visibility', 'api/ocean-visibility']
    }
    // ...
  ]
}
```

4. For a section (i.e. docs/logistics-guide/truckload-market), you can generate an index in the `_category_.json` using the `link` property like this:

```json
{
  "label": "Truckload market",
  "position": 1,
  "link": {
    "type": "generated-index",
    "title": "U.S. Truckload Market Guide"
  }
}
```

5. You can also create custom cards using the DocCard component in a mdx file:

```mdx
import DocCard from '@theme/DocCard'

<DocCard
  item={{type: 'link', label: 'Ocean Visibility API', href: '/docs/api/docs/ocean-visibility/register-tracking'}}
/>
```

6. You can use the DocCardList component in mdx file:

```mdx
import DocCardList from '@theme/DocCardList'

# Getting Started

<DocCardList
  items={[
    {
      type: 'link',
      href: '/docs/knowledge-base/truckload-visibility/register-tracking'
    },
    {
      type: 'link',
      href: '/docs/knowledge-base/logistics'
    }
  ]}
/>
```

# License

MIT © [Chaine](https://github.com/chaineapp)
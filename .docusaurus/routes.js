import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/__docusaurus/debug',
    component: ComponentCreator('/blog/__docusaurus/debug', '042'),
    exact: true
  },
  {
    path: '/blog/__docusaurus/debug/config',
    component: ComponentCreator('/blog/__docusaurus/debug/config', 'ebe'),
    exact: true
  },
  {
    path: '/blog/__docusaurus/debug/content',
    component: ComponentCreator('/blog/__docusaurus/debug/content', '79a'),
    exact: true
  },
  {
    path: '/blog/__docusaurus/debug/globalData',
    component: ComponentCreator('/blog/__docusaurus/debug/globalData', '84e'),
    exact: true
  },
  {
    path: '/blog/__docusaurus/debug/metadata',
    component: ComponentCreator('/blog/__docusaurus/debug/metadata', 'd20'),
    exact: true
  },
  {
    path: '/blog/__docusaurus/debug/registry',
    component: ComponentCreator('/blog/__docusaurus/debug/registry', '4a4'),
    exact: true
  },
  {
    path: '/blog/__docusaurus/debug/routes',
    component: ComponentCreator('/blog/__docusaurus/debug/routes', '1b9'),
    exact: true
  },
  {
    path: '/blog/blog',
    component: ComponentCreator('/blog/blog', '479'),
    exact: true
  },
  {
    path: '/blog/blog/archive',
    component: ComponentCreator('/blog/blog/archive', '4bf'),
    exact: true
  },
  {
    path: '/blog/blog/authors',
    component: ComponentCreator('/blog/blog/authors', '44c'),
    exact: true
  },
  {
    path: '/blog/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/blog/authors/all-sebastien-lorber-articles', '774'),
    exact: true
  },
  {
    path: '/blog/blog/authors/yangshun',
    component: ComponentCreator('/blog/blog/authors/yangshun', 'fe3'),
    exact: true
  },
  {
    path: '/blog/blog/first-blog-post',
    component: ComponentCreator('/blog/blog/first-blog-post', '92f'),
    exact: true
  },
  {
    path: '/blog/blog/long-blog-post',
    component: ComponentCreator('/blog/blog/long-blog-post', '258'),
    exact: true
  },
  {
    path: '/blog/blog/mdx-blog-post',
    component: ComponentCreator('/blog/blog/mdx-blog-post', 'b5d'),
    exact: true
  },
  {
    path: '/blog/blog/tags',
    component: ComponentCreator('/blog/blog/tags', '542'),
    exact: true
  },
  {
    path: '/blog/blog/tags/docusaurus',
    component: ComponentCreator('/blog/blog/tags/docusaurus', '526'),
    exact: true
  },
  {
    path: '/blog/blog/tags/facebook',
    component: ComponentCreator('/blog/blog/tags/facebook', '931'),
    exact: true
  },
  {
    path: '/blog/blog/tags/hello',
    component: ComponentCreator('/blog/blog/tags/hello', 'ab4'),
    exact: true
  },
  {
    path: '/blog/blog/tags/hola',
    component: ComponentCreator('/blog/blog/tags/hola', '1de'),
    exact: true
  },
  {
    path: '/blog/blog/welcome',
    component: ComponentCreator('/blog/blog/welcome', '4bf'),
    exact: true
  },
  {
    path: '/blog/markdown-page',
    component: ComponentCreator('/blog/markdown-page', 'b60'),
    exact: true
  },
  {
    path: '/blog/docs',
    component: ComponentCreator('/blog/docs', 'f48'),
    routes: [
      {
        path: '/blog/docs',
        component: ComponentCreator('/blog/docs', '2f2'),
        routes: [
          {
            path: '/blog/docs',
            component: ComponentCreator('/blog/docs', '72e'),
            routes: [
              {
                path: '/blog/docs/category/tutorial---basics',
                component: ComponentCreator('/blog/docs/category/tutorial---basics', 'b8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/category/tutorial---extras',
                component: ComponentCreator('/blog/docs/category/tutorial---extras', '350'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/intro',
                component: ComponentCreator('/blog/docs/intro', 'f6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/blog/docs/tutorial-basics/congratulations', '590'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/blog/docs/tutorial-basics/create-a-blog-post', '1a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/blog/docs/tutorial-basics/create-a-document', 'efb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/blog/docs/tutorial-basics/create-a-page', '86d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/blog/docs/tutorial-basics/deploy-your-site', 'd02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/blog/docs/tutorial-basics/markdown-features', 'f28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/blog/docs/tutorial-extras/manage-docs-versions', '6b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/blog/docs/tutorial-extras/translate-your-site', 'b4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', '980'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

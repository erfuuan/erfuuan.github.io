import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/erfuuan.github.io/blog',
    component: ComponentCreator('/erfuuan.github.io/blog', '41f'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/blog/archive',
    component: ComponentCreator('/erfuuan.github.io/blog/archive', '8b5'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/blog/authors',
    component: ComponentCreator('/erfuuan.github.io/blog/authors', '279'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/erfuuan.github.io/blog/authors/all-sebastien-lorber-articles', 'b0f'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/blog/authors/yangshun',
    component: ComponentCreator('/erfuuan.github.io/blog/authors/yangshun', '814'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/blog/first-blog-post',
    component: ComponentCreator('/erfuuan.github.io/blog/first-blog-post', '7fc'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/blog/long-blog-post',
    component: ComponentCreator('/erfuuan.github.io/blog/long-blog-post', '420'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/blog/mdx-blog-post',
    component: ComponentCreator('/erfuuan.github.io/blog/mdx-blog-post', '521'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/blog/tags',
    component: ComponentCreator('/erfuuan.github.io/blog/tags', '77c'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/blog/tags/docusaurus',
    component: ComponentCreator('/erfuuan.github.io/blog/tags/docusaurus', '301'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/blog/tags/facebook',
    component: ComponentCreator('/erfuuan.github.io/blog/tags/facebook', '397'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/blog/tags/hello',
    component: ComponentCreator('/erfuuan.github.io/blog/tags/hello', 'c19'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/blog/tags/hola',
    component: ComponentCreator('/erfuuan.github.io/blog/tags/hola', '390'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/blog/welcome',
    component: ComponentCreator('/erfuuan.github.io/blog/welcome', 'fb4'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/markdown-page',
    component: ComponentCreator('/erfuuan.github.io/markdown-page', 'e2e'),
    exact: true
  },
  {
    path: '/erfuuan.github.io/docs',
    component: ComponentCreator('/erfuuan.github.io/docs', '070'),
    routes: [
      {
        path: '/erfuuan.github.io/docs',
        component: ComponentCreator('/erfuuan.github.io/docs', '925'),
        routes: [
          {
            path: '/erfuuan.github.io/docs',
            component: ComponentCreator('/erfuuan.github.io/docs', 'c75'),
            routes: [
              {
                path: '/erfuuan.github.io/docs/category/tutorial---basics',
                component: ComponentCreator('/erfuuan.github.io/docs/category/tutorial---basics', '82d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/erfuuan.github.io/docs/category/tutorial---extras',
                component: ComponentCreator('/erfuuan.github.io/docs/category/tutorial---extras', 'd5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/erfuuan.github.io/docs/intro',
                component: ComponentCreator('/erfuuan.github.io/docs/intro', '700'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/erfuuan.github.io/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/erfuuan.github.io/docs/tutorial-basics/congratulations', 'ac0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/erfuuan.github.io/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/erfuuan.github.io/docs/tutorial-basics/create-a-blog-post', '644'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/erfuuan.github.io/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/erfuuan.github.io/docs/tutorial-basics/create-a-document', 'f0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/erfuuan.github.io/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/erfuuan.github.io/docs/tutorial-basics/create-a-page', 'a3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/erfuuan.github.io/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/erfuuan.github.io/docs/tutorial-basics/deploy-your-site', 'e82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/erfuuan.github.io/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/erfuuan.github.io/docs/tutorial-basics/markdown-features', '4b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/erfuuan.github.io/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/erfuuan.github.io/docs/tutorial-extras/manage-docs-versions', '611'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/erfuuan.github.io/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/erfuuan.github.io/docs/tutorial-extras/translate-your-site', '825'),
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
    path: '/erfuuan.github.io/',
    component: ComponentCreator('/erfuuan.github.io/', '6ae'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

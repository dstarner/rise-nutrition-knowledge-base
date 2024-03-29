// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rise Nutrition Knowledge Base",
  tagline: "Providing data-driven nutrition for optimized performance.",
  url: "https://docs.risenutrition.org/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "rise-nutrition",
  projectName: "knowledge-base",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/rise-nutrition/knowledge-base/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/theme.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Sen|Source+Code+Pro",
    "https://at-ui.github.io/feather-font/css/iconfont.css",
  ],

  themeConfig: {
    announcementBar: {
      id: "announcement-bar",
      content: "Find something unclear or incorrect? Please let us know!",
      backgroundColor: "#ff6d3f",
      textColor: "#fff",
      isCloseable: true,
    },
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: false,
      disableSwitch: true,
    },
    hideOnScroll: true,
    // algolia: {
    //   appId: '<NEW_APP_ID>',
    //   apiKey: '<NEW_SEARCH_API_KEY>',
    // },
    navbar: {
      logo: {
        alt: "Rise Nutrition Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
        href: "https://www.risenutrition.org",
        target: "_self",
      },
      items: [
        {
          to: "docs",
          label: "Getting Started",
          position: "left",
        },
        {
          to: "docs/dashboard",
          label: "Web Dashboard",
          position: "left",
        },
        {
          to: "docs/mobile",
          label: "Mobile App",
          position: "left",
        },
        {
          to: "docs/tips",
          label: "Tips & FAQs",
          position: "left",
        },
        {
          to: "docs/content",
          label: "Content Library",
          position: "left",
        },
        {
          to: "docs/support",
          label: "User Support",
          position: "left",
        },
        {
          href: "https://forum.risenutrition.org/",
          label: "Forum",
          position: "right",
        },
        {
          href: "https://app.risenutrition.org/",
          label: "Dashboard",
          position: "right",
        },
      ],
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs",
            },
            {
              label: "Mobile App",
              to: "docs/mobile",
            },
            {
              label: "Web Dashboard",
              href: "docs/dashboard",
            },
            {
              label: "Tips & FAQs",
              href: "docs/tips",
            },
            {
              label: "Content Library",
              href: "docs/content",
            },
            {
              label: "User Support",
              href: "docs/support",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Documentation",
              href: "https://docs.risenutrition.org",
            },
            {
              label: "User Forum",
              href: "https://forum.risenutrition.org",
            },
            {
              label: "Web Dashboard",
              href: "https://app.risenutrition.org",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/Rise-Nutrition-226424774629788",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/fuel_to_rise",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/rise-nutrition-inc/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/rise_nutrition",
            },
          ],
        },
      ],
      logo: {
        alt: "Rise Nutrition",
        src: "img/stacked-logo.svg",
        href: "https://risenutrition.org",
      },
      copyright: `
        Copyright © ${new Date().getFullYear()} Rise Nutrition. All rights reserved.<br/>
        <span style="font-size: 13px;">Homepage illustrations from&nbsp;<a href="https://storyset.com">StorySet<a/></span>
      `,
    },
  },
};

module.exports = config;

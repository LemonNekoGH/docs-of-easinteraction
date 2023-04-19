import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs of Easinteraction",
  description: "Easinteraction is a tool that help users to generate code for easier contract interaction.",
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Installation',
        link: '/installation'
      },
      {
        text: 'Usage',
        link: '/usage'
      },
      {
        text: "About code generation",
        link: "/about-code-generation.md"
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    editLink: {
      pattern: 'https://github.com/LemonNekoGH/docs-of-easinteraction/edit/main/:path'
    }
  }
})

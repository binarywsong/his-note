import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "his-note",
  description: "his-site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'SpringBoot',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'OOP', link: '/springboot/oop' },
          { text: '@Bean', link: '/springboot/at-bean' },
          { text: '@Override', link: '/springboot/at-override' },
          { text: 'SaToken', link: '/springboot/sa-token' },
          { text: 'Question', link: '/springboot/question' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "his-note",
  description: "his-site",
  base: "/his-note/",
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
          { text: 'Dairy', link: '/springboot/dairy' },
          { text: 'Servlet', link: '/springboot/servlet' },
          { text: '每日小Tip', link: '/springboot/tip' },
          { text: '项目构建', link: '/springboot/demo' }
        ]
      },
      {
        text: 'Eight-legged Essay',
        items: [
          { text: 'Redis', link: '/eightessay/redis'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

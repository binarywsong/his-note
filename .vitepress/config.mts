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
        collapsed: true,
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
        text: 'Cloud',
        collapsed: true,
        items: [
          { text: 'minio容器', link: '/cloud/minio'}
        ]
      },
      {
        text: 'Eight-legged Essay',
        collapsed: true,
        items: [
          { text: 'Redis', link: '/eightessay/redis'}
        ]
      },
      {
        text: 'Interview',
        collapsed: true,
        items: [
          { text: '面试宝典',link: '/interview/work'}
        ]
      },
      {
        text: 'Docker',
        collapsed: true,
        items:[
          { text: '命令', link: '/docker/command'}
        ] 
      },
      {
        text: 'Bug',
        collapesd: true,
        items:[
          { text: 'bug', link: '/bug/Bug'}
        ]
      },
      {
        text: 'Java',
        collapsed: true,
        items:[
          { text: 'Java基础语法', link: '/java/javaSE'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GlucoseDAO",
  description: "Glucose DA: Decentralized science for glucose data analysis to enhance health and longevity ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/glucoseDAO/' }
    ]
  },
  base: '/'
})

import { defineConfig } from "vitepress";
import { siderbar } from "./sidebar";
export default defineConfig({
  title: "咿咿",
  description: "学习笔记",
  themeConfig: {
    outline: "deep",
    siteTitle: "咿咿",
    logo: "/logo.svg",
    docFooter: { prev: "上一篇", next: "下一篇" },
    returnToTopLabel: "返回顶部",
    outlineTitle: "导航栏",
    darkModeSwitchLabel: "外观",
    sidebarMenuLabel: "归档",
    search: {
      provider: "local",
    },
    nav: [
      {
        text: "🪺主页",
        link: "/",
      },
      { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: siderbar,
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});

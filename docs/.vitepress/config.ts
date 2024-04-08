import { defineConfig } from "vitepress";
import { siderbar } from "./sidebar";
import vitepressMdAssetsPlugin from "./script/md-asssets-plug";
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
    footer: {
      message: "少抱怨，多思考，未来更美好",
      copyright: "Copyright © 2023-present XD",
    },
  },
  vite: {
    plugins: [vitepressMdAssetsPlugin()],
  },
});

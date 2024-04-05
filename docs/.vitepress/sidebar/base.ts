import type { DefaultTheme } from "vitepress/theme";

export const base: DefaultTheme.SidebarItem[] = [
  {
    text: "前端基础",
    collapsed: false,
    items: [
      { text: "html", link: "/base/html/html" },
      { text: "css", link: "/base/css/css" },
    ],
  },
];

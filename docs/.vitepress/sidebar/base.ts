import type { DefaultTheme } from "vitepress/theme";
import { buildSidebar } from "../script/buildSidebar";
import path from "path";

export const base: DefaultTheme.SidebarItem[] = [
  {
    text: "前端基础",
    collapsed: false,
    items: [
      { text: "html", link: "/base/html/html" },
      { text: "css", link: "/base/css/css" },
      {
        text: "js",
        collapsed: false,
        items: await buildSidebar(
          path.resolve(__dirname, "./../../base/js"),
          "/base/js"
        ),
      },
    ],
  },
];

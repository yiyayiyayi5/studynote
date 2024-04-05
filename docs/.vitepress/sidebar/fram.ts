import type { DefaultTheme } from "vitepress/theme";
import { buildSidebar } from "../script/buildSidebar";
import path from "path";
export const fram: DefaultTheme.SidebarItem[] = [
  {
    text: "前端框架",
    collapsed: false,
    items: [
      {
        text: "vue",
        collapsed: false,
        items: await buildSidebar(
          path.resolve(__dirname, "./../../fram/vue"),
          "/fram/vue"
        ),
      },
      {
        text: "react",
        collapsed: false,
        items: await buildSidebar(
          path.resolve(__dirname, "./../../fram/react"),
          "/fram/react"
        ),
      },
    ],
  },
];

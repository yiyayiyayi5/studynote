import type { DefaultTheme } from "vitepress/theme";
import { buildSidebar } from "../script/buildSidebar";
import path from "path";

// XXXXX 这是一个模板代码 XXXXX 便是需要修改的地方
export const engineer: DefaultTheme.SidebarItem[] = [
  {
    text: "工程化",
    collapsed: false,
    items: [
      {
        text: "rollup",
        collapsed: false,
        items: await buildSidebar(
          path.resolve(__dirname, "./../../engineer/rollup"),
          "/engineer/rollup"
        ),
      },
      {
        text: "vite",
        collapsed: false,
        items: await buildSidebar(
          path.resolve(__dirname, "./../../engineer/vite"),
          "/engineer/vite"
        ),
      },
      {
        text: "webpack",
        collapsed: false,
        items: await buildSidebar(
          path.resolve(__dirname, "./../../engineer/webpack"),
          "/engineer/webpack"
        ),
      },
    ],
  },
];

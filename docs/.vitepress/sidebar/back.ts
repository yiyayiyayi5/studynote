import type { DefaultTheme } from "vitepress/theme";
import { buildSidebar } from "../script/buildSidebar";
import path from "path";

// XXXXX 这是一个模板代码 XXXXX 便是需要修改的地方
export const back: DefaultTheme.SidebarItem[] = [
  {
    text: "后端",
    collapsed: false,
    items: [
      {
        text: "mysql",
        collapsed: false,
        items: await buildSidebar(path.resolve(__dirname, "./../../back/mysql"), "/back/mysql"),
      },
      {
        text: "node",
        collapsed: false,
        items: await buildSidebar(path.resolve(__dirname, "./../../back/node"), "/back/node"),
      },
    ],
  },
  
];

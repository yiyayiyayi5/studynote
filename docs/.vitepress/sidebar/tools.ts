import type { DefaultTheme } from "vitepress/theme";
import { buildSidebar } from "../script/buildSidebar";
import path from "path";

// XXXXX 这是一个模板代码 XXXXX 便是需要修改的地方
export const tools: DefaultTheme.SidebarItem[] = [
  {
    text: "工具",
    collapsed: false,
    items: [
      {
        text: "环境配置",
        collapsed: false,
        items: await buildSidebar(
          path.resolve(__dirname, "./../../tools/environment"),
          "/tools/environment"
        ),
      },
      {
        text: "使用方法",
        collapsed: false,
        items: await buildSidebar(
          path.resolve(__dirname, "./../../tools/use"),
          "/tools/use"
        ),
      },
    ],
  },
];

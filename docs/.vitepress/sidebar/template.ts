import type { DefaultTheme } from "vitepress/theme";
import { buildSidebar } from "../script/buildSidebar";
import path from "path";

// XXXXX 这是一个模板代码 XXXXX 便是需要修改的地方
export const XXX: DefaultTheme.SidebarItem[] = [
  {
    text: "XXXXX",
    collapsed: false,
    items: [
      {
        text: "xxxx",
        collapsed: false,
        items: await buildSidebar(path.resolve(__dirname, "XXXXX"), "XXXXXX"),
      },
    ],
  },
];

import type { DefaultTheme } from "vitepress/theme";
import { base } from "./base";
import { fram } from "./fram";
import { engineer } from "./engineer";
import { back } from "./back";
import { tools } from "./tools";

export const siderbar: DefaultTheme.Sidebar = {
  "/base/": base,
  "/fram/": fram,
  "/engineer/": engineer,
  "/back/": back,
  "/tools/":tools
};

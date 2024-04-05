import fs from "node:fs/promises";
import path from "node:path";

export async function buildSidebar(
  directory: string,
  basePath: string = ""
): Promise<any[]> {
  const items = await fs.readdir(directory);
  // 对文件名进行排序
  const sortedItems = items.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  );
  const result = await Promise.all(
    sortedItems.map(async (item) => {
      const itemPath = path.join(directory, item);
      const itemStat = await fs.stat(itemPath);
      if (!itemStat.isDirectory() && item.endsWith(".md")) {
        // 提取文件名作为text，去掉序号和扩展名
        const text = item.replace(/^\d+\./, "").replace(/\.md$/, "");
        // 构建相对于基础路径的链接
        const link = `${basePath}/${item.replace(/\.md$/, "")}`;
        return { text, link };
      }
    })
  );
  return result.filter(Boolean) as any[];
}

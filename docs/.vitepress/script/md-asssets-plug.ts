import type { Plugin } from "vite";
import fs from "fs";
import path from "path";
interface Options {
  include?: string | RegExp | Array<string | RegExp>;
  exclude?: string | RegExp | Array<string | RegExp>;
  outputDir?: string; // 构建输出目录
  docsDir?: string; // 文档源文件目录
}
export default function vitepressMdAssetsPlugin(options: Options = {}): Plugin {
  // 使用用户提供的目录或默认值
  const outputDir = options.outputDir || "docs/.vitepress/dist";
  const docsDir = options.docsDir || "docs";
  // 简单的过滤函数
  const filter = (id: string) => {
    if (options.exclude) {
      const excludes = Array.isArray(options.exclude)
        ? options.exclude
        : [options.exclude];
      if (excludes.some((pattern) => id.match(pattern))) return false;
    }
    if (options.include) {
      const includes = Array.isArray(options.include)
        ? options.include
        : [options.include];
      return includes.some((pattern) => id.match(pattern));
    }
    return /\.md$/.test(id); // 默认处理所有.md文件
  };
  return {
    name: "vitepress-md-assets",
    enforce: "pre",
    apply: "build",
    transform(src: string, id: string) {
      if (!filter(id)) return null;
      const imgRegex = /!\[.*?\]\((\.\/assets\/.*?\.(png|jpe?g|gif|svg))\)/gi;
      let newSrc = src;
      for (const match of src.matchAll(imgRegex)) {
        const [imgTag, relativePath] = match;
        const absolutePath = path.resolve(path.dirname(id), relativePath);
        const relativeToDocs = path.relative(docsDir, absolutePath);
        const outputPath = path.resolve(
          process.cwd(),
          outputDir,
          relativeToDocs
        );
        // 创建目录（如果不存在）
        if (!fs.existsSync(path.dirname(outputPath))) {
          fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        }
        // 复制文件
        const fileData = fs.readFileSync(absolutePath);
        fs.writeFileSync(outputPath, fileData);
        // 更新Markdown中的图片路径
        const newRelativePath = path
          .relative(process.cwd(), outputPath)
          .replace(/\\/g, "/");
        newSrc = newSrc.replace(
          imgTag,
          imgTag.replace(relativePath, `/${newRelativePath}`)
        );
      }
      return { code: newSrc, map: null };
    },
  };
}

import fs from "fs";
import path from "path";

const rootPath = process.cwd();
const dataFolder = "data";

export const loadData = async () => {
  const fileName = 'default.json';
  // const dataPath = path__default["default"].join(rootPath, dataFolder, fileName);
  const dataPath = path.join(rootPath, dataFolder, fileName)
  // const dataExists = await exists(dataPath);
  // if (!dataExists) {
  //   return { content: JSON.stringify(DEFAULT_TEMPLATE) };
  // } else {
  //   const content = await fs.readFileSync(dataPath, "utf8");
  //   return { content };
  // }
  const content = await fs.readFileSync(dataPath, "utf8");
  return { content: JSON.parse(content) };
};
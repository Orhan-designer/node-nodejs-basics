import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const showFileContent = path.join(__dirname, "./files/fileToRead.txt");
  const exist = await stat(showFileContent)
    .then(() => true)
    .catch(() => false);

  try {
    if (!exist) {
      throw new Error("FS operation failed");
    } else {
      const read = await readFile(showFileContent, "utf-8");
      console.log(read);
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();

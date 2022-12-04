import { stat, readdir } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const showFilesLists = path.join(__dirname, "./files");
  const exist = await stat(showFilesLists)
    .then(() => true)
    .catch(() => false);

  try {
    if (!exist) {
      throw new Error("FS operation failed");
    } else {
      const read = await readdir(showFilesLists);

      console.log(read);
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();

import { writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const createNewFile = path.join(__dirname, "./files/fresh.txt");
  const newFileText = path.join("I am fresh and young");
  const exist = await stat(createNewFile)
    .then(() => true)
    .catch(() => false);

  try {
    if (exist) {
      throw new Error("FS operation failed");
    } else {
      await writeFile(createNewFile, newFileText);
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();

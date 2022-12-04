import { stat, unlink } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const fileToRemove = path.join(__dirname, "./files/fileToRemove.txt");
  const exist = await stat(fileToRemove)
    .then(() => true)
    .catch(() => false);

  try {
    if (!exist) {
      throw new Error("FS operation failed");
    } else {
      await unlink(fileToRemove);
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();

// How dare you

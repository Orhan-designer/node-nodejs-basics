import { stat } from "node:fs/promises";
import fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const wrongFile = path.join(__dirname, "./files/wrongFileName.txt");
  const properFile = path.join(__dirname, "./files/properFilename.md");
  const exist = await stat(properFile)
    .then(() => true)
    .catch(() => false);

  try {
    if (exist || !wrongFile) {
      throw new Error("FS operation failed");
    } else {
      await fs.rename(wrongFile, properFile);
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();

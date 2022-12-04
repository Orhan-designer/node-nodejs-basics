import { readdir, mkdir, copyFile, stat } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const filesForCopy = path.join(__dirname, "./files");
  const newFolder = path.join(__dirname, "../fs/files_copy");
  const existSrc = await stat(filesForCopy)
    .then(() => true)
    .catch(() => false);
  const existDist = await stat(newFolder)
    .then(() => true)
    .catch(() => false);

  try {
    if (existDist || !existSrc) {
      throw new Error("FS operation failed");
    } else {
      await mkdir(newFolder);
      const read = await readdir(filesForCopy);

      read.forEach((el) => {
        copyFile(path.join(filesForCopy, el), path.join(newFolder, el));
      });
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();

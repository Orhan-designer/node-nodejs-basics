import fs from "node:fs";
import zlib from "node:zlib";
import { fileURLToPath } from "url";
import path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  try {
    const input = path.join(__dirname, "./files/archive.gz");
    const output = path.join(__dirname, "./files/fileToCompress.txt ");

    const createStream = fs.createReadStream(input);

    createStream.pipe(zlib.createUnzip()).pipe(fs.createWriteStream(output));
  } catch (error) {
    throw new Error("An error occurred while decompress file");
  }
};

await decompress();

import fs from "node:fs";
import zlib from "node:zlib";
import { fileURLToPath } from "url";
import path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  try {
    const input = path.join(__dirname, "./files/fileToCompress.txt ");
    const output = path.join(__dirname, "./files/archive.gz");

    const createStream = fs.createReadStream(input);

    createStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream(output));
  } catch (error) {
    throw new Error("An error occurred while compress file");
  }
};

await compress();

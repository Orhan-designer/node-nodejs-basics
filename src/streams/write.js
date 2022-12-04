import fs from "node:fs";
import process from "node:process";
import { fileURLToPath } from "url";
import path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  try {
    const writable = path.join(__dirname, "./files/fileToWrite.txt");
    const writeStream = fs.createWriteStream(writable, "utf-8");

    process.stdin.on("data", (data) => {
      writeStream.write(data);
    });
  } catch (error) {
    throw new Error("An error occurred while write into file");
  }
};

await write();

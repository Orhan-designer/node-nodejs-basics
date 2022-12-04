import fs from "node:fs";
import process from "node:process";
import { fileURLToPath } from "url";
import path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  try {
    const readable = path.join(__dirname, "./files/fileToRead.txt");
    const createStream = fs.createReadStream(readable, "utf-8");

    let readContent = "";

    createStream.on("data", (chunk) => {
      readContent += chunk;
    });

    createStream.on("error", (error) => {
      throw new Error("An error occurred while reading the file");
    });

    createStream.on("end", () => {
      process.stdout.write(readContent);
    });
  } catch (error) {
    return new Error("An error occurred while reading the file");
  }
};

await read();

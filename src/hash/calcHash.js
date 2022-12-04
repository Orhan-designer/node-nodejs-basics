import crypto from "node:crypto";
import { fileURLToPath } from "url";
import path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  try {
    const fileForHash = path.join(
      __dirname,
      "./files/fileToCalculateHashFor.txt"
    );

    const hashedFile = crypto
      .createHash("sha256")
      .update(fileForHash)
      .digest("hex");

    console.log(hashedFile);
  } catch (error) {
    throw new Error("An error occurred while hashed the file");
  }
};

await calculateHash();

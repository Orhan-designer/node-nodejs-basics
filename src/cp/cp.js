import { fork } from "node:child_process";
import { fileURLToPath } from "url";
import path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const fileName = path.join(__dirname, "./files/script.js");
  const child = fork(fileName, args);

  child.on("error", (error) => {
    return new Error(error);
  });
};

spawnChildProcess(process.argv.slice(2));

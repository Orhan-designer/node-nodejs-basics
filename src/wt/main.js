import { fileURLToPath } from "url";
import { Worker } from "worker_threads";
import path from "node:path";
import { cpus } from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const systemCpuCores = cpus();
let number = 10;

const performCalculations = async () => {
  const createWorker = (number) => {
    return new Promise(function (resolve, reject) {
      const worker = new Worker(path.join(__dirname, "./worker.js"), {
        workerData: { count: number },
      });

      worker.on("message", (data) => {
        resolve({
          status: "resolved",
          data: data,
        });
      });

      worker.on("error", (msg) => {
        reject({
          status: "error",
          data: null,
        });
      });
    });
  };
  const workingPromises = [];

  systemCpuCores.forEach(() => {
    workingPromises.push(createWorker(number++));
  });

  const result = await Promise.allSettled(workingPromises);

  const newArr = result.map((el) => el.value || el.reason);
  console.log(newArr);
};

await performCalculations();

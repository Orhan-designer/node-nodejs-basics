import { workerData, parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  try {
    parentPort.postMessage(nthFibonacci(workerData.count));
  } catch (error) {
    throw new Error(error);
  }
};

sendResult();

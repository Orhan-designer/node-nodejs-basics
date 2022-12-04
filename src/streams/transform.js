import { Transform, pipeline } from "node:stream";

const readText = process.stdin;
const writeText = process.stdout;

const transform = async () => {
  try {
    const transForm = new Transform({
      transform(chunk, enc, callback) {
        const chunkToStringified = chunk.toString().trim();

        const reverseChunk = chunkToStringified.split("").reverse().join("");

        callback(null, reverseChunk + "\n");
      },
    });

    pipeline(readText, transForm, writeText, (error) => {
      throw new Error("An error occurred while transform text");
    });
  } catch (error) {
    throw new Error("An error occurred while transform text");
  }
};

await transform();

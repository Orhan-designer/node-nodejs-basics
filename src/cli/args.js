import process from "node:process";

const parseArgs = () => {
  let arr = process.argv.slice(2);

  try {
    const argv = arr.reduce((acc, el, index) => {
      if (el.includes("--")) {
        return acc + el.replace("--", "") + " is ";
      } else {
        return acc + el + `${arr.length - 1 === index ? "" : ", "}`;
      }
    }, "");
    console.log(argv);
  } catch (error) {
    throw new Error("Got an error parsing arguments");
  }
};

parseArgs();

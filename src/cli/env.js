import process from "node:process";

const parseEnv = () => {
  try {
    const env = Object.entries(process.env)
      .filter((el) => el[0].includes("RSS_"))
      .map((el) => el[0] + "=" + el[1])
      .join("; ");

    console.log(env);
  } catch (error) {
    throw new Error("An error occurred while parsing the environment");
  }
};

parseEnv();

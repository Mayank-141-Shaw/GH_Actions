import { getInput, info, setFailed } from "@actions/core";
// const github = require("@actions/github");
import { readFileSync, writeFileSync } from "fs";

async function run() {
  try {
    const readme_path = getInput("readme_path");
    const v1 = Math.random() * 100;
    const v2 = Math.random() * 100;

    const sum = v1 + v2;

    // reads the readme file from path
    info(`Updating README file: ${readme_path}`);
    info(`v1 : ${v1}`);
    info(`v2 : ${v2}`);
    info(`sum: ${sum}`);
    let data = readFileSync(readme_path, {
      encoding: "utf8",
    });

    // updates the text with data
    data = data.replace(/{{action_val_1}}/g, `${v1}`);
    data = data.replace(/{{action_val_2}}/g, `${v2}`);
    const result = data.replace(/{{action_sum}}/g, `${sum}`); // Use a global replace

    // writes the updated file to readme
    writeFileSync(readme_path, result, {
      encoding: "utf8",
    });
    info("README file updated successfully.");
  } catch (e) {
    setFailed(e.message);
  }
}

run();

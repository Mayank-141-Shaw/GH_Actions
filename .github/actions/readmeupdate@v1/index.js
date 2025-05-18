const core = require("@actions/core");
// const github = require("@actions/github");
const fs = require("fs");

async function run() {
  try {
    const readme_path = core.getInput("readme_path");
    const v1 = Math.random() * 100;
    const v2 = Math.random() * 100;

    const sum = v1 + v2;

    // reads the readme file from path
    core.info(`Updating README file: ${readme_path}`);
    let data = fs.readFile(readme_path, "utf8");

    // updates the text with data
    data = data.replace(/{{action_val_1}}/g, `${v1}`);
    data = data.replace(/{{action_val_2}}/g, `${v2}`);
    const result = data.replace(/{{action_sum}}/g, `${sum}`); // Use a global replace

    // writes the updated file to readme
    fs.writeFile(readme_path, result, "utf8");
    core.info("README file updated successfully.");
  } catch (e) {
    core.setFailed(e.message);
  }
}

run();

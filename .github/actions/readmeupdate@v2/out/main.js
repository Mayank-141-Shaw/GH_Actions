var $6YH6s$actionscore = require("@actions/core");
var $6YH6s$fs = require("fs");



async function $43d7963e56408b24$var$run() {
    try {
        const readme_path = (0, $6YH6s$actionscore.getInput)("readme_path");
        const v1 = Math.random() * 100;
        const v2 = Math.random() * 100;
        const sum = v1 + v2;
        // reads the readme file from path
        (0, $6YH6s$actionscore.info)(`Updating README file: ${readme_path}`);
        let data = (0, $6YH6s$fs.readFile)(readme_path, "utf8");
        // updates the text with data
        data = data.replace(/{{action_val_1}}/g, `${v1}`);
        data = data.replace(/{{action_val_2}}/g, `${v2}`);
        const result = data.replace(/{{action_sum}}/g, `${sum}`); // Use a global replace
        // writes the updated file to readme
        (0, $6YH6s$fs.writeFile)(readme_path, result, "utf8");
        (0, $6YH6s$actionscore.info)("README file updated successfully.");
    } catch (e) {
        (0, $6YH6s$actionscore.setFailed)(e.message);
    }
}
$43d7963e56408b24$var$run();


//# sourceMappingURL=main.js.map

const cron = require("node-cron");
const execFile = require("child_process");
const logger = require("./src/logger");

async function downloadFile() {
  await execFile.exec("bash download.sh", (error, stdout, stderr) => {
    if (error) {
      console.log(error);
      logger.log(error);
    }
    if (stdout) {
      console.log(stdout);
      logger.log(stdout);
    }
    if (stderr) {
      console.log(stderr);
      logger.log(stderr);
    }
  });
}
//Run module every 10 minutes
cron.schedule("*/10 * * * *", () => {
  downloadFile();
  console.log("running a task every 10 minute");
});

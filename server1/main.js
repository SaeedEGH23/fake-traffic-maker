const cron = require("node-cron");
const execFile = require("child_process");

async function downloadFile() {
  await execFile.exec("bash download.sh", (error, stdout, stderr) => {
    if (error) {
      console.log(error);
    }
    if (stdout) {
      console.log(stdout);
    }
    if (stderr) {
      console.log(stderr);
    }
  });
}
//Run module every 10 minutes
cron.schedule("* */10 * * * *", () => {
  downloadFile();
  console.log("running a task 10 every minute");
});

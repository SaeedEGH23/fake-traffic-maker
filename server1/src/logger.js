const fs = require("fs");
const { nextTick } = require("process");
const dirPath = "./logs";
let today, date, time, log_file;

function updateTime() {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  today = new Date();
  date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  log_file = `${dirPath}/` + "log" + date + ".txt";
}

module.exports = {
  log: (server, error) => {
    updateTime();
    let err = error ? error : "";
    fs.appendFile(log_file, `${time} - ${server} - ${err}\n`, (err) => {
      if (err) throw err;
    });
  },
};

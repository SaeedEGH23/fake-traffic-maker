const fs = require("fs");

let today, date, time, log_file;

function updateTime() {
  today = new Date();
  date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  log_file = "../logs/" + "log" + date + ".txt";
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

const news = require("./js/newsCrawling");
const mail = require("./js/mailConfig");
const express = require("express");
const app = express();

app.set("port", 5500); // 포트 설정
app.set("host", "127.0.0.1"); // 아이피 설정

app.use(express.static("wondo"));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "\\index.html");
});

app.get("/news", async function (req, res) {
  const data = await news.getParsing("감염병");
  res.send(data);
});

app.post("/sendEmail", function (req, res) {
  console.log(req.body);
  const { fromEmail, subject, message } = req.body;
  const data = mail.mailConfig(fromEmail, subject, message);
  res.send(data);
});

// 서버 동작중인 표시
app.listen(app.get("port"), app.get("host"), () =>
  console.log(
    "Server is running on : " + app.get("host") + ":" + app.get("port")
  )
);

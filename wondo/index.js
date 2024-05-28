const news = require("./js/newsCrawling");
const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.set("port", process.env.PORT || 5500); // 포트 설정
app.set("host", process.env.HOST || "127.0.0.1"); // 아이피 설정

app.use(express.static("wondo"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "\\index.html");
});

app.get("/news", async function (req, res) {
  const data = await news.getParsing("감염병");
  res.send(data);
});

// 서버 동작중인 표시
app.listen(app.get("port"), app.get("host"), () =>
  console.log(
    "Server is running on : " + app.get("host") + ":" + app.get("port")
  )
);

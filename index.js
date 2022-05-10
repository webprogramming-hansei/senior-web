const express = require("express");
const interestCalculator = require("./public/interestCalculator");

const app = express();
const port = 4000;

// http: 80
// https: 443

const human = {
  name: "jongjin",
  age: 20,
  birth: "20000710",
};

const feeds = [
  {
    content: "1번피드",
    tags: "#강의 #테스트",
  },
  {
    content: "2번피드",
    tags: "#강의 #테스트",
  },
];

console.log("모듈 테스트", interestCalculator.calcSimpleInterest(100, 10, 3));

app.use(express.json());
app.use("/html", express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // usebootstrap.html 파일을 열어서
  // file 내에 {{th}} -> 2,3,4 로 변경
  // 변경 된 파일을 클라이언트한테 전송
  res.render("index", {
    name: "박종진",
  });
  // res.json(human);
});

// CRUD
// CREATE, READ, UPDATE, DELETE
// PERSON 데이터
// POST, GET, PUT, DELETE

app.get("/my", (req, res) => {
  res.json({
    name: "jongjin",
    age: 20,
    birth: "20000710",
  });
});

// Feed 목록 가져오기
app.get("/feeds", (req, res) => {
  const feedsJson = {
    body: {
      feeds: feeds,
    },
  };
  res.json(feedsJson);
});

// Feed 상세 가져오기
app.get("/feeds/:id", (req, res) => {
  const feedId = Number(req.params.id);

  const feed = {
    body: {
      feed: feeds[feedId - 1],
    },
  };

  res.json(feed);
});

// Feed 등록하기
app.post("/feeds", (req, res) => {
  console.log(req.body);
  const { content, tags } = req.body;
  const feed = {
    content: `${content} ${feeds.length + 1}번째`,
    tags: tags,
  }

  feeds.push(feed);
  res.json({ message: "정상적으로 피드가 등록 되었습니다." });
});

// Feed 수정하기
app.put("/feeds/:id", (req, res) => {
  // feeds id에 해당하는 녀석의 내용을 바꾸고 응답
});

// Feed 삭제하기
app.delete("/feeds/:id", (req, res) => {
  // feeds id에 해당하는 녀석의 내용을 삭제하고 응답
});

app.get("/simple", (req, res) => {
  const balance = Number(req.query.balance);
  const interest = Number(req.query.interest);
  const range = Number(req.query.range);

  const simpleInterestResult = interestCalculator.calcSimpleInterest(
    balance,
    interest,
    range
  );
  res.send(`<p style="color: red">단리 계산결과: ${simpleInterestResult}</p>`);
});

app.get("/compound", (req, res) => {
  const balance = Number(req.query.balance);
  const interest = Number(req.query.interest);
  const range = Number(req.query.range);

  const compoundInterestResult = interestCalculator.calcCompoundInterest(
    balance,
    interest,
    range
  );
  res.send(`복리 계산결과: ${compoundInterestResult}`);
});

app.get("/users/:name", (req, res) => {
  res.send(`Name: ${req.params.name}, Age: ${req.query.age}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//creating an http server
//expresss
//express is not a node default library

const express = require("express");
const app = express();

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}

const users = [
  {
    name: "Bazinga",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

//query parameter;
app.get("/", function (req, res) {
  // const n = req.query.n;
  // const ans = sum(n);
  // res.send("hi there! your ans is " + ans);
  const johnKidneys = users[0].kidneys;
  const numberOfKedneys = johnKidneys.length;
  const numberOfHealthyKedneys = johnKidneys.filter(
    (kedney) => kedney.healthy === true
  ).length;
  const numberOfUnhealthyKedneys = numberOfKedneys - numberOfHealthyKedneys;
  res.json({
    numberOfKedneys,
    numberOfHealthyKedneys,
    numberOfUnhealthyKedneys,
  });
});

app.use(express.json());

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", function (req, res) {
  users[0].kidneys.forEach((kedney) => (kedney.healthy = true));
  res.json({
    msg: "Done",
  });
});

app.delete("/", function (req, res) {
  const newKidneys = users[0].kidneys.filter((kidney) => kidney === healthy);
  users[0].kidneys = newKidneys;

  res.json({ msg: "done" });
});
app.listen(3001);

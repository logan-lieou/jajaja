express = require('express');

let text = "something";

app = express()

app.post("/", (req, res) => {
  // text = req.body
  console.log(req);
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.send(text);
  console.log("received req");
});

app.listen(3030, () => {
  console.log("express started on 3030");
});

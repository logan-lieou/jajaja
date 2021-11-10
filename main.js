express = require('express');
cors = require('cors');

app = express()
app.use(cors());

app.post("/", (res, req) => {
  console.log(req);
});

app.get("/", (res, req) => {
  res.send("The GNU General Public License is a free, copyleft license for software and other kinds of works.");
  console.log("received req");
});

app.listen(3030, () => {
  console.log("express started on 3030");
});

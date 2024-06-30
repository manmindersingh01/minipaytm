// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();


app.use(express.static(__dirname + '/client/dist'));
app.use(cors());
app.use(express.json());


app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/dist/index.html');
});
app.use("/api/v1", rootRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
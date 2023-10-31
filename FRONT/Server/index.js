const express = require("express");
const cors = require("cors");

const router = require("./src/routers");

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

app.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});

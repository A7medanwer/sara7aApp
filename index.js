import express from "express";
import bootstrap from "./src/app.controller.js";
const port = 4000;
const app = express();
await bootstrap(app, express);

app.listen(port, () => {
  console.log(`the server running in ${port}`);
});

// password app =

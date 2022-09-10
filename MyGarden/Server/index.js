const express = require("express");
const app = express();
const port = 3000;
const samplesRouter = require("./routes/samples");
const activationHistoryRouter = require("./routes/activationHistory")
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/samples", samplesRouter);
app.use("/activationHistory", activationHistoryRouter);


/* Error handler*/
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

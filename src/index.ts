import express, { Express, Request, Response } from "express";
import { myQueue } from "./queues/test";
import { worker } from "./worker/test.worker";

require("dotenv-safe").config();

const app: Express = express();
const port = process.env.PORT || 9000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});
app.get("/test", async (req, res) => {
  await myQueue.add(
    "myJobName",
    { foo: "bar" },
    { removeOnComplete: true, removeOnFail: true, delay: 5000 }
  );
  await myQueue.add(
    "myJobName",
    { qux: "baz" },
    { removeOnComplete: true, removeOnFail: true, delay: 5000 }
  );

  res.status(200).json({ message: "success" });
});

worker;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

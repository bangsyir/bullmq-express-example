import { Queue } from "bullmq";

export const myQueue = new Queue("test", {
  connection: {
    host: "localhost",
    port: 6379,
  },
});

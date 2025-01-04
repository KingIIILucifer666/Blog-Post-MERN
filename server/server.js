import { connectToServer, getDb } from "./connect.js";
import express from "express";
import cors from "cors";

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  connectToServer();

  console.log(`Server running on port ${port}`);
});

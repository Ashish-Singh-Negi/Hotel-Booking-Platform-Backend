import express from "express";
import Routes from "./routes/index.js";

export const app = express();

// middleware to parse req.body
app.use(express.json());

// api routes
app.use("/api", Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is listening at http://localhost:${PORT}`);
});

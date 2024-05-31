import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";

dotenv.config(); // para poder utlizar las variables de entorno

const app: Application = express();
const PORT = process.env.port || 8000;

app.get("/health", (req: Request, res: Response) => {
  res.send("Welcome to the server").status(200);
});

app.listen(PORT, () => {
  console.log(`this server is running at http://localhost:${PORT}`);
});

export default app;

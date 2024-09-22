import express, { Express, Request, Response, NextFunction } from "express";
import cors from 'cors';
import { checkConnectionState } from "./middleware/connection-state.middleware";
import dotenv from "dotenv";
import todoRoutes from "./routes/todos.route";

const app: Express = express();
app.use(cors());
app.use(checkConnectionState);

dotenv.config();

const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    res.send("Winter is coming");
});

app.use('/todo-list', todoRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
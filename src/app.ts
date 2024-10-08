import express, { Express, Request, Response, NextFunction } from "express";
import cors from 'cors';
import { checkConnectionState } from "./middleware/connection-state.middleware";
import routes from './routes';

import dotenv from "dotenv";

const app: Express = express();
app.use(cors());
app.use(checkConnectionState);

dotenv.config();

app.get("/", (req: Request, res: Response) => {
    res.send("Winter is coming");
});

app.use('/api', routes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
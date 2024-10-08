import { Request, Response, NextFunction } from "express";
import { connectionState } from "../db-config";

export const checkConnectionState = (req: Request, res: Response, next: NextFunction) => {
    const { connection: cnn } = connectionState();

    cnn.on('error', (err) => {
        const error = `${err.code} Can't connect Database!`;
        res.send(error);
    });

    cnn.on('connect', (cnnData) => {
        next();
    });
}

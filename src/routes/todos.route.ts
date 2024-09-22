import express, { Request, Response, NextFunction } from "express";
import { connectionState } from "../db-config";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const sql = `SELECT * FROM users `;
    try {
        const cnn = connectionState().connection;
        if (cnn) {
            cnn.query(sql, (err: any, rows: any, fields: any) => {
                res.json(rows);
            });
        } else {
            const err = new Error('Error');
            err.message = 'Something went wrong!';
            throw err;
        }
    } catch (error) {
        res.send(error.message);
    }
});

export default router;
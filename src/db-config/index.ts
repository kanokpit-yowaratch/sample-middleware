import mysql from 'mysql2';
import dotenv from "dotenv";

dotenv.config();

const connectionState = () => {
    try {
        const connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        });
        return { connection };
    } catch (error) {
        return { connection: null };
    }
}

export {
    connectionState
}
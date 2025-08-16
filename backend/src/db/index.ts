import mysql from 'mysql2/promise';

export const connectToDatabase = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || '127.0.0.1',
        user: process.env.DB_USER || 'root',
        database: process.env.DB_NAME || 'test001',
        password: process.env.DB_PASSWORD || 'admin',
        port: Number(process.env.DB_PORT) || 3306,
    });
    return connection;
};
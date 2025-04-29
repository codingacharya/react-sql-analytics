import mysql from 'mysql';

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'thirupathi',
  password: process.env.DB_PASSWORD || 'thirupathi',
  database: process.env.DB_NAME || 'analytics',
  connectionLimit: 10
});

export default db;

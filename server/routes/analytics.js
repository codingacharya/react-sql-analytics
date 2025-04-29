import express from 'express';
import db from '../db.js';

const router = express.Router();

router.get('/signups', (req, res) => {
  const query = `
    SELECT DATE_FORMAT(signup_date, '%Y-%m') AS month, COUNT(*) AS signups
    FROM users GROUP BY month ORDER BY month;
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

export default router;

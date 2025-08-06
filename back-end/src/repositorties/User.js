const pool = require('../config/db');

class User {
  static async findByGoogleId(googleId) {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM candidates WHERE googleId = ?',
        [googleId.toString()] // ensure it's a string
      );

      return rows.length > 0 ? rows[0] : undefined;
    } catch (err) {
      console.error('❌ Error in findByGoogleId:', err);
      return undefined;
    }
  }

  static async createUser(email, name, googleId) {
    try {
      const [result] = await pool.execute(
        'INSERT INTO candidates (email, name, googleId) VALUES (?, ?, ?)',
        [email, name, googleId.toString()] // ensure it's a string
      );

      return result; // Do not destructure to rows, this is correct for INSERT
    } catch (err) {
      console.error(`❌ Error in createUser for email ${email}:`, err);
      throw err;
    }
  }
}

module.exports = User;

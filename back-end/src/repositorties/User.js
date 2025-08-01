const { pool } = require('../config/db');

class User {
    static async findByGoogleId(googleId) {
        try {
            console.log(`Attempting to find user with googleId: ${googleId}`);
            const rawResult = await pool.execute('SELECT * FROM candidates WHERE googleId = ?', [googleId]);
            console.log('Raw result from findByGoogleId:', rawResult);

            // Ensure rawResult is an array and has at least two elements
            if (!Array.isArray(rawResult) || rawResult.length < 1) {
                console.error("findByGoogleId: pool.execute did not return an array or expected structure.");
                return null; // Or throw a specific error
            }

            const [rows] = rawResult; // Safely destructure after checks
            console.log('Rows found by findByGoogleId:', rows);

            return rows[0];
        } catch (error) {
            console.error(`Error in findByGoogleId for googleId ${googleId}:`, error);
            // Re-throw or handle appropriately
            throw error;
        }
    }

    static async createUser(googleId, email, name, imageUrl) {
        try {
            console.log(`Attempting to create user: ${email}`);
            const [result] = await pool.execute(
                'INSERT INTO candidates (googleId, email, name, imageUrl) VALUES (?, ?, ?, ?)',
                [googleId, email, name, imageUrl]
            );
            console.log('Insert result:', result);

            // Fetch the newly created user using the insertId
            const [newUserRows] = await pool.execute('SELECT * FROM candidates WHERE id = ?', [result.insertId]);
            console.log('Newly created user rows:', newUserRows);

            return newUserRows[0];
        } catch (error) {
            console.error(`Error in createUser for email ${email}:`, error);
            throw error;
        }
    }
}

module.exports = User;
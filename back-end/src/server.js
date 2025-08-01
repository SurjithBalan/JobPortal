const express = require("express");
const { ServerConfig, Logger } = require("./config/index");
const db = require("./config/db");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const { csrfProtection } = require('./middleware/authMiddleware'); 
const app = express();

async function startServer() {
  try {
    const connection = await db.getConnection();
    console.log("Connected to MySQL");
    connection.release();
    app.use(cors({
      origin: ServerConfig.FRONTEND_URL || 'http://localhost:5173',
      optionsSuccessStatus: 200,
      credentials: true
  }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));
    
    // Write API routes Here
    app.use('/api/auth', authRoutes);

    // Simple root route for Api Testing
        app.get('/', (req, res) => {
            res.send('Backend is running!');
        });

        app.use((err, req, res, next) => {
            if (err.code === 'EBADCSRFTOKEN') {
                res.status(403).json({ message: 'Invalid CSRF token' });
            } else {
                next(err);
            }
        });
    app.listen(ServerConfig.PORT, () => {
      console.log(`Server running on port ${ServerConfig.PORT}`);
      Logger.info(`Server running on port ${ServerConfig.PORT}`);
    });
  } catch (err) {
    console.log("Error in Starting Server:", err.message);
    Logger.info("Failed to connect to DB:", err.message);
    console.error(); 
    process.exit(1);
  }
}

startServer();

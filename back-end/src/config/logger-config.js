// config/logger.js
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level.toUpperCase()}: ${message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(
    label({ label: "BackendApp" }),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "combines.log" }),
  ],
});

module.exports = logger;

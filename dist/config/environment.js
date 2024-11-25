"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.META_URL = exports.META_KEY = exports.SMTP_PORT = exports.SMTP_SERVER = exports.EMAIL_PASSWORD = exports.EMAIL_ADDRESS = exports.DATABASE_URL = exports.NATS_SERVER = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.NATS_SERVER = process.env.NATS_SERVER;
exports.DATABASE_URL = process.env.DATABASE_URL;
exports.EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
exports.EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
exports.SMTP_SERVER = process.env.SMTP_SERVER;
exports.SMTP_PORT = process.env.SMTP_PORT;
exports.META_KEY = process.env.META_KEY;
exports.META_URL = process.env.META_URL;
//# sourceMappingURL=environment.js.map
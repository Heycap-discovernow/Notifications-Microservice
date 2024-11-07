import { config } from "dotenv";

config()

export const NATS_SERVER = process.env.NATS_SERVER;
export const DATABASE_URL = process.env.DATABASE_URL;
export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
export const SMTP_SERVER = process.env.SMTP_SERVER;
export const SMTP_PORT = process.env.SMTP_PORT;
export const META_KEY = process.env.META_KEY;
export const META_URL = process.env.META_URL;
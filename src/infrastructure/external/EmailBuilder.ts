import { SMTP_SERVER, SMTP_PORT, EMAIL_ADDRESS, EMAIL_PASSWORD } from "src/config/environment";

import { SendNotificationUseCase } from "src/domain/ports/in/SendNotificationUseCase";

import { Injectable } from "@nestjs/common";

import * as nodemailer from "nodemailer";

@Injectable()
export class EmailBuilder implements SendNotificationUseCase {
    private transporter: nodemailer.Transporter;
    public destination: string;
    public message: string;
    public subject: string;

    constructor(email: string, message: string, subject: string) {
        this.transporter = nodemailer.createTransport({
            host: SMTP_SERVER,
            port: parseInt(SMTP_PORT),
            secure: false,
            auth: {
                user: EMAIL_ADDRESS,
                pass: EMAIL_PASSWORD
            },
            logger: true,
            debug: true,
            tls: {
                rejectUnauthorized: true,
            },
        });
        this.destination = email;
        this.message = message;
        this.subject = subject;
    }

    public buildNotification(): void {
        const sendInfo = {
            from: EMAIL_ADDRESS,
            to: this.destination,
            subject: this.subject,
            text: this.message,
        };
        this.transporter.sendMail(sendInfo);
    }
}
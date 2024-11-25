"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailBuilder = void 0;
const environment_1 = require("../../config/environment");
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
let EmailBuilder = class EmailBuilder {
    constructor(email, message, subject) {
        this.transporter = nodemailer.createTransport({
            host: environment_1.SMTP_SERVER,
            port: parseInt(environment_1.SMTP_PORT),
            secure: false,
            auth: {
                user: environment_1.EMAIL_ADDRESS,
                pass: environment_1.EMAIL_PASSWORD
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
    buildNotification() {
        const sendInfo = {
            from: environment_1.EMAIL_ADDRESS,
            to: this.destination,
            subject: this.subject,
            text: this.message,
        };
        this.transporter.sendMail(sendInfo);
    }
};
exports.EmailBuilder = EmailBuilder;
exports.EmailBuilder = EmailBuilder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String, String, String])
], EmailBuilder);
//# sourceMappingURL=EmailBuilder.js.map
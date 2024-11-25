import { SendNotificationUseCase } from "src/domain/ports/in/SendNotificationUseCase";
export declare class EmailBuilder implements SendNotificationUseCase {
    private transporter;
    destination: string;
    message: string;
    subject: string;
    constructor(email: string, message: string, subject: string);
    buildNotification(): void;
}

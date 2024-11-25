import { SendNotificationUseCase } from "src/domain/ports/in/SendNotificationUseCase";
export declare class WhatsappBuilder implements SendNotificationUseCase {
    phone: string;
    message: string;
    constructor(destination: string, message: string);
    buildNotification(): Promise<void>;
}

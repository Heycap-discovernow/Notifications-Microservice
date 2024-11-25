import { SendNotificationDTO } from "src/application/dtos/sendNotificationDTO";
import { CreateNotificationUseCase } from "src/domain/ports/in/CreateNotificationUseCase";
export declare class NotificationService implements CreateNotificationUseCase {
    private readonly createNotificationUseCase;
    constructor(createNotificationUseCase: CreateNotificationUseCase);
    createNotification(contact_uuid: string, channel: string, type: string): Promise<string>;
    sendNotification(sendInfo: SendNotificationDTO): void;
}

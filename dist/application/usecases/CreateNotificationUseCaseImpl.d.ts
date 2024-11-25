import { CreateNotificationUseCase } from "src/domain/ports/in/CreateNotificationUseCase";
import { NotificationRepository } from "src/domain/ports/out/NotificationRepository";
export declare class CreateNotificationUseCaseImpl implements CreateNotificationUseCase {
    private readonly notificationRepository;
    constructor(notificationRepository: NotificationRepository);
    createNotification(contact_uuid: string, channel: string, type: string): Promise<string>;
}

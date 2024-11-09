import { NotificationDTO } from "src/domain/dtos/NotificationDTO";

export interface CreateNotificationUseCase {
    createNotification(data: NotificationDTO ): Promise<string>;
}
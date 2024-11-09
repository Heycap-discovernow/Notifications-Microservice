import { NotificationDTO } from "src/domain/dtos/NotificationDTO";
import { Notification } from "src/domain/models/Notification";

export interface NotificationRepository  {
    saveNotification(notification: NotificationDTO): Promise<string>;
    getNotification(user_uuid: string, notification_uuid: string): Promise<string>;
    // getAllNotification(user_uuid: string): Promise<Notification[]>
    getAllNotification(user_uuid: string): Promise<string>
}
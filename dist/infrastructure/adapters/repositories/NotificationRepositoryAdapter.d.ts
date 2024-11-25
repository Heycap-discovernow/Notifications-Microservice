import { NotificationRepository } from "src/domain/ports/out/NotificationRepository";
import { Notification } from "src/domain/models/Notification";
import { NotificationDTO } from "src/domain/dtos/NotificationDTO";
import { PrismaClient } from "@prisma/client";
import { OnModuleInit } from "@nestjs/common";
export declare class NotificationRepositoryAdapter extends PrismaClient implements OnModuleInit, NotificationRepository {
    onModuleInit(): Promise<void>;
    saveNotification(notification: NotificationDTO): Promise<void>;
    getNotification(contact_uuid: string, notification_uuid: string): Promise<Notification>;
    getAllNotification(contact_uuid: string): Promise<Notification[]>;
    private toNotificationResponse;
}

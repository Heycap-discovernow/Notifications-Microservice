import { NotificationRepository } from "src/domain/ports/out/NotificationRepository";
import { Notification } from "src/domain/models/Notification";
import { NotificationDTO } from "src/domain/dtos/NotificationDTO";
import { SentAt } from "src/domain/value_objects/SendedAt";

import { PrismaClient } from "@prisma/client";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { not } from "joi";
import { NotificationType } from "src/domain/value_objects/NotificationType";

@Injectable()
export class NotificationRepositoryAdapter extends PrismaClient implements OnModuleInit, NotificationRepository {
    async onModuleInit() {
        await this.$connect();
    }

    public async saveNotification(notification: NotificationDTO): Promise<void> {
        const save = await this.notification.create({
            data: {
                uuid: notification.uuid,
                send_date: notification.send_date,
                sent_at: notification.sent_at,
                type: notification.type,
                contact_uuid: notification.contact_uuid
            }
        });

        if (!save) {
            throw new Error("Error saving notification");
        }
    }

    public async getNotification(contact_uuid: string, notification_uuid: string): Promise<Notification> {
        const notification = await this.notification.findUnique({
            where: {
                uuid: notification_uuid,
                contact_uuid: contact_uuid
            }
        });

        if (!notification) {
            throw new Error("Notification not found");
        }

        const toNotification = {...notification, sent_at: SentAt[notification.sent_at], type: NotificationType[notification.type]};
        return this.toNotificationResponse(toNotification);
    }

    public async getAllNotification(contact_uuid: string): Promise<Notification[]> {
        const result = await this.notification.findMany({
            where: {
                contact_uuid: contact_uuid
            }
        });

        if (!result) {
            throw new Error("Notifications not found");
        }

        const notifications = result.map((notification) => {
            const toNotification = {...notification, sent_at: SentAt[notification.sent_at], type: NotificationType[notification.type]};
            return this.toNotificationResponse(toNotification);
        });

        return notifications;
    }

    private toNotificationResponse(notification: NotificationDTO): Notification {
        return new Notification(notification.contact_uuid, notification.send_date, notification.sent_at, notification.type);
    }
}
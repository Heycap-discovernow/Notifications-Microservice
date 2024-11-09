import { NotificationRepository } from "src/domain/ports/out/NotificationRepository";
import { Notification } from "src/domain/models/Notification";
import { NotificationDTO } from "src/domain/dtos/NotificationDTO";

import { PrismaClient } from "@prisma/client";
import { Injectable, OnModuleInit } from "@nestjs/common";

@Injectable()
export class NotificationRepositoryAdapter extends PrismaClient implements OnModuleInit, NotificationRepository {
    async onModuleInit() {
        await this.$connect();
    }

    public async saveNotification(notification: NotificationDTO): Promise<string> {
        // const code = Math.floor(1000 + Math.random() * 9000).toString();
        const save = await this.notification.create({
            data: {
                uuid: notification.uuid,
                user_uuid: notification.user_uuid,
                send_date: notification.type,
                type: notification.type,
            }
        });

        if (!save) {
            throw new Error("Error saving notification");
        }

        return "Notification Sent";
    }

    public async getNotification(user_uuid: string, notification_uuid: string): Promise<string> {
        const notification = await this.notification.findUnique({
            where: {
                uuid: notification_uuid,
                user_uuid: user_uuid
            }
        });

        if (!notification) {
            throw new Error("Notification not found");
        }

        return "Notification found";
    }

    // public async getAllNotification(user_uuid: string): Promise<Notification[]> {
    public async getAllNotification(user_uuid: string): Promise<string> {
        const result = await this.notification.findMany({
            where: {
                user_uuid: user_uuid
            }
        });

        if (!result) {
            throw new Error("Notifications not found");
        }

        //crear un toNotificationResponse para mapear el resultado
        // return result;
        return "Notifications found";
    }
}
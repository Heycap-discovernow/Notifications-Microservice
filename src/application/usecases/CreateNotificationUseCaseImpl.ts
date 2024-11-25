import { CreateNotificationUseCase } from "src/domain/ports/in/CreateNotificationUseCase";
import { NotificationRepository } from "src/domain/ports/out/NotificationRepository";

import { Notification } from "src/domain/models/Notification";
import { SentAt } from "src/domain/value_objects/SendedAt";
import { NotificationType } from "src/domain/value_objects/NotificationType";

import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class CreateNotificationUseCaseImpl implements CreateNotificationUseCase {
    constructor(
        @Inject("NotificationRepository") private readonly notificationRepository: NotificationRepository
    ) {}

    public async createNotification(contact_uuid: string, channel: string, type: string): Promise<string> {
        const sentAt = SentAt[channel.toUpperCase() as keyof typeof SentAt];
        const notificationType = NotificationType[type.toUpperCase() as keyof typeof NotificationType];
        const notification = new Notification(contact_uuid, new Date(), sentAt, notificationType);
        await this.notificationRepository.saveNotification(notification);
        return "Notification Created";
    }
}
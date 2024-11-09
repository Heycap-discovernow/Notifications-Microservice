import { CreateNotificationUseCase } from "src/domain/ports/in/CreateNotificationUseCase";
import { NotificationRepository } from "src/domain/ports/out/NotificationRepository";

import { Notification } from "src/domain/models/Notification";
import { NotificationDTO } from "src/domain/dtos/NotificationDTO";

import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class CreateNotificationUseCaseImpl implements CreateNotificationUseCase {
    constructor(
        @Inject("NotificationRepository") private readonly notificationRepository: NotificationRepository
    ) {}

    public async createNotification(data: NotificationDTO): Promise<string> {
        const notification = new Notification(data.user_uuid, new Date() , data.type, data.contact_uuid);
        await this.notificationRepository.saveNotification(notification);
        return "Notification Created";
    }
}
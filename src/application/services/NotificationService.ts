import { Injectable, Inject } from "@nestjs/common";

import { SendNotificationDTO } from "src/application/dtos/sendNotificationDTO";

import { CreateNotificationUseCase } from "src/domain/ports/in/CreateNotificationUseCase";

@Injectable()
export class NotificationService implements CreateNotificationUseCase {
    constructor(
        @Inject('CreateNotificationUseCase') private readonly createNotificationUseCase: CreateNotificationUseCase,
    ){}

    public async createNotification(contact_uuid: string, channel: string, type: string): Promise<string> {
        const result = await this.createNotificationUseCase.createNotification(contact_uuid, channel, type);
        console.log(result)
        return result;
    }

    public sendNotification(sendInfo: SendNotificationDTO): void {
        const created = this.createNotification(sendInfo.contact_uuid, sendInfo.type, sendInfo.notificationType);
        if (!created) {
            throw new Error("Notification not sent because it was not be able to created");
        }
        sendInfo.build();
    }
}
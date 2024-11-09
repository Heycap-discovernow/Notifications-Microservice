import { CreateNotificationUseCase } from "src/domain/ports/in/CreateNotificationUseCase";
import { SendNotificationUseCase } from "src/domain/ports/in/SendNotification.UseCase";
import { NotificationDTO } from "src/domain/dtos/NotificationDTO";

import { Injectable, Inject } from "@nestjs/common";

type buildNotification = () => void;

@Injectable()
export class NotificationService implements CreateNotificationUseCase {
    constructor(
        @Inject('CreateNotificationUseCase') private readonly createNotificationUseCase: CreateNotificationUseCase,
        // @Inject('SendNotificationUseCase') private readonly sendNotificationUseCase: SendNotificationUseCase,
    ){}

    public async createNotification(data: NotificationDTO): Promise<string> {
        const result = await this.createNotificationUseCase.createNotification(data);
        console.log(result)
        return result;
    }

    public sendNotification(build: buildNotification): string {
        // this.sendNotificationUseCase.buildNotification();
        build();
        return "Notification Sent";
    }
}
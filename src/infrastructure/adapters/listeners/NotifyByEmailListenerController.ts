import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";

import { EmailBuilder } from "src/infrastructure/external/EmailBuilder";

import { EmailBuilderDTO } from "src/application/dtos/EmailBuilderDTO";
import { NotificationService } from "src/application/services/NotificationService";

@Controller()
export class NotifyByEmailListenerController {
    constructor(
        private readonly notificationService: NotificationService
    ) {}

    @EventPattern('send-email')
    public handleNotifyByEmail(data: EmailBuilderDTO) {
        const emailBuilder = new EmailBuilder(data.destination, data.message, data.subject, data.user_uuid, data.contact_uuid);
        this.notificationService.sendNotification(() => emailBuilder.buildNotification());
    }
}
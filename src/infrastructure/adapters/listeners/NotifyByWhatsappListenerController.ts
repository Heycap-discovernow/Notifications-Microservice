import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";

import { NotificationService } from "src/application/services/NotificationService";
import { WhatsappBuilder } from "src/infrastructure/external/WhatsappBuilder";
import { WhatsappBuilderDTO } from "src/application/dtos/WhatsappBuilderDTO";

@Controller()
export class NotifyByEmailListenerController {
    constructor(
        private readonly notificationService: NotificationService
    ) {}

    @EventPattern('send-whatsapp')
    public handleNotifyByWhatsapp(data: WhatsappBuilderDTO) {
        const whatsappBuilder = new WhatsappBuilder(data.destination, data.message);
        this.notificationService.sendNotification(() => whatsappBuilder.buildNotification());
    }
}
import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";

import { EmailBuilder } from "src/infrastructure/external/EmailBuilder";
import { WhatsappBuilder } from "src/infrastructure/external/WhatsappBuilder";

import { NotifyBuilderDTO } from "src/application/dtos/NotifyBuilderDTO";
import { SendNotificationDTO } from "src/application/dtos/sendNotificationDTO";
import { NotificationService } from "src/application/services/NotificationService";

@Controller()
export class NotifyListenerController {
    constructor(
        private readonly notificationService: NotificationService
    ) { }

    @EventPattern('send-notification')
    public handleNotifyByEmail(data: NotifyBuilderDTO) {
        try {
            let sendInfo: SendNotificationDTO;
            switch (data.channel) {
                case 'email':
                    const emailBuilder = new EmailBuilder(data.to, data.message, data.subject);
                    sendInfo = new SendNotificationDTO(() => emailBuilder.buildNotification(), data.contact_uuid, data.channel, data.type);
                    this.notificationService.sendNotification(sendInfo);
                    break;
                case 'whatsapp':
                    const whatsappBuilder = new WhatsappBuilder(data.to, data.message);
                    sendInfo = new SendNotificationDTO(() => whatsappBuilder.buildNotification(), data.contact_uuid, data.channel, data.type);
                    this.notificationService.sendNotification(sendInfo);
                    break;
                default:
                    const defaultBuilder = new WhatsappBuilder(data.to, data.message);
                    sendInfo = new SendNotificationDTO(() => defaultBuilder.buildNotification(), data.contact_uuid, data.channel, data.type);
                    this.notificationService.sendNotification(sendInfo);
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    }
}
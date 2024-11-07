import { Controller } from "@nestjs/common";
import { MessagePattern, EventPattern, Payload } from "@nestjs/microservices";

import { NotificationService } from "src/application/services/NotificationService";

@Controller()
export class SendEmailListenerController {
    constructor(
        private readonly notificationService: NotificationService
    ) {}

    // @MessagePattern('send-email')
    // public async sendEmail(@Payload() email: string) {
    //     console.log(email);
    //     return await this.notificationService.sendEmailWelcome(email);
    // }
    @EventPattern('send-email')
    public async handleSendEmail(email: string) {
        console.log(email);
        return await this.notificationService.sendEmailWelcome(email);
    }
}
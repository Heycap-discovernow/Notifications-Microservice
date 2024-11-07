import { EmailWelcomeUseCase } from "src/domain/ports/in/EmailWelcomeUseCase";
import { NotificationRepository } from "src/domain/ports/out/NotificationRepository";

import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class EmailWelcomeUseCaseImpl implements EmailWelcomeUseCase {
    constructor(
        @Inject("NotificationRepository") private readonly notificationRepository: NotificationRepository
    ){}
    public async sendEmailWelcome(email: string): Promise<string> {
        return `Welcome message sent to ${email} successfully`;
    }
}
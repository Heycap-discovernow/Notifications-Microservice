import { MetaVerificationCodeUseCase } from "src/domain/ports/in/MetaVerificationCodeUseCase";
import { NotificationRepository } from "src/domain/ports/out/NotificationRepository";

import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class MetaVerificationCodeUseCaseImpl implements MetaVerificationCodeUseCase {
    constructor(
        @Inject("NotificationRepository") private readonly notificationRepository: NotificationRepository
    ){}
    public async sendMetaVerificationCode(phone: string): Promise<string> {
        return 'Meta verification code sent successfully';
    }
}
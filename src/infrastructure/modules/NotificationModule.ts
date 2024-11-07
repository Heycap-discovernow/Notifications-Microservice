import { Module } from "@nestjs/common";

import { TransportModule } from "./Transporter";
import { SendEmailListenerController } from "src/infrastructure/adapters/listeners/SendEmailListenerController";
import { NotificationRepositoryAdapter } from "src/infrastructure/adapters/repositories/NotificationRepositoryAdapter";
import { NotificationService } from "src/application/services/NotificationService";
import { EmailWelcomeUseCaseImpl } from "src/application/usecases/EmailWelcomeUseCaseImpl";
import { MetaVerificationCodeUseCaseImpl } from "src/application/usecases/MetaVerificationCodeUseCaseImpl";

@Module({
    imports: [TransportModule],
    controllers: [SendEmailListenerController],
    providers: [NotificationService, {
        provide: "NotificationRepository",
        useClass: NotificationRepositoryAdapter
    },
        {
            provide: "EmailWelcomeUseCase",
            useClass: EmailWelcomeUseCaseImpl
        },
        {
            provide: "MetaVerificationCodeUseCase",
            useClass: MetaVerificationCodeUseCaseImpl
        }

    ],
    exports: [NotificationModule]
})
export class NotificationModule {}
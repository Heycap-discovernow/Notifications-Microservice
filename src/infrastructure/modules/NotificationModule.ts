import { Module } from "@nestjs/common";

import { TransportModule } from "src/infrastructure/modules/Transporter";
import { NotifyByEmailListenerController } from "src/infrastructure/adapters/listeners/NotifyByEmailListenerController";
import { NotificationRepositoryAdapter } from "src/infrastructure/adapters/repositories/NotificationRepositoryAdapter";

import { NotificationService } from "src/application/services/NotificationService";
import { CreateNotificationUseCaseImpl } from "src/application/usecases/CreateNotificationUseCaseImpl";

@Module({
    imports: [TransportModule],
    controllers: [NotifyByEmailListenerController],
    providers: [NotificationService,
        {
            provide: "NotificationRepository",
            useClass: NotificationRepositoryAdapter
        },
        {
            provide: "CreateNotificationUseCase",
            useClass: CreateNotificationUseCaseImpl
        },
        // {
        //     provide: "SendNotificationUseCase",
        //     useClass: 
        // }
    ],
    exports: [NotificationModule]
})
export class NotificationModule { }
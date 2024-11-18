import { Module } from "@nestjs/common";

import { TransportModule } from "src/infrastructure/modules/Transporter";
import { NotifyListenerController } from "../adapters/listeners/NoticationListenerController";
import { NotificationRepositoryAdapter } from "src/infrastructure/adapters/repositories/NotificationRepositoryAdapter";

import { NotificationService } from "src/application/services/NotificationService";
import { CreateNotificationUseCaseImpl } from "src/application/usecases/CreateNotificationUseCaseImpl";

@Module({
    imports: [TransportModule],
    controllers: [NotifyListenerController],
    providers: [NotificationService,
        {
            provide: "NotificationRepository",
            useClass: NotificationRepositoryAdapter
        },
        {
            provide: "CreateNotificationUseCase",
            useClass: CreateNotificationUseCaseImpl
        },
    ],
    exports: [NotificationModule]
})
export class NotificationModule { }
import { NotifyBuilderDTO } from "src/application/dtos/NotifyBuilderDTO";
import { NotificationService } from "src/application/services/NotificationService";
export declare class NotifyListenerController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    handleNotifyByEmail(data: NotifyBuilderDTO): void;
}

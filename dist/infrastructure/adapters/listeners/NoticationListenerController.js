"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyListenerController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const EmailBuilder_1 = require("../../external/EmailBuilder");
const WhatsappBuilder_1 = require("../../external/WhatsappBuilder");
const NotifyBuilderDTO_1 = require("../../../application/dtos/NotifyBuilderDTO");
const sendNotificationDTO_1 = require("../../../application/dtos/sendNotificationDTO");
const NotificationService_1 = require("../../../application/services/NotificationService");
let NotifyListenerController = class NotifyListenerController {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    handleNotifyByEmail(data) {
        try {
            let sendInfo;
            switch (data.channel) {
                case 'email':
                    const emailBuilder = new EmailBuilder_1.EmailBuilder(data.to, data.message, data.subject);
                    sendInfo = new sendNotificationDTO_1.SendNotificationDTO(() => emailBuilder.buildNotification(), data.contact_uuid, data.channel, data.type);
                    this.notificationService.sendNotification(sendInfo);
                    break;
                case 'whatsapp':
                    const whatsappBuilder = new WhatsappBuilder_1.WhatsappBuilder(data.to, data.message);
                    sendInfo = new sendNotificationDTO_1.SendNotificationDTO(() => whatsappBuilder.buildNotification(), data.contact_uuid, data.channel, data.type);
                    this.notificationService.sendNotification(sendInfo);
                    break;
                default:
                    const defaultBuilder = new WhatsappBuilder_1.WhatsappBuilder(data.to, data.message);
                    sendInfo = new sendNotificationDTO_1.SendNotificationDTO(() => defaultBuilder.buildNotification(), data.contact_uuid, data.channel, data.type);
                    this.notificationService.sendNotification(sendInfo);
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.NotifyListenerController = NotifyListenerController;
__decorate([
    (0, microservices_1.EventPattern)('send-notification'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NotifyBuilderDTO_1.NotifyBuilderDTO]),
    __metadata("design:returntype", void 0)
], NotifyListenerController.prototype, "handleNotifyByEmail", null);
exports.NotifyListenerController = NotifyListenerController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [NotificationService_1.NotificationService])
], NotifyListenerController);
//# sourceMappingURL=NoticationListenerController.js.map
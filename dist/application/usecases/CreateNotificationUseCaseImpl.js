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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationUseCaseImpl = void 0;
const Notification_1 = require("../../domain/models/Notification");
const SendedAt_1 = require("../../domain/value_objects/SendedAt");
const NotificationType_1 = require("../../domain/value_objects/NotificationType");
const common_1 = require("@nestjs/common");
let CreateNotificationUseCaseImpl = class CreateNotificationUseCaseImpl {
    constructor(notificationRepository) {
        this.notificationRepository = notificationRepository;
    }
    async createNotification(contact_uuid, channel, type) {
        const sentAt = SendedAt_1.SentAt[channel.toUpperCase()];
        const notificationType = NotificationType_1.NotificationType[type.toUpperCase()];
        const notification = new Notification_1.Notification(contact_uuid, new Date(), sentAt, notificationType);
        await this.notificationRepository.saveNotification(notification);
        return "Notification Created";
    }
};
exports.CreateNotificationUseCaseImpl = CreateNotificationUseCaseImpl;
exports.CreateNotificationUseCaseImpl = CreateNotificationUseCaseImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("NotificationRepository")),
    __metadata("design:paramtypes", [Object])
], CreateNotificationUseCaseImpl);
//# sourceMappingURL=CreateNotificationUseCaseImpl.js.map
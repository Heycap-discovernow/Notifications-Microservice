"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRepositoryAdapter = void 0;
const Notification_1 = require("../../../domain/models/Notification");
const SendedAt_1 = require("../../../domain/value_objects/SendedAt");
const client_1 = require("@prisma/client");
const common_1 = require("@nestjs/common");
const NotificationType_1 = require("../../../domain/value_objects/NotificationType");
let NotificationRepositoryAdapter = class NotificationRepositoryAdapter extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async saveNotification(notification) {
        const save = await this.notification.create({
            data: {
                uuid: notification.uuid,
                send_date: notification.send_date,
                sent_at: notification.sent_at,
                type: notification.type,
                contact_uuid: notification.contact_uuid
            }
        });
        if (!save) {
            throw new Error("Error saving notification");
        }
    }
    async getNotification(contact_uuid, notification_uuid) {
        const notification = await this.notification.findUnique({
            where: {
                uuid: notification_uuid,
                contact_uuid: contact_uuid
            }
        });
        if (!notification) {
            throw new Error("Notification not found");
        }
        const toNotification = { ...notification, sent_at: SendedAt_1.SentAt[notification.sent_at], type: NotificationType_1.NotificationType[notification.type] };
        return this.toNotificationResponse(toNotification);
    }
    async getAllNotification(contact_uuid) {
        const result = await this.notification.findMany({
            where: {
                contact_uuid: contact_uuid
            }
        });
        if (!result) {
            throw new Error("Notifications not found");
        }
        const notifications = result.map((notification) => {
            const toNotification = { ...notification, sent_at: SendedAt_1.SentAt[notification.sent_at], type: NotificationType_1.NotificationType[notification.type] };
            return this.toNotificationResponse(toNotification);
        });
        return notifications;
    }
    toNotificationResponse(notification) {
        const notificationTransform = new Notification_1.Notification(notification.contact_uuid, notification.send_date, notification.sent_at, notification.type);
        notificationTransform.uuid = notification.uuid;
        return notificationTransform;
    }
};
exports.NotificationRepositoryAdapter = NotificationRepositoryAdapter;
exports.NotificationRepositoryAdapter = NotificationRepositoryAdapter = __decorate([
    (0, common_1.Injectable)()
], NotificationRepositoryAdapter);
//# sourceMappingURL=NotificationRepositoryAdapter.js.map
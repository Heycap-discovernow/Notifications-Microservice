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
exports.Notification = void 0;
const NotificationType_1 = require("../value_objects/NotificationType");
const SendedAt_1 = require("../value_objects/SendedAt");
const class_validator_1 = require("class-validator");
const uuid_1 = require("uuid");
class Notification {
    constructor(contact_uuid, sendDate, sendedAt, type) {
        this.uuid = (0, uuid_1.v4)();
        this.contact_uuid = contact_uuid;
        this.send_date = sendDate;
        this.sent_at = sendedAt;
        this.type = type;
    }
}
exports.Notification = Notification;
__decorate([
    (0, class_validator_1.IsUUID)("4"),
    __metadata("design:type", String)
], Notification.prototype, "uuid", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], Notification.prototype, "contact_uuid", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Notification.prototype, "send_date", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(SendedAt_1.SentAt),
    __metadata("design:type", String)
], Notification.prototype, "sent_at", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(NotificationType_1.NotificationType),
    __metadata("design:type", String)
], Notification.prototype, "type", void 0);
//# sourceMappingURL=Notification.js.map
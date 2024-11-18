export interface CreateNotificationUseCase {
    createNotification(contact_uuid: string, channel: string, type: string): Promise<string>;
}
export declare class NotifyBuilderDTO {
    channel: string;
    to: string;
    message: string;
    contact_uuid: string;
    type: string;
    subject?: string;
    constructor(channel: string, to: string, message: string, contact_uuid: string, type: string, subject?: string);
}

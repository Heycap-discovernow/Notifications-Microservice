export class NotifyBuilderDTO {
    constructor(
        public channel: string,
        public to: string,
        public message: string,
        public contact_uuid: string,
        public type: string,
        public subject?: string,
    ){}

}
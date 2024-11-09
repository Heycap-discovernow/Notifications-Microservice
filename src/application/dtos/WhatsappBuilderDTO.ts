export class WhatsappBuilderDTO {
    constructor(
        public destination: string,
        public message: string,
        public user_uuid?: string,
        public contact_uuid?: string
    ){}
}
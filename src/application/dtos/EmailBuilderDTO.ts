export class EmailBuilderDTO {
    constructor(
        public destination: string,
        public subject: string,
        public message: string,
        public user_uuid?: string,
        public contact_uuid?: string
    ){}

}
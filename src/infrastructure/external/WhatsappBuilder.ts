import { META_KEY, META_URL } from "src/config/environment";

import { SendNotificationUseCase } from "src/domain/ports/in/SendNotificationUseCase";

import axios from "axios";

export class WhatsappBuilder implements SendNotificationUseCase {
    public phone: string;
    public message: string;

    constructor(destination: string, message: string) {
        this.phone = destination;
        this.message = message;
    }

    public async buildNotification(): Promise<void> {
        const response = await axios.post(
            META_URL,
            {
                messaging_product: "whatsapp",
                recipient_type: "individual",
                to: `+52${this.phone}`,
                type: "template",
                template: {
                    name: "authentication",
                    language: {
                        code: "en_US"
                    },
                    components: [
                        {
                            type: "body",
                            parameters: [
                                {
                                    type: "text",
                                    text: this.message
                                }
                            ]
                        },
                        {
                            type: "button",
                            sub_type: "url",
                            index: "0",
                            parameters: [
                                {
                                    type: "text",
                                    text: this.message
                                }
                            ]
                        }
                    ]
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${META_KEY}`  // Token de acceso de Meta
                }
            }
        );
        console.log(response.data);
    }
}
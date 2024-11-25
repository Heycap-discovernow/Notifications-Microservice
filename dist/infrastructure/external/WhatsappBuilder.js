"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappBuilder = void 0;
const environment_1 = require("../../config/environment");
const axios_1 = require("axios");
class WhatsappBuilder {
    constructor(destination, message) {
        this.phone = destination;
        this.message = message;
    }
    async buildNotification() {
        const response = await axios_1.default.post(environment_1.META_URL, {
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
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${environment_1.META_KEY}`
            }
        });
        console.log(response.data);
    }
}
exports.WhatsappBuilder = WhatsappBuilder;
//# sourceMappingURL=WhatsappBuilder.js.map
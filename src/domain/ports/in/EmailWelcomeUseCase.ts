export interface EmailWelcomeUseCase {
    sendEmailWelcome(email: string): Promise<string>;
}
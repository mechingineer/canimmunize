export class LoginPage {

    // Define selectors
    //xpaths with variable will be plugged dynamically
    private usernameInput = "//input[@id='username']";
    private passwordInput = "//input[@id='password']";
    private continueButton = "//button[text()='Continue']";

    public get _usernameInput(): string {
        return this.usernameInput;
    }

    public get _passwordInput(): string {
        return this.passwordInput;
    }

    public get _continueButton(): string {
        return this.continueButton;
    }

}
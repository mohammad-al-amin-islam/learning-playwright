exports.LoginTest = class LoginPage{
    constructor(page){
        this.page = page;
        // this.signInLink = page.getByRole("link", { name: "Sign In" });
        this.enterEmail = page.getByPlaceholder("Enter your Email Address");
        this.enterPassword = page.getByPlaceholder("Enter your password");
        this.sigInButton = page.getByRole("button", { name: "Sign In" });
    }

    async gotoUrl(){
        await this.page.goto("https://company-communication-platform.vercel.app/");
    }

    async login(email,password){
        await this.enterEmail.fill(email)
        await this.enterPassword.fill(password);
        await this.sigInButton.click();
    }
}
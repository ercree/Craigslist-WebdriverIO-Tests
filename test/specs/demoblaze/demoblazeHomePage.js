describe("demoblaze Home Page", async()=>
{
    it("load home page", async()=>
    {
        await browser.url ('https://demoblaze.com/'),
        await expect(browser).toHaveUrl('https://demoblaze.com/') 
    }
    )
}
)

describe("Navigate to sign up and log in", () => {

    let uniqueUsername ='';

    it("Navigate to and add sign in", async () => {
        await browser.url('https://demoblaze.com/');
        
        // Locate and click the sign-in button
        const signUpButton = await $("#signin2");
        await signUpButton.click();

        // Set username and password values
        const userNameField = await $("#sign-username");
        uniqueUsername = `ercree_${Date.now()}`;
        await userNameField.setValue(uniqueUsername);

        const passwordField = await $('#sign-password');
        await passwordField.setValue("TomCat");

        // Locate the register button and perform actions
        const modal = await $('#signInModal');
        const modalButton = await modal.$('button.btn-primary');
        await modalButton.click();

        await browser.waitUntil(async () => {
            const alertText = await browser.getAlertText();
            return alertText.includes("Sign up successful");
        }, { timeout: 5000 });
        await browser.acceptAlert();
    });

    
    it("Navigate to and log in", async() =>{

        const logInButton1 = await $("#login2");
        await logInButton1.waitForClickable();
        await logInButton1.click();

        const userName = await $('#loginusername');
        await userName.setValue(uniqueUsername);

        const password = await $('#loginpassword');
        await password.setValue('TomCat');

        const logInModal = await $("#logInModal");
        const logInButton = await logInModal.$('button.btn-primary');
       // await logInButton.waitForClickable();
        await logInButton.click();

        const welcomeMessage = await $("#nameofuser");
        await welcomeMessage.waitForDisplayed();
        const messageText = await welcomeMessage.getText();
        console.log(messageText);
    });

});

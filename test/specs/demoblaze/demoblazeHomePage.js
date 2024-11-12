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

describe("Navigate to sign in", () => {
    it("Navigate to and add sign in", async () => {
        await browser.url('https://demoblaze.com/');
        
        // Locate and click the sign-in button
        const signUpButton = await $("#signin2");
        await signUpButton.click();

        // Set username and password values
        const userNameField = await $("#sign-username");
        await userNameField.setValue("ercree");

        const passwordField = await $('#sign-password');
        await passwordField.setValue("TomCat");

        // Locate the register button and perform actions
        const modal = await $('#signInModal');
        const modalButton = await modal.$('button.btn-primary');
        await modalButton.click();

    });
});

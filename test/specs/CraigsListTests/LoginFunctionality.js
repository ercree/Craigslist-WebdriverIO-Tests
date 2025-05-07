describe ('Test Login', async ()=>
    {
        before(async ()=>{
            await browser.url('https://houston.craigslist.org/');
        
        });

        it ('Will Test Invalid Creditials', async ()=>
        {
            const loginButton = await $("a[class='cl-thumb-anchor cl-goto-account'] span[class='icon icom-']")
            await loginButton.click();

           const usernameTextBox = await $("#inputEmailHandle");
           const passwordTextBox = await $("#inputPassword");

           await usernameTextBox.setValue('ercree@gmail.com');
           await passwordTextBox.setValue('TomCat123');

           await $("#login").click();

           const loginErrorMsg = await $(".alert.alert-sm.alert-error");
             const loginErrorMsgText = await loginErrorMsg.getText();


           await expect(loginErrorMsg).toHaveText(expect.stringContaining("Try again or "));

            

        });
    });
describe('Posting an Ad', async () =>{
    before(async ()=>{ 
        await browser.url('https://houston.craigslist.org/')

    });
    it('Verify the process of posting an Ad', async () =>{

        const postBtn = await $('#post');
        await postBtn.click();

        const btnForSaleByOwnr = await $('input[value="fso"]');
        await btnForSaleByOwnr.click();

        const bicycleBtn = await $('input[value ="68"]');
        await bicycleBtn.click();

        const postingTitle = await $('#PostingTitle');
        await postingTitle.setValue('Bike');

        const price = await $('input[title="Please enter a number"]');
        await price.setValue('$1000');

        const zipCode = await $('#postal_code');
        await zipCode.setValue('77074');

        const description = await $('#PostingBody');
        await description.setValue('Kids Bike');

        const posterEmail = await $("input[name='FromEMail']");
        await posterEmail.setValue('goboldygook@yahoo.com');

        const contactThruDM = await $('input[name="contact_chat_ok"]');
        await contactThruDM.click();
    

        const dropDownArrow = await $$(".ui-selectmenu-icon.ui-icon.ui-icon-triangle-1-s");
        await dropDownArrow[0].click();

        const kidsOpt = await $('#ui-id-18');
        await kidsOpt.click();

        const contBt = await $('.go.big-button.submit-button');
        await contBt.click();

        const contBt2 = await $('.continue.bigbutton');
        await contBt2.click();

        const doneBtn = await $('.done');
         await doneBtn.click();

         const publishBtn = await $('.button');
        await publishBtn.click();

        const confirmations = await $$('div#thanks em');

if (!confirmations.length) {
    throw new Error('No confirmation elements found.');
}

const firstConfirmation = confirmations[0];

if (typeof firstConfirmation.getText !== 'function') {
    throw new Error('First element is not a WebdriverIO element.');
}

await firstConfirmation.waitForDisplayed({ timeout: 10000 });

const confirmText = await firstConfirmation.getText();

expect(confirmText).toContain("Important - Further action is required");


    });
});
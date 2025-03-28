describe ('Verify CraigsList HomePage Elements', async ()=>
    {
        before(async ()=>{
            await browser.url('https://houston.craigslist.org/');
        });

        it('Will use the Search Bar Functionality', async() =>
        {
            const searchBar = await $("input[placeholder='search craigslist']");
            await searchBar.setValue('Laptop');
            
            const spanText = await $$('div a:nth-child(2)');
            console.log(spanText[0,1,2,3,4]);

        });
    });
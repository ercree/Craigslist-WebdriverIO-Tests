describe ('Verify CraigsList HomePage Elements', async ()=>
{
    before(async ()=>{
        await browser.url('https://houston.craigslist.org/');
    });
    
    it('Will Verify Header Elements', async()=>
    {
         const housing = await $('.hhh');
        const jobs = await $('.jjj');
        const forSale = await $('.sss');

        const headerElements =[housing, jobs, forSale];
        for (let elem of headerElements)
        {
        await expect(elem).toBeDisplayed(); 
        }
    });

    it ('Will Verify Footer Elements', async  ()=>
    {
        const help = await $("//a[@href='https://www.craigslist.org/about/help/'][normalize-space()='help']");
        const terms = await $("//a[normalize-space()='terms']");
        const privacy = await $("//a[normalize-space()='privacy']");

        const footerElements = [help, terms, privacy];
        for (let elem of footerElements)
        {
            await expect(elem).toBeDisplayed();
        }
        

    });

    it('Will Verify Presence of Search Bar', async ()=>{
        const searchBar = $("input[placeholder='search craigslist']");
        await expect(searchBar).toBeDisplayed();
    });
    
    it('Will Verify if Post Elements are Present', async()=>{

        const postAnAd = await $('#post');
        await expect(postAnAd).toBeDisplayed();
        const post = await $('.cl-goto-post');
        await expect(post).toBeDisplayed();
    });

});
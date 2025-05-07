describe('Verify CraigsList HomePage Elements', async () => {
    before(async () => {
        await browser.url('https://houston.craigslist.org/');
    });

    it('Will use the Search Bar Functionality', async () => {
        const searchBar = await $("input[placeholder='search craigslist']");
        await searchBar.setValue('Laptop');
        await browser.keys('Enter');

        // Wait for results to load
        await browser.waitUntil(
            async () => (await $$('div.gallery-card')).length > 0,
            { timeout: 5000, timeoutMsg: 'Expected at least one search result' }
        );

        // Get parent <a> elements
        const spanElements = await $$('div.gallery-card a[tabindex="0"] span.label');
        const topTenSpanElm = spanElements.slice(0,10);
        
        console.log("Erin:", topTenSpanElm);
        // For each <a>, find the <span> and get its text (if it exists)
        const spanTexts = await Promise.all(topTenSpanElm.map(async (el) => {
        
                return await el.getText();
        
        }));

        console.log('Texts inside <span>: ', spanTexts);

        // Assert that at least one result contains 'laptop'
        const hasLaptop = spanTexts.some(text => text.toLowerCase().includes('laptop'));
        expect(hasLaptop).toBe(true);
    });
});

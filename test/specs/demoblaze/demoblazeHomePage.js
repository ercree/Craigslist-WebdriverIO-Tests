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


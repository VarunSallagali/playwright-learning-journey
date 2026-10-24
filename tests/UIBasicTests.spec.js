const {test} = require('@playwright/test');

test('Browser Launch',async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.instagram.com/");

});
test('Page based Launch',async ({page})=>
{
    await page.goto("https://github.com/");

});
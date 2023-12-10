const {test, expect} = require('@playwright/test')
const { Common } = require('../../src/common/common')
const data = require('../../src/data/data.json')

test.describe('Sellia Interview - TC03 - Empty Spam folder',()=>{

    const common = new Common()

    test('TC03/STEP01 - Empty spam folder', async({page})=>{
        await page.goto(data.URL.GMAIL)
        const homePage = await common.logInProcess(page)
        await homePage.clickMoreButton().click()
        await homePage.clickSpamButton().click()
        await homePage.emptySpamFolderButton().click()
        await homePage.clickDeleteSpamOkButton().click()
        await expect(page.getByRole('cell', { name: 'Hooray, no spam here!' })).toBeVisible();
        
        /*
        await page.getByRole('navigation').getByRole('button', { name: 'More' }).click();
        await page.getByLabel('Spam 1 unread').click();
        await page.getByRole('button', { name: 'Delete all spam messages now' }).click();
        await page.getByRole('button', { name: 'OK' }).click();
        
        */



    })
})
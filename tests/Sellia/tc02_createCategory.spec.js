const {test, expect} = require('@playwright/test')
const { Common } = require('../../src/common/common')
const data = require('../../src/data/data.json')

test.describe('Sellia Interview - TC02 - Create category',()=>{

    const common = new Common()

    test('TC02/STEP01 - Create new label', async({page})=>{
        await page.goto(data.URL.GMAIL)
        const homePage = await common.logInProcess(page)
        await homePage.createNewLabelButton()
        await homePage.enterLabelName(data.TEXT.NEWLABEL)
        await homePage.clickCreateLabelButton().click()
        await expect(page.getByLabel('testing has menu')).toBeVisible();
    })
})
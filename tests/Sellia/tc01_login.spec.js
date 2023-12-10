const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../../src/pom/LoginPage')
const { HomePage } = require('../../src/pom/HomePage')
const { Common } = require('../../src/common/common')
const data = require('../../src/data/data.json')

test.describe('Sellia Interview - TC01 - Inbox actions',()=>{

    const common = new Common()

    test('TC01/STEP01 - Login as registered user', async({page})=>{
        await page.goto(data.URL.GMAIL)
        const homePage = await common.logInProcess(page)
        await expect(homePage.page).toHaveURL(new RegExp(`.+${data.TEXT.INBOXURL}`))
    })

    
})
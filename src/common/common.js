const { LoginPage } = require('../pom/LoginPage')
const { HomePage } = require('../pom/HomePage')
const data = require('../data/data.json')

class Common{

    /**
    @param {import('@playwright/test').Page} page
    */

    constructor(){
    }
    
    async newWindow(page){
        const newPagePromise = page.waitForEvent('popup')
        const newPage = await newPagePromise
        await newPage.bringToFront()
        return newPage
    }

    async logInProcess(page){
        const loginPage = new LoginPage(page)
        await loginPage.usernameTextInput().fill(data.TEXT.USER_ACCOUNT)
        await loginPage.nextButton().click()
        await loginPage.passwordTextInput().fill(data.TEXT.PASSWORD)
        await loginPage.nextButton().click()
        const homePage = new HomePage(page)
        return homePage
    
    }
}

module.exports = { Common }
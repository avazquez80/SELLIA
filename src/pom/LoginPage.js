class LoginPage{

    /**
    @param {import('@playwright/test').Page} page
    */

    constructor(page){
        this.page = page
    }
    /**
     * 
     * @returns User name textbox locator
     */
    usernameTextInput(){
        return this.page.locator('input[type="email"]')
    }
    /**
     * 
     * @returns Next button locator
     */
    nextButton(){
        return this.page.getByRole('button', { name: 'Next' })
    }
    /**
     * 
     * @returns Password input text locator
     */
    passwordTextInput(){
        return this.page.locator('input[type="password"]') 
    }



}

module.exports = { LoginPage }
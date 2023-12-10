const {expect} = require('@playwright/test')

class HomePage{

    /**
    @param {import('@playwright/test').Page} page
    */

    constructor(page){
        this.page = page
    }
    /**
     * 
     * @returns main menu create new label button locator
     */
    async createNewLabelButton(){
        await expect(this.page.getByRole('button', { name: 'Create' })).toBeVisible()
        await this.page.getByRole('button', { name: 'Create' }).click()
    }
    /**
     * @returns new label name text box locator
     */
    async enterLabelName(text){
        await expect(this.page.getByLabel('Please enter a new label name:')).toBeVisible();
        await this.page.getByLabel('Please enter a new label name:').click();
        await this.page.getByLabel('Please enter a new label name:').fill(text);
    }
    /**
     * 
     * @returns create new label button locator
     */
    clickCreateLabelButton(){
        return this.page.getByRole('button', { name: 'Create' })
    }
    /**
     * 
     * @returns expand more button locator
     */
    clickMoreButton(){
        return this.page.getByRole('navigation').getByRole('button', { name: 'More' })
    }
    /**
     * 
     * @returns click on spam link button
     */
    clickSpamButton(){
        return this.page.getByLabel('Spam')
    }
    /**
     * 
     * @returns click on empty spam folder button locator
     */
    emptySpamFolderButton(){
        return this.page.getByRole('button', { name: 'Delete all spam messages now' })
    }
    /**
     * 
     * @returns click Ok button to confirm spam deletion locator
     */
    clickDeleteSpamOkButton(){
        return this.page.getByRole('button', { name: 'OK' })
    }
}

module.exports = {HomePage}
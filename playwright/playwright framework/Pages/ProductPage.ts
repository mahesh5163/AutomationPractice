import {test, expect, Page} from '@playwright/test';
import{productPageLocators} from '../Locators/ProductPageLocators'

export class ProductPage {
    constructor(private page:Page) {}
    async logout() {
        await this.page.click(productPageLocators.settingIcon);
        await this.page.click(productPageLocators.logoutLink);
    }
    async openAboutPage() {
        await this.page.click(productPageLocators.settingIcon);
        await this.page.click(productPageLocators.aboutLink);
    }
    async validateProductDetails() {
        //$$ mennas it is the list of the product name
        const productNames = await this.page.$$(productPageLocators.productNames);
        const productDescriptions = await this.page.$$(productPageLocators.productDescription);
        const productPrices = await this.page.$$(productPageLocators.productPrices);
        if(productNames.length==0){
            throw new Error("No products found on the page");
        
        }
        if(productNames.length !== productDescriptions.length || productNames.length !== productPrices.length){
            throw new Error("Mismatch in the number of products, descriptions, or prices")
        }
       

    }
     async addFirstProductToCart() {
            await this.page.click(productPageLocators.addToCartButtons);
        }
        async AddAllProductsToCart() {
            const addToCartButtons = await this.page.$$(productPageLocators.addToCartButtons);
            for (const button of addToCartButtons) {
                await button.click();
            }
}
}
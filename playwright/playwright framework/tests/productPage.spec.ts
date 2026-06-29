import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { loginLocators } from "../Locators/LoginLocators";
import { productPageLocators } from "../Locators/ProductPageLocators";
import { BASE_URL, USERNAME, PASSWORD } from "../utils/envConfig";
import { ProductPage } from "../Pages/ProductPage";


test.describe("Product Page Validation", () => {

    let loginPage: LoginPage;
    let productPage: ProductPage;


    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);

        await page.goto(BASE_URL);

        await loginPage.login(USERNAME, PASSWORD);

        await expect(page).toHaveURL(
            "https://www.saucedemo.com/inventory.html"
        );
    });


    test("Validate Logout functionality", async ({ page }) => {

        await productPage.logout();

        await expect(
            page.locator(loginLocators.loginButton)
        ).toBeVisible();

    });


    test("Validate About page and navigate back", async ({ page }) => {

        await productPage.openAboutPage();

        await expect(
            page.locator(productPageLocators.requestDemoBtn)
        ).toBeVisible();

        await expect(
            page.locator(productPageLocators.tryifreeButton)
        ).toBeVisible();

        await page.goBack();

        await expect(
            page.locator(productPageLocators.settingIcon)
        ).toBeVisible();

    });


    test.only("Validate Product Details", async ({ page }) => {

        await productPage.validateProductDetails();

        await productPage.addFirstProductToCart();

        await productPage.AddAllProductsToCart();

    });

});
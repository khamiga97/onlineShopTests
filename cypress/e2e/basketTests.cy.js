import HomePage from "../page-objects/homePage";
import CartPage from "../page-objects/cartPage";

describe('Adding product to the basket', () => {

const homePage = new HomePage();
const cartPage = new CartPage();

    it('Adding product to the basket', () => {
        homePage.visitHomePage()
        homePage.addProductToCart()
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart()
        cartPage.removeItemFromCart()
        cartPage.checkThatCartIsEmpty()

    })
})
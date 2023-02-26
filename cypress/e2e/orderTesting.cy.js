import HomePage from "../page-objects/homePage";
import CartPage from "../page-objects/cartPage";
import OrderPage from "../page-objects/orderPage";



describe('my first scenario', () => {
    const homePage = new HomePage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();


    it('should order the product from the shop', function() {
        homePage.visitHomePage()
        homePage.addProductToCart()
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart()
        cartPage.clickGoToThePaymentsButton()
        orderPage.fillAllRequiredFields()
        orderPage.clickOrderFinishButton()
        orderPage.checkOrderFinished()
    })
})
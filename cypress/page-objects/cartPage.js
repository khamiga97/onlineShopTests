import { randomCloth } from "./homePage"
import { products } from "../fixtures/products"
const productName = '.product-name'
const removeItemButton = '.remove'
const emptyCartAlert = '.cart-empty.woocommerce-info'
const goToPaymentsButton = '.wc-proceed-to-checkout'

class CartPage {

    checkThatAddedProductIsInCart() {
        cy.get(productName).contains(products[randomCloth].Name).should('exist')
    }

    removeItemFromCart() {
        cy.get(removeItemButton).click()
    }

    checkThatCartIsEmpty() {
        cy.get(emptyCartAlert).should('exist')
    }

    clickGoToThePaymentsButton() {
        cy.get(goToPaymentsButton).click()
    }

}

export default CartPage;
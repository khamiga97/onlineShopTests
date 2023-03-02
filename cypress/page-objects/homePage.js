import { products } from "../fixtures/products"

const myAccountButton = '#menu-item-100'
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]' 
const checkCartFromProductLevel = '.added_to_cart.wc-forward'

function getRandom(min, max) {
    const floatRandom = Math.random()
  
    const difference = max - min
  
    // random between 0 and the difference
    const random = Math.round(difference * floatRandom)
  
    const randomWithinRange = random + min
  
    return randomWithinRange
  }
  
  export var randomCloth = getRandom(0, 2);

class HomePage {



    clickMyAccountButton() {
        cy.get(myAccountButton).click()
    }

    addProductToCart() {
        cy.get(dataBlockNameNew).within(() => {
            cy.get(products[randomCloth].Locator).click()
        })
    }

    clickGoToCartFromProductButton() {
        cy.get(dataBlockNameNew).within(() => {
            cy.get(checkCartFromProductLevel).click()
        })
    }

    visitHomePage() {
        const url = '/'
        cy.visit(url)
    }
}

export default HomePage;
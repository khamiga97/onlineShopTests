import { faker } from "@faker-js/faker";
import { randomCloth } from "./homePage";
import { products } from "../fixtures/products";

const firstNameField = '#billing_first_name'
const lastNameField = '#billing_last_name'
const countryDropdown = '#billing_country'
const addressField = '#billing_address_1'
const postalCodeField = '#billing_postcode'
const cityField = '#billing_city'
const phoneField = '#billing_phone'
const emailField = '#billing_email'
const finishOrderButton = '#place_order'
const countryDropdownPoland = 'Polska'
const orderedProductName = '.woocommerce-table__product-name.product-name'

class OrderPage {

    fillAllRequiredFields() {
        cy.get(firstNameField).type(faker.name.firstName())
        cy.get(lastNameField).type(faker.name.lastName())
        cy.get(countryDropdown).select(countryDropdownPoland, { force:true})
        cy.get(addressField).type(faker.address.streetAddress())
        cy.get(postalCodeField).type(faker.address.zipCode('##-###'))
        cy.get(cityField).type(faker.address.city())
        cy.get(phoneField).type(faker.phone.number('+48#########'))
        cy.get(emailField).type(faker.internet.email())
    }

    clickOrderFinishButton() {
        cy.get(finishOrderButton).click()
    }
     checkOrderFinished() {
         cy.get(orderedProductName, {timeout: 20000}).should('contain', products[randomCloth].Name)
    }
  

}

export default OrderPage;
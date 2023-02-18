const myAccountButton = '#menu-item-100'

class HomePage {

    clickMyAccountButton() {
        cy.get(myAccountButton).click()
    }

    visitHomePage() {
        const url = '/'
        cy.visit(url)
    }
}

export default HomePage;
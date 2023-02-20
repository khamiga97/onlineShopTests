import HomePage from "../page-objects/homePage";
import AccountPage from "../page-objects/myAccountPage";
import { faker } from "@faker-js/faker";

describe('my first scenario', () => {
    const homePage = new HomePage();
    const accountPage = new AccountPage();

  before(function () {
    cy.fixture('users').then(function(users) {
      this.userData = users;
    });
  });

  it('should login to the application', function () {
    homePage.visitHomePage()
    homePage.clickMyAccountButton()
    accountPage.fillUsernameFieldWithEmail(this.userData.email)
    accountPage.fillPasswordField(this.userData.password)
    accountPage.clickLoginButton()
    accountPage.checkMyAccountNavigationVisibility()
  });

 //before(() => {
 // cy.clearAllCookies()
//})

    it('should not login to the application', () => {
      homePage.visitHomePage()
      homePage.clickMyAccountButton()
      accountPage.fillUsernameFieldWithEmail(faker.internet.email())
      accountPage.fillPasswordField(faker.internet.password())
      accountPage.clickLoginButton()
      accountPage.checkVisibilityOfErrorAfterWrongLogin()
    })








})
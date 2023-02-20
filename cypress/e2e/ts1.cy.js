import HomePage from "../page-objects/homePage";
import AccountPage from "../page-objects/myAccountPage";

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
  });

    it('should not login to the application', () => {

    })








})
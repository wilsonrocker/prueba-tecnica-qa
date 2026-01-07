class CheckoutPage {
  elements = {
    checkoutBtn: () => cy.get('[data-test="checkout"]'),
    firstName: () => cy.get('[data-test="firstName"]'),
    lastName: () => cy.get('[data-test="lastName"]'),
    postalCode: () => cy.get('[data-test="postalCode"]'),
    continueBtn: () => cy.get('[data-test="continue"]'),
    finishBtn: () => cy.get('[data-test="finish"]'),
    completeHeader: () => cy.get('.complete-header')
  }

  proceedToCheckout() {
    this.elements.checkoutBtn().click();
  }

  fillInformation(name, lastname, zip) {
    this.elements.firstName().type(name);
    this.elements.lastName().type(lastname);
    this.elements.postalCode().type(zip);
    this.elements.continueBtn().click();
  }

  finishOrder() {
    cy.url().should('include', '/checkout-step-two.html');
    this.elements.finishBtn().click();
  }

  validateSuccessMessage() {
    this.elements.completeHeader().should('have.text', 'Thank you for your order!');
  }
}
export const checkoutPage = new CheckoutPage();
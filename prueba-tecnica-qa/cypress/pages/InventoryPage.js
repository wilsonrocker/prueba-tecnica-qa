class InventoryPage {
  elements = {
    backpackBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    bikeLightBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
    cartBadge: () => cy.get('.shopping_cart_badge'),
    cartLink: () => cy.get('.shopping_cart_link'),
    cartItems: () => cy.get('.cart_item')
  }

  validatePageLoad() {
    cy.url().should('include', '/inventory.html');
  }

  addProductsToCart() {
    this.elements.backpackBtn().click();
    this.elements.bikeLightBtn().click();
  }

  validateCartCount(number) {
    this.elements.cartBadge().should('have.text', number);
  }

  goToCart() {
    this.elements.cartLink().click();
  }

  validateCartItems(number) {
    cy.url().should('include', '/cart.html');
    this.elements.cartItems().should('have.length', number);
  }
}
export const inventoryPage = new InventoryPage();
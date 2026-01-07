import { loginPage } from '../pages/LoginPage';
import { inventoryPage } from '../pages/InventoryPage';
import { checkoutPage } from '../pages/CheckoutPage';

describe('Prueba E2E - Opción 2: SauceDemo con POM', () => {
  let data;

  before(() => {
    // Cargamos los datos del JSON
    cy.fixture('sauceUsers').then((users) => {
      data = users;
    });
  });

  beforeEach(() => {
    cy.intercept('POST', '**/*.backtrace.io/**', { statusCode: 200, body: {} });
    loginPage.visit();
  });

  it('Debe completar el flujo de compra correctamente', () => {
    // 1. Autenticación 
    loginPage.login(data.user.username, data.user.password);
    inventoryPage.validatePageLoad();

    // 2. Agregar productos
    inventoryPage.addProductsToCart();
    inventoryPage.validateCartCount('2');

    // 3. Visualizar carrito
    inventoryPage.goToCart();
    inventoryPage.validateCartItems(2);

    // 4. Checkout
    checkoutPage.proceedToCheckout();
    checkoutPage.fillInformation(data.client.name, data.client.lastname, data.client.zip);

    // 5. Finalizar compra
    checkoutPage.finishOrder();
    checkoutPage.validateSuccessMessage();
  });
});
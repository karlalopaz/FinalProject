$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addToCart.feature");
formatter.feature({
  "name": "Cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add products to the cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Walmart",
  "keyword": "Given "
});
formatter.match({
  "location": "LandingStepDef.iNavigateToWalmart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a product name in the search bar",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStepDef.iEnterAProductNameInTheSearchBar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the product",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStepDef.iSelectTheProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the product data",
  "keyword": "And "
});
formatter.match({
  "location": "ProductStepDef.iVerifyTheProductData()"
});
formatter.result({
  "error_message": "java.lang.Exception: No cargo el producto\r\n\tat com.walmart.pages.ProductPage.validarProducto(ProductPage.java:38)\r\n\tat com.walmart.steps.ProductStepDef.iVerifyTheProductData(ProductStepDef.java:22)\r\n\tat ✽.I verify the product data(file:src/test/resources/features/addToCart.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I add the product into the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductStepDef.iAddTheProductIntoTheCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/verifyCart.feature");
formatter.feature({
  "name": "Verify Cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify products in the cart and delete one",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in the Cart Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CartStepDef.iAmInTheCartPage()"
});
formatter.result({
  "error_message": "java.lang.Exception: No cargo el producto\r\n\tat com.walmart.pages.ProductPage.validarProducto(ProductPage.java:38)\r\n\tat com.walmart.steps.CartStepDef.iAmInTheCartPage(CartStepDef.java:26)\r\n\tat ✽.I am in the Cart Page(file:src/test/resources/features/verifyCart.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I see the list of products",
  "keyword": "When "
});
formatter.match({
  "location": "CartStepDef.iSeeTheListOfProducts()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can delete the product",
  "keyword": "Then "
});
formatter.match({
  "location": "CartStepDef.iCanDeleteTheProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});
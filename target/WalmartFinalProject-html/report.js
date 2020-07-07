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
formatter.step({
  "name": "I navigate to Walmart",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I enter a product name in the search bar",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I select the product",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I verify the product data",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I add the product into the cart",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
Feature: Cart

  Scenario: Add products to the cart
    Given I navigate to Walmart
    When I enter a product name in the search bar
    And I select the product
    And I verify the product data
    Then I add the product into the cart
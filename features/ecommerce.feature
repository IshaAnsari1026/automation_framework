Feature: E-Commerce Application

  Scenario: Add Product To Cart
    Given user is logged in
    When user opens products page
    And user adds a product to cart
    Then product should be added successfully

Scenario: Verify Product In Cart
    Given user has added a product to cart
    When user opens cart page
    Then product should be visible in cart

Scenario: Remove Product From Cart
    Given user has a product in cart
    When user removes the product
    Then product should be removed successfully

Scenario: Verify Out Of Stock Product

  Given user is on products page
  When user tries to add an out of stock product
  Then an unavailable product message should be displayed

Scenario: Checkout Product

  Given user has a product in cart
  When user proceeds to checkout
  And user enters valid checkout details
  Then checkout should be completed successfully

Scenario: Place Order

  Given user has completed checkout
  When user places the order
  Then order should be placed successfully

Scenario: Verify Order History

  Given user has placed an order
  When user opens My Orders page
  Then ordered product should be visible in order history
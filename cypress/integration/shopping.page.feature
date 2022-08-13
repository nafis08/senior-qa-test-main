Feature: User shopping test

  Background:
    Given User goes to the login page
    And User is on the login page

  @example-test
  Scenario: User is shopping from wishlist
    When I accept the cookie policy by clicking the accept all cookies button
#    When I click the login button
#    Then I am on the login page
    When I type "test_e2e@gmail.com" into the username field
    And I type "Test_e2e@123" into the login password field
    And I click the login submit button
    Then I am on the main page
    When I want to search for "bed"
    And I type my search term into the search input field and hit enter
    Then I am on the search page
    When I click the first wish
    And I click the second wish
    And I click the third wish
    And I click the fourth wish
    And I click the fifth wish
    When I want to scroll to wishlist button
    Then I am on the wishlist page
#    And I can see 5 wishlist items
    When I type "10267" into the zipcode input
    And I click the add to basket
    Then I am on the basket page

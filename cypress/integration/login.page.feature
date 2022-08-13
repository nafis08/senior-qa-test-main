Feature: main page example

  Background:
    Given User goes to the main page
    And User is on the main page

  @example-test
  Scenario Outline: User is logging in
    When I accept the cookie policy by clicking the accept all cookies button
    When I click the login button
    Then I am on the login page
    When I type <loginEmailID> into the loginEmail field
    And I type <password> into the login password field
    And I click the login submit button
    Then I am on the main page
    And I click the your account button

    Examples:
    | loginEmailID | password |
    | test_e2e@gmail.com | Test_e2@123|
    | test_e2e@gmail.com | Test_e2e@123|
    | hell.berten@gmail.com | Password@123 |
    | rohn.jordan@gmail.com | Password@123 |
    | simple.tree@gmail.com | Password@123 |
    | rick.martin@gmail.com | Password@123 |
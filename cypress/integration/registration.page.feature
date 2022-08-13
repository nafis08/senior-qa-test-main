Feature: Test to register an user successfully

  Background:
    Given User goes to the main page
    And User is on the main page

  @example-test
  Scenario Outline: User is registering
    When I accept the cookie policy by clicking the accept all cookies button
    When I click the login button
    Then I am on the login page
    When I click the register button
    Then I am on the registration page
    When I want to select "Herr"
    Then I make my selection into the salutation
    And I type <firstName> into the first name
    And I type <lastName> into the last name
    And I type <emailID> into the emailID field
    And I type <password> into the password field
    And I type <password> into the password repeat field
    And I click the first tick
    And I click the second tick
    And I click the register submit button
    Then I am on the main page


    Examples:

    | firstName | lastName | emailID | password |
    | Hell      | berten   | hell.berten@gmail.com | Password@123 |
    | Rohn      | Jordan   | rohn.jordan@gmail.com | Password@123 |
    | Simple      | Tree   | simple.tree@gmail.com | Password@123 |
    | Rick      | Martin   | rick.martin@gmail.com | Password@123 |


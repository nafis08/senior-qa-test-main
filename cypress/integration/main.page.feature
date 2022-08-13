Feature: main page example

  Background:
    Given User goes to the main page
    And User is on the main page

  @example-test
  Scenario: User can search for products over the search function
    When I accept the cookie policy by clicking the accept all cookies button
    When I want to search for "kissen berlin"
    And I type my search term into the search input field and hit enter
    Then I am on the search page
    And I can see that the search bar contains my search term
    And I can see 7 result list view elements in the result list view



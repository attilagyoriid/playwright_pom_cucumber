Feature: User Login tests

  Background:
    Given User navigates to the application
    And User click on Sign in

  Scenario: Login success
    And User at Customer Login view
    And User enter username: "gyoriattila@yahoo.com"
    And User enter password: "Valami1212"
    When User click on login button
    Then Login should be success

  Scenario: Login fail
    And User at Customer Login view
    Given User enter username: "gyoriattila@yahoo.com_fail"
    Given User enter password: "password_fail"
    When User click on login button
    But Login should fail

Feature: User Login tests

  Background:
    Given User navigates to the application
    And User expand form layout on sidebar

  Scenario: Grid Form Fill
    When User enter username: "Attila Gyori" and password: "Password" and select option: "Option 2" and press Submit button
    Then Username input field has value: "Attila Gyori"
    And Password input field has value: "Password"
    And Option: "Option 2" is selected

  @regression
  Scenario Outline: Inline Form Fill
    When User enter username: "<NAME>" and email: "<EMAIL>" and remeber me is: "<REMEMBER_CHECKED>"
    Then Fullname input field has value: "<NAME>"
    And Email input field has value: "<EMAIL>"
    And Remember me is "<REMEMBER_CHECKED>"

    Examples:
    | NAME            | EMAIL                     | REMEMBER_CHECKED          | 
    | Attila Gyori    | gyoriattila@yahoo.com     | true  |
    | Gyori Attila    | attila.gyori.id@gmail.com | false |

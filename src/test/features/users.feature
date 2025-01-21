Feature: Validate the Add/Edit users and Manage Roles

    Background:
        Given User navigates to the test application
        Then User logs into the application
        Then User navigates to the Users page

    Scenario: Validate the table record for an exisitng admin user on the Users Page
        When User searches for the user with email 'tranquilriver12@canimmunize.ca'
        Then User validates table header
            | 1 | Last Name     |
            | 2 | First Name    |
            | 3 | Email         |
            | 4 | Active        |
            | 5 | Role          |
            | 6 | Organizations |
        Then User validates table values
            | 1 | River                                  |
            | 2 | Tranquil                               |
            | 3 | tranquilriver12@canimmunize.ca         |
            | 4 | Active                                 |
            | 5 | Console User Manager, Super Admin      |
            | 6 | Riverbend Pharmacy, SwiftCare Pharmacy |


    Scenario: Create a new user and validate the details on creation
        When User clicks the 'New User' button
        When User enters the new user details
            | First Name   | Aseem                                                                            |
            | Last Name    | Gupta                                                                            |
            | Email        | email                                                                            |
            | Role         | Clinic Owner, Super Admin                                                        |
            | Organization | Riverbend Pharmacy - Riverbend Pharmacy, SwiftCare Pharmacy - SwiftCare Pharmacy |
        And User clicks the Save button
        Then User validates the success message 'User successfully created with password.'
        And User stores the password
        And User clicks the 'OK' button
        Then User redirects to Users page
        When User searches for the user with email 'FromMap'
        Then User validates table values
            | 1 | Gupta                                  |
            | 2 | Aseem                                  |
            | 3 | FromMap                                |
            | 4 | Active                                 |
            | 5 | Clinic Owner, Super Admin              |
            | 6 | Riverbend Pharmacy, SwiftCare Pharmacy |

    Scenario: Edit an existing user and validate the updated details
        When User searches for the user with email 'FromMap'
        And User clicks on the user from the search results
        Then User Details page is displayed
        When User clicks the 'Edit' button
        Then User validates active modal
        When User updates the details
            | First Name | AseemEdited |
            | Last Name  | GuptaEdited |
        And User clicks the Save button
        Given User clicks the back button
        When User searches for the user with email 'FromMap'
        Then User validates table values
            | 1 | GuptaEdited                            |
            | 2 | AseemEdited                            |
            | 3 | FromMap                                |
            | 4 | Active                                 |
            | 5 | Clinic Owner, Super Admin              |
            | 6 | Riverbend Pharmacy, SwiftCare Pharmacy |

    Scenario: Add a new role to an existing user
        When User searches for the user with email 'FromMap'
        And User clicks on the user from the search results
        Then User Details page is displayed
        Then User clicks the 'Add Role' button
        Then User validates active modal
        And User search for a role 'Healthcare Provider'
        Then User clicks the 'Add to User' button
        Then User validates the success message 'successfully added'
        Then User clicks the 'Done' button
        Then User Details page is displayed
        Given User clicks the back button
        When User searches for the user with email 'FromMap'
        Then User validates table values
            | 1 | GuptaEdited                                    |
            | 2 | AseemEdited                                    |
            | 3 | FromMap                                        |
            | 4 | Active                                         |
            | 5 | Clinic Owner, Healthcare Provider, Super Admin |
            | 6 | Riverbend Pharmacy, SwiftCare Pharmacy         |

    Scenario: Remove a role of an existing user
        When User searches for the user with email 'FromMap'
        And User clicks on the user from the search results
        Then User Details page is displayed
        Then User removes the role 'Clinic Owner'
        Then User validates the success message 'Organization admin user was successfully removed from the organization.'
        Given User clicks the back button
        When User searches for the user with email 'FromMap'
        Then User validates table values
            | 1 | GuptaEdited                            |
            | 2 | AseemEdited                            |
            | 3 | FromMap                                |
            | 4 | Active                                 |
            | 5 | Healthcare Provider, Super Admin       |
            | 6 | Riverbend Pharmacy, SwiftCare Pharmacy |
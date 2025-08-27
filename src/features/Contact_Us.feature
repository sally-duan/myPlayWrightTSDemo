Feature: WebdriverUniversity.com - Contact Us Page
    Scenario: Valid Contact Us Form Submission using specific data
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to the new browser tab
        And I type a specific first name "Sally"
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


    Scenario: Valid Contact Us Form Submission using random data from chance js
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to the new browser tab
        And I type a specific firstname "awesome_sally"
        And I type a random last name
        And I enter a random email address
        And I type a random comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


    Scenario: invalid Contact Us Form Submission
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to the new browser tab
        And I type a first name
        And I type a last name
        # And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should not be presented with a successful contact us submission message
Feature: WebdriverUniversity.com - Contact Us Page
    # Scenario: Valid Contact Us Form Submission
    #     Given I navigate to the webdriveruniversity homepage
    #     When I click on the contact us button
    #     and I switch to the new browser tab

    #     And I type a first name
    #     And I type a last name
    #     And I enter an email address
    #     And I type a comment
    #     And I click on the submit button
    #     Then I should be presented with a successful contact us submission message


    Scenario: Valid Contact Us Form Submission using random data from faker.js
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        and I switch to the new browser tab

        And I type a random first name
        And I type a randomlast name
        And I enter a random  email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message
# Banking_demo
Automating a Banking demo site using Playwright

## Opening a bank account for a client:

- In order to open a account, you need to add a customer first. 
- Piet Block was added successfully and opened account

## Delete customer account 

- Go to Bank manager login to delete the customer account

## Check customer balance:

- Login in as a customer to check Balance

## Deposit money into customer account 


## Withdrawal from account

- Withdraw money from customer account and verify that the money was deducted 

## Continuous Integration (CI)

This project uses GitHub Actions to automatically run tests whenever code is pushed or a pull request is created.

## Continuous Deployment (CD)

I extended the pipeline by adding a Continuous Deployment (CD) step to automatically publish test results.

## Cross-Browser Testing (Test Matrix)

To improve test coverage and simulate real-world usage, I implemented a test matrix in the CI pipeline.

The pipeline now runs tests across multiple browsers using a matrix strategy:
Chromium (Chrome)
Firefox
WebKit (Safari)

 Why this is important:

Users access banking systems from different browsers
Prevents browser-specific bugs
Improves reliability and quality of the application
Reflects real-world enterprise testing practices

## Transaction history

The test verifies navigation from the account dashboard to the transaction history page and confirms the presence of key table elements Date-Time, Amount, Transaction Type

This ensures the transaction data is displayed correctly and improves UI test coverage

Changes being made:

Updated the test title to reflect the actual user scenario being tested. This improves readability of test reports and provides clearer business context when reviewing results.

Strengthened assertions by validating that the transaction table contains actual data, not just visibility. This ensures the test fails if the table is empty or incorrect.
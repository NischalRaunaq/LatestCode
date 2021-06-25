$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyTest.feature");
formatter.feature({
  "line": 1,
  "name": "Guru99 Demo Page",
  "description": "",
  "id": "guru99-demo-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User tries to login to the demo page",
  "description": "",
  "id": "guru99-demo-page;user-tries-to-login-to-the-demo-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I submit username and password",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ],
      "line": 6
    },
    {
      "cells": [
        "mngr336606",
        "sydUjuh"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.LoginPage()"
});
formatter.result({
  "duration": 3787036600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.User_enters_correct_Credentials_to_LogIN_Maps(DataTable)"
});
formatter.result({
  "duration": 202057700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.LoggedIn()"
});
formatter.result({
  "duration": 588946600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Once logged IN user tries to Add a New Customer",
  "description": "",
  "id": "guru99-demo-page;once-logged-in-user-tries-to-add-a-new-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Click on New Customer Link",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enters value for all the required fields",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Clicks on the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "New Customer gets added",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.New_Customer()"
});
formatter.result({
  "duration": 364308400,
  "status": "passed"
});
formatter.match({
  "location": "NewCustomerSteps.New_Customer_Fields()"
});
formatter.result({
  "duration": 911062300,
  "status": "passed"
});
formatter.match({
  "location": "NewCustomerSteps.New_Customer_Submit()"
});
formatter.result({
  "duration": 538446000,
  "status": "passed"
});
formatter.match({
  "location": "NewCustomerSteps.New_Customer_Added()"
});
formatter.result({
  "duration": 60979100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User Edits the details of an already added Customer",
  "description": "",
  "id": "guru99-demo-page;user-edits-the-details-of-an-already-added-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Edit Customer Page is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Search for the Customer",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Edit the Details",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Customer\u0027s details gets updated",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.EditCustomerPage()"
});
formatter.result({
  "duration": 432701500,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.SearchCustomer()"
});
formatter.result({
  "duration": 444079300,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.EditCustomer()"
});
formatter.result({
  "duration": 607345500,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.Customer_Updated()"
});
formatter.result({
  "duration": 49027800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User Creates a new account for an already added Customer",
  "description": "",
  "id": "guru99-demo-page;user-creates-a-new-account-for-an-already-added-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "New Account Page is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Provide the Details",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Customer\u0027s account details gets updated",
  "keyword": "Then "
});
formatter.match({
  "location": "NewAccountSteps.NewAccountPage()"
});
formatter.result({
  "duration": 238446200,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.NewAccountForm()"
});
formatter.result({
  "duration": 633227400,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.CustomersAccount_Updated()"
});
formatter.result({
  "duration": 188250700,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Users Are Going To Enter Basic Details In Search Hotel Page",
  "description": "",
  "id": "users-are-going-to-enter-basic-details-in-search-hotel-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "user Login In The Web Application",
  "description": "",
  "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;user-login-in-the-web-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"\u003cUsername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cPassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button And It Navigate To Seacrch Hotel page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;user-login-in-the-web-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 10,
      "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;user-login-in-the-web-application;;1"
    },
    {
      "cells": [
        "hari",
        "1234"
      ],
      "line": 11,
      "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;user-login-in-the-web-application;;2"
    },
    {
      "cells": [
        "shiva",
        "23456"
      ],
      "line": 12,
      "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;user-login-in-the-web-application;;3"
    },
    {
      "cells": [
        "Jivita04",
        "123456"
      ],
      "line": 13,
      "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;user-login-in-the-web-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "user Login In The Web Application",
  "description": "",
  "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;user-login-in-the-web-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"hari\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"1234\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button And It Navigate To Seacrch Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 2743252700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hari",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 151957600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 82360100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button_And_It_Navigate_To_Seacrch_Hotel_page()"
});
formatter.result({
  "duration": 285570900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "user Login In The Web Application",
  "description": "",
  "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;user-login-in-the-web-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"shiva\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"23456\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button And It Navigate To Seacrch Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 316139300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shiva",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 91766500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23456",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 76300500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button_And_It_Navigate_To_Seacrch_Hotel_page()"
});
formatter.result({
  "duration": 228114400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user Login In The Web Application",
  "description": "",
  "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;user-login-in-the-web-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"Jivita04\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"123456\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button And It Navigate To Seacrch Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 220686600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jivita04",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 101063800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 83338300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button_And_It_Navigate_To_Seacrch_Hotel_page()"
});
formatter.result({
  "duration": 745579400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Selecting Types of Hotel And Type Of Rooms.",
  "description": "",
  "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;selecting-types-of-hotel-and-type-of-rooms.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "user Select The Location",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user Select The Hotels From The Drop Down",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user Select The Room Type From The Auto Suggestion Drop Down",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Can Choose The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Choose Adults Per Rooms By Drop Down",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Choose Children per Room",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Click The Search Button and It Navigate to Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Location()"
});
formatter.result({
  "duration": 298024400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Hotels_From_The_Drop_Down()"
});
formatter.result({
  "duration": 110573700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Room_Type_From_The_Auto_Suggestion_Drop_Down()"
});
formatter.result({
  "duration": 108251000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Can_Choose_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 102104300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Choose_Adults_Per_Rooms_By_Drop_Down()"
});
formatter.result({
  "duration": 116870900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Choose_Children_per_Room()"
});
formatter.result({
  "duration": 116599800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Search_Button_and_It_Navigate_to_Select_Hotel_Page()"
});
formatter.result({
  "duration": 425872000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Select The Hotel.",
  "description": "",
  "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;select-the-hotel.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Select The Radio Button",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user Click The Continue Button Page Should Redirected To Book A Hotel Page.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.select_The_Radio_Button()"
});
formatter.result({
  "duration": 167649800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Continue_Button_Page_Should_Redirected_To_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 556562500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Payment Detail page.",
  "description": "",
  "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;payment-detail-page.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "user Enter The \"Hari\" first Name And \"Haran\" Last Name.",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user Enter The \"AL Block Anna Nagar Chennai\" Billing Address",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Enter The \"1234567890123456\" Credit Card Number.",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Select The Credit card Type And Expiry Date.",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Enter 1234 The Cvv Number.",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Click The Book Now Button Page SHould Redirected To Booking Confirmation Page.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Hari",
      "offset": 16
    },
    {
      "val": "Haran",
      "offset": 38
    }
  ],
  "location": "StepDefinition.user_Enter_The_first_Name_And_Last_Name(String,String)"
});
formatter.result({
  "duration": 307057200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AL Block Anna Nagar Chennai",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_Billing_Address(String)"
});
formatter.result({
  "duration": 158746800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890123456",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_Credit_Card_Number(String)"
});
formatter.result({
  "duration": 124229200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Credit_card_Type_And_Expiry_Date()"
});
formatter.result({
  "duration": 2537993500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 11
    }
  ],
  "location": "StepDefinition.user_Enter_The_Cvv_Number(String)"
});
formatter.result({
  "duration": 131253400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Book_Now_Button_Page_SHould_Redirected_To_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 5118308400,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Booking verification Detail Page .",
  "description": "",
  "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;booking-verification-detail-page-.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "click The My Itinerary Button And Page should Redirected To Booked Itinerary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.click_The_My_Itinerary_Button_And_Page_should_Redirected_To_Booked_Itinerary_Page()"
});
formatter.result({
  "duration": 4354110600,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Select The Created Order Id.",
  "description": "",
  "id": "users-are-going-to-enter-basic-details-in-search-hotel-page;select-the-created-order-id.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "user Click The Order Id Check Box",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user Click The Logout Button And Page Will redirected To Logout Message page.",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "again User Click The Login Again Link, Page will redirected To Login Page.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Order_Id_Check_Box()"
});
formatter.result({
  "duration": 8892200000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Logout_Button_And_Page_Will_redirected_To_Logout_Message_page()"
});
formatter.result({
  "duration": 629580700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.again_User_Click_The_Login_Again_Link_Page_will_redirected_To_Login_Page()"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
});
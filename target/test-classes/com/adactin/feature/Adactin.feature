Feature: Users Are Going To Enter Basic Details In Search Hotel Page 

Scenario Outline: user Login In The Web Application 
	Given user Launch The Adactin Application 
	When user Enter The "<Username>" In Username Field 
	And user Enter The "<Password>" In Password Field 
	Then user Click The Login Button And It Navigate To Seacrch Hotel page 
	
Examples:
|Username| Password|
|hari | 1234|
|shiva| 23456|
|Jivita04| 123456|

Scenario: Selecting Types of Hotel And Type Of Rooms. 
	Given user Select The Location 
	When user Select The Hotels From The Drop Down 
	And user Select The Room Type From The Auto Suggestion Drop Down 
	And user Can Choose The Number Of Rooms 
	And user Choose Adults Per Rooms By Drop Down 
	And user Choose Children per Room 
	Then user Click The Search Button and It Navigate to Select Hotel Page 
	
Scenario: Select The Hotel. 
	Given Select The Radio Button 
	Then user Click The Continue Button Page Should Redirected To Book A Hotel Page. 
	
Scenario: Payment Detail page. 
	Given user Enter The "Hari" first Name And "Haran" Last Name. 
	When user Enter The "AL Block Anna Nagar Chennai" Billing Address
	And user Enter The "1234567890123456" Credit Card Number. 
	And user Select The Credit card Type And Expiry Date. 
	And user Enter 1234 The Cvv Number. 
	Then user Click The Book Now Button Page SHould Redirected To Booking Confirmation Page. 
	
Scenario: Booking verification Detail Page . 
	Then click The My Itinerary Button And Page should Redirected To Booked Itinerary Page 
	
Scenario: Select The Created Order Id. 
	Given user Click The Order Id Check Box 
	And user Click The Logout Button And Page Will redirected To Logout Message page. 
	Then again User Click The Login Again Link, Page will redirected To Login Page.
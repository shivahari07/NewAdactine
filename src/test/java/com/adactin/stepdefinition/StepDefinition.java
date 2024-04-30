package com.adactin.stepdefinition;

import java.util.List;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import com.adactin.runner.RunnerClass;

import cucumber.api.CucumberOptions;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StepDefinition {
	
	public static WebDriver driver=RunnerClass.driver;
	
	@Given("^user Launch The Adactin Application$")
	public void user_Launch_The_Adactin_Application() throws Throwable {
		driver.get("https://adactinhotelapp.com/");
	}

	@When("^user Enter The \"([^\"]*)\" In Username Field$")
	public void user_Enter_The_In_Username_Field(String Username) throws Throwable {
	  WebElement user= driver.findElement(By.id("username"));
	   user.sendKeys(Username);
	}

	@When("^user Enter The \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_In_Password_Field(String Password) throws Throwable {
	 WebElement pass=driver.findElement(By.id("password"));
	 pass.sendKeys(Password);
	}


	@Then("^user Click The Login Button And It Navigate To Seacrch Hotel page$")
	public void user_Click_The_Login_Button_And_It_Navigate_To_Seacrch_Hotel_page() throws Throwable {
		driver.findElement(By.id("login")).click();
	}
	
	@Given("^user Select The Location$")
	public void user_Select_The_Location() throws Throwable {
		WebElement location=driver.findElement(By.xpath("//select[@id='location']"));
        Select se= new Select(location);
		se.selectByIndex(4);
	}

	@When("^user Select The Hotels From The Drop Down$")
	public void user_Select_The_Hotels_From_The_Drop_Down() throws Throwable {
		WebElement hotel=driver.findElement(By.xpath("//select[@name='hotels']"));
        Select sd= new Select(hotel);
        sd.selectByValue("Hotel Cornice");
	}

	@When("^user Select The Room Type From The Auto Suggestion Drop Down$")
	public void user_Select_The_Room_Type_From_The_Auto_Suggestion_Drop_Down() throws Throwable {
		WebElement room=driver.findElement(By.xpath("//select[@id='room_type']"));
        Select ft= new Select(room);
        ft.selectByVisibleText("Deluxe");
        
	}

	@When("^user Can Choose The Number Of Rooms$")
	public void user_Can_Choose_The_Number_Of_Rooms() throws Throwable {
		 WebElement number=driver.findElement(By.xpath("//select[@name='room_nos']"));
	     Select fc= new Select(number);
	     fc.selectByValue("8");
	}

	@When("^user Choose Adults Per Rooms By Drop Down$")
	public void user_Choose_Adults_Per_Rooms_By_Drop_Down() throws Throwable {
		  WebElement adult=driver.findElement(By.xpath("//select[@name='adult_room']"));
	      Select fk= new Select(adult);
	      fk.selectByVisibleText("3 - Three");
	}

	@When("^user Choose Children per Room$")
	public void user_Choose_Children_per_Room() throws Throwable {
		 WebElement child=driver.findElement(By.xpath("//select[@name='child_room']"));
	     Select dd= new Select(child);
	     dd.selectByValue("2");
	}

	@Then("^user Click The Search Button and It Navigate to Select Hotel Page$")
	public void user_Click_The_Search_Button_and_It_Navigate_to_Select_Hotel_Page() throws Throwable {
		  driver.findElement(By.xpath("//input[@type='submit']")).click();
	}
	
	@Given("^Select The Radio Button$")
	public void select_The_Radio_Button() throws Throwable {
		  driver.findElement(By.xpath("//input[@id='radiobutton_0']")).click();
	}

	@Then("^user Click The Continue Button Page Should Redirected To Book A Hotel Page\\.$")
	public void user_Click_The_Continue_Button_Page_Should_Redirected_To_Book_A_Hotel_Page() throws Throwable {
		 WebElement cont= driver.findElement(By.xpath("//input[@type='submit']"));
		cont.click();
	}

	@Given("^user Enter The \"([^\"]*)\" first Name And \"([^\"]*)\" Last Name\\.$")
	public void user_Enter_The_first_Name_And_Last_Name(String firstData, String lastData) throws Throwable {
		WebElement first= driver.findElement(By.xpath("//input[@class='reg_input']"));
		first.sendKeys(firstData);
		WebElement second= driver.findElement(By.xpath("//input[@name='last_name']"));
		second.sendKeys(lastData);
	}

	@When("^user Enter The \"([^\"]*)\" Billing Address$")
	public void user_Enter_The_Billing_Address(String billaddress) throws Throwable {
		WebElement address= driver.findElement(By.xpath("//textarea[@class='txtarea']"));
		address.sendKeys(billaddress);
	}

	@When("^user Enter The \"([^\"]*)\" Credit Card Number\\.$")
	public void user_Enter_The_Credit_Card_Number(String number) throws Throwable {
		WebElement credit= driver.findElement(By.xpath("//input[@name='cc_num']"));
		credit.sendKeys(number);
		
	}

	@When("^user Select The Credit card Type And Expiry Date\\.$")
	public void user_Select_The_Credit_card_Type_And_Expiry_Date() throws Throwable {
		WebElement type= driver.findElement(By.xpath("//select[@name='cc_type']"));
		Select cardtype= new Select(type);
		List<WebElement> pp=cardtype.getOptions();
		Thread.sleep(2000);
		System.out.println("Enter total size"+pp.size());
		for (WebElement single : pp) {
			if(single.getText().equals("Master Card")) {
			single.click();
			break;
		}
	}	
		WebElement sdate= driver.findElement(By.xpath("//select[@name='cc_exp_month']"));
		Select sv= new Select(sdate);
		sv.selectByValue("5");
		
		WebElement year= driver.findElement(By.xpath("//select[@name='cc_exp_year']"));
		Select hh= new Select(year);
		hh.selectByVisibleText("2024");
	}

	@When("^user Enter (\\d+) The Cvv Number\\.$")
	public void user_Enter_The_Cvv_Number(String numer) throws Throwable {
		WebElement cvv= driver.findElement(By.xpath("//input[@name='cc_cvv']"));
		cvv.sendKeys(numer);
	}

	@Then("^user Click The Book Now Button Page SHould Redirected To Booking Confirmation Page\\.$")
	public void user_Click_The_Book_Now_Button_Page_SHould_Redirected_To_Booking_Confirmation_Page() throws Throwable {
		WebElement book= driver.findElement(By.xpath("//input[@name='book_now']"));
		book.click();
		Thread.sleep(5000);
	}

	@Then("^click The My Itinerary Button And Page should Redirected To Booked Itinerary Page$")
	public void click_The_My_Itinerary_Button_And_Page_should_Redirected_To_Booked_Itinerary_Page() throws Throwable {
		JavascriptExecutor js =(JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,1000)");
		
		WebElement my= driver.findElement(By.id("my_itinerary"));
		my.click();
	}

	@Given("^user Click The Order Id Check Box$")
	public void user_Click_The_Order_Id_Check_Box() throws Throwable {
		List<WebElement> cc= driver.findElements(By.xpath("//input[@type='checkbox' and contains(@value,'12')]"));
		System.out.println("How many check box are available"+cc.size());
		for (WebElement join : cc) {
			String ss=join.getAttribute("value");
			if(ss.equals("1218308") ||ss.equals("1228990")) {
				join.click();
			}
		}
		JavascriptExecutor js =(JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,3000)");
	
	}

	@Given("^user Click The Logout Button And Page Will redirected To Logout Message page\\.$")
	public void user_Click_The_Logout_Button_And_Page_Will_redirected_To_Logout_Message_page() throws Throwable {
		driver.findElement(By.xpath("//input[@name='logout']")).click();
	}

	@Then("^again User Click The Login Again Link, Page will redirected To Login Page\\.$")
	public void again_User_Click_The_Login_Again_Link_Page_will_redirected_To_Login_Page() throws Throwable {
	    
	}

}

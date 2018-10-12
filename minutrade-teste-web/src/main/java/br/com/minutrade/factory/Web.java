package br.com.minutrade.factory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * 
 * @author Ronaldo Silva
 *
 */
public enum Web implements WebApplication{
	
	
	CHROME_WINDOWS {

		@Override
		public WebDriver getDriver() {
			System.setProperty("webdriver.chrome.driver","chromedriver.exe");
			return new ChromeDriver();
		}
		
	},

}

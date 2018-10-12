package br.com.minutrade.commons;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import br.com.minutrade.factory.WebApplication;
public class BaseTest {
	
	
	protected static WebDriver webDriver;
	protected static AccountCredentials credentials;
	protected static WebDriverWait wait;
	
	protected void initializeWebApplication(WebApplication webApplication) {
		
		webDriver = webApplication.getDriver();
		webDriver.manage().window().fullscreen();
	}
	
	/**
	 * Define o usuário da aplicação.
	 * 
	 * @param credentials
	 */
	protected void setUserApplication(AccountCredentials credentials) {
		BaseTest.credentials = credentials;
	}
	
	/**
	 * fecha o browser após os testes serem finalizados
	 */
	public void closeDriver() {
		
		webDriver.quit();
	}
	

}

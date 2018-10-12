package br.com.minutrade.config;


import br.com.minutrade.commons.BaseTest;
import br.com.minutrade.commons.Credentials;
import br.com.minutrade.commons.SeleniumRobot;
import br.com.minutrade.factory.Web;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseTest{
	
	@Before(value="@chrome")
	public void beforeScenarioChrome() {
		
		System.out.println("Teste execução Hooks Web");
		initializeWebApplication(Web.CHROME_WINDOWS);
		setUserApplication(Credentials.ADMIN);
		
	}
	
	
	@After(value = "@chrome")
	public void afterScenarioWeb(Scenario scenario) {
		closeDriver();
		SeleniumRobot.generateEvidence(scenario);
	}

}

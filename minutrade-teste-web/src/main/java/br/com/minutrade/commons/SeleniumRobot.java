package br.com.minutrade.commons;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.Scenario;

/**
 * 
 * @author Ronaldo Silva
 *
 */
public class SeleniumRobot extends BaseTest {

	private static Alert alert;
	private static String message;
	private static WebDriverWait wait;
	private static File SrcFile;

	/**
	 * clica no alert do javascript
	 */
	public static String clickAlert() {

		try {
			Thread.sleep(5000);
			alert = webDriver.switchTo().alert();
			message = alert.getText();
			alert.accept();

		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return message;
	}

	/**
	 * espera o elemento aparecer na página
	 * 
	 * @param element
	 */
	public static void waitElementAppear(WebElement element) {

		wait = new WebDriverWait(webDriver, 10);
		wait.until(ExpectedConditions.visibilityOf(element));
	}

	/**
	 * espera durante 10 secons o elemento na página
	 */
	public static void implicityWait() {

		webDriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	/**
	 * tira prints dos testes
	 * 
	 * @param fileWithPath
	 * @throws Exception
	 */
	public static void takeSnapShot() {

		SrcFile = ((TakesScreenshot)webDriver).getScreenshotAs(OutputType.FILE);

	}

	public static void generateEvidence(Scenario scenario) {

		String destFile;
		try {
			switch (scenario.getStatus().toUpperCase()) {
			case "PASSED":
				destFile = "./passed";
				break;
			case "FAILED":
				destFile = "./failed";
				break;
			default:
				destFile = "./error";
				break;
			}

			 FileUtils.copyFile(SrcFile, new File( destFile +"/"+ scenario.getName() + ".png"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}

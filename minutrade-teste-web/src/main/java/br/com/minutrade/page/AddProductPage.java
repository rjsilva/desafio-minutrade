package br.com.minutrade.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * 
 * @author Ronaldo Silva
 *
 */
public class AddProductPage {
	
	@FindBy(id = "txtName")
	private WebElement inputName;
	
	@FindBy(id = "txtValue")
	private WebElement inputValue;
	
	@FindBy(id = "txtQuantity")
	private WebElement inputQuantity;
	
	@FindBy(xpath = "//a[contains(text(),'Save')]")
	private WebElement buttonSave;
	
	@FindBy(xpath = "//a[contains(text(),'Cancelar')]")
	private WebElement buttonCancel;
	

	public AddProductPage(WebDriver webDriver) {
		
		PageFactory.initElements(webDriver, this);
	}
	
	public WebElement getInputName() {
		return inputName;
	}


	public WebElement getInputValue() {
		return inputValue;
	}


	public WebElement getInputQuantity() {
		return inputQuantity;
	}


	public WebElement getButtonSave() {
		return buttonSave;
	}


	public WebElement getButtonCancel() {
		return buttonCancel;
	}

}

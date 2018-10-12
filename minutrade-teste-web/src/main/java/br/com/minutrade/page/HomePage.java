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
public class HomePage {
	
	@FindBy(xpath = "//h4[contains(text(),'Products:')]")
	private WebElement titlePage;

	@FindBy(xpath = "//a[contains(text(),'New product')]")
	private WebElement linkNewProduct;
	
	@FindBy(xpath = "//a[contains(text(),'Edit')]")
	private WebElement linkEdit;
	
	@FindBy(xpath = "//a[contains(text(),'Delete')]")
	private WebElement linkDelete;
	
	private String xpathProductList = "//div[@id=\"productsList\"]/div";
	
	private AddProductPage addProductPage;
	
	public HomePage(WebDriver webDriver) {
		
		this.addProductPage = new AddProductPage(webDriver);
		PageFactory.initElements(webDriver, this);
	}
	
	public WebElement getTitlePage() {
		return titlePage;
	}

	public WebElement getLinkNewProduct() {
		return linkNewProduct;
	}

	public WebElement getLinkEdit() {
		return linkEdit;
	}

	public WebElement getLinkDelete() {
		return linkDelete;
	}

	public String getXpathProductList() {
		return xpathProductList;
	}
	
	public AddProductPage getAddProductPage() {
		return addProductPage;
	}
	
}

package br.com.minutrade.funcionalidade;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import br.com.minutrade.commons.BaseTest;
import br.com.minutrade.commons.SeleniumRobot;
import br.com.minutrade.commons.Urls;
import br.com.minutrade.model.Product;
import br.com.minutrade.page.HomePage;

/**
 * 
 * @author Ronaldo Silva
 *
 */
public class ControleEstoqueFuncionalidade extends BaseTest {

	private HomePage homePage;
	private boolean flag;
	private String message;

	public ControleEstoqueFuncionalidade() {

		this.homePage = new HomePage(webDriver);
	}

	public void navegarAteHome() {

		webDriver.get(Urls.MINUTRADE_URL);
		webDriver.manage().window().maximize();
	}

	public String cadastrarProduto(Product product) {
		
		SeleniumRobot.waitElementAppear(homePage.getLinkNewProduct());
		
		this.homePage.getLinkNewProduct().click();
		this.homePage.getAddProductPage().getInputName().sendKeys(product.getName());
		this.homePage.getAddProductPage().getInputValue().sendKeys(product.getValue());
		this.homePage.getAddProductPage().getInputQuantity().sendKeys(product.getQuantity());
		SeleniumRobot.takeSnapShot();
		this.homePage.getAddProductPage().getButtonSave().click();
		message = SeleniumRobot.clickAlert();
		
		return message;
	}


	/**
	 * exclui o produto do estoque
	 */
	public void excluirProduto() {

		SeleniumRobot.waitElementAppear(homePage.getLinkDelete());
		this.homePage.getLinkDelete().click();
		SeleniumRobot.clickAlert();
		
	}

	/**
	 * valida se existe o produto cadastrada na lista de produtos
	 * 
	 * @param expectProduct
	 * @return
	 * @return
	 */
	public boolean existProduct(String expectProduct) {

		SeleniumRobot.waitElementAppear(homePage.getLinkEdit());
		
		List<WebElement> elements = webDriver.findElements(By.xpath(homePage.getXpathProductList()));
		int count = 0;
		SeleniumRobot.takeSnapShot();
		while (!flag && count <= elements.size()) {

			if (elements.get(count).getText().contains(expectProduct)) {

				flag = true;
			}
			
			count ++;
		}

		return flag;

	}

}

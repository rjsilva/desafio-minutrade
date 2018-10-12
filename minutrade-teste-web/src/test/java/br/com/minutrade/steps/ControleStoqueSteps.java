package br.com.minutrade.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import br.com.minutrade.funcionalidade.ControleEstoqueFuncionalidade;
import br.com.minutrade.model.Product;
import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class ControleStoqueSteps {

	private ControleEstoqueFuncionalidade controleEstoqueFuncionalidade;
	private Product product;
	private String expectProduct;
	private List<Product> produts;
	private String message;

	public ControleStoqueSteps() {

		this.controleEstoqueFuncionalidade = new ControleEstoqueFuncionalidade();
		this.product = new Product();
		this.produts = new ArrayList<>();
	}

	@Dado("^que estou na home de cadastro de produto$")
	public void queEstouNaHomeDeCadastroDeProduto() throws Throwable {

		this.controleEstoqueFuncionalidade.navegarAteHome();
	}

	@Quando("^cadastro um novo produto$")
	public void tentoCadastrarProdutoComOsValoresInvalidos(DataTable params) throws Throwable {

		produts = params.asList(Product.class);

		produts.forEach(p -> {
			System.out.println(p.getName());
			this.product.setName(p.getName());
			this.product.setValue(p.getValue());
			this.product.setQuantity(p.getQuantity());
			message = this.controleEstoqueFuncionalidade.cadastrarProduto(product);

		});

	}

	@Quando("^clico em deletar um produto$")
	public void clicoEmDeletarUmProduto() throws Throwable {

		this.controleEstoqueFuncionalidade.excluirProduto();

	}

	@Entao("^nao devo visualizar o produto mais na pagina do estoque$")
	public void naoDevoVisualizarOProdutoMaisNaPaginaDoEstoque() throws Throwable {
		
		assertTrue(controleEstoqueFuncionalidade.existProduct(product.getName()));
		
	}

	@Entao("^devo visualizar \"([^\"]*)\" de alerta de campos obrigatorios$")
	public void devoVisualizarDeAlertaDeCamposObrigatorios(String expectMessage) throws Throwable {

		assertEquals(message, expectMessage);

	}

	@Entao("^devo visualizar o produto na pagina do estoque$")
	public void oProdutoNaPaginaDoEstoque() throws Throwable {

		assertTrue(controleEstoqueFuncionalidade.existProduct(product.getName()));
	}

}

package br.com.minutrade.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;

import org.json.simple.JSONObject;

import com.fasterxml.jackson.databind.util.JSONPObject;

import br.com.minutrade.dto.Product;
import br.com.minutrade.functionality.ControleEstoqueProdutoFuncionalidade;
import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import io.restassured.response.Response;

/**
 * 
 * @author Ronaldo Silva
 *
 */
public class ControleStoqueSteps {

	private ControleEstoqueProdutoFuncionalidade registerProductFuncionalidade;
	private Response response;
	private Product product;

	public ControleStoqueSteps() {

		this.registerProductFuncionalidade = new ControleEstoqueProdutoFuncionalidade();
		this.product = new Product();

	}

	@Dado("^que faco uma requisicao POST/products com os parametros$")
	public void queFacoUmaRequisicaoPOSTProductsComOsParametros(DataTable params) throws Throwable {

		List<Product> products = params.asList(Product.class);
		JSONObject json = new JSONObject();
		products.forEach(p -> {
			json.put("name", p.getName());
			json.put("value", p.getValue());
			json.put("quantity", p.getQuantity());
		});

		this.registerProductFuncionalidade.postMapping(json);
	}

	@Dado("^que faco uma requisicao GET/products$")
	public void queFacoUmaRequisicaoGETProducts() throws Throwable {

		response = registerProductFuncionalidade.getMapping();

	}

	@Entao("^retorno dos produtos$")
	public void retornoDosProdutos() throws Throwable {

	}
	// response = this.listarProdutosFuncionalidade.getMapping();

	@Entao("^devo receber um status code '(\\d+)'$")
	public void devoReceberUmStatusCode(int code) throws Throwable {

		assertEquals(code, response.statusCode());
		System.out.println(response.statusCode());

	}

	@Entao("^retorno dos produtos registrado$")
	public void retornoProductsRegister() throws Throwable {

		String body = response.body().asString();
		assertTrue(body != null || body != "");
	}

	// String body = response.body().asString();
	// assertTrue(body.contains("Chocolate"));

}

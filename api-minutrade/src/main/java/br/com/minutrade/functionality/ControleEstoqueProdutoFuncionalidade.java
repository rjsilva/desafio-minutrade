package br.com.minutrade.functionality;

import org.json.simple.JSONObject;

import br.com.minutrade.config.EndPoint;
import br.com.minutrade.service.Http;
import io.restassured.RestAssured;
import io.restassured.config.EncoderConfig;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

/**
 * 
 * @author Ronaldo Silva
 *
 */
public class ControleEstoqueProdutoFuncionalidade extends Http<Response> {

	/**
	 * lista todos os produtos
	 */
	@Override
	public Response getMapping() {

		Response response = RestAssured.given()
				.config(RestAssured.config().encoderConfig(
						EncoderConfig.encoderConfig().encodeContentTypeAs("aplication/json", ContentType.JSON)))
				.when().baseUri(EndPoint.BASE_URL).get();

		return response;
	}

	@Override
	public Response postMapping(JSONObject product) {

		Response response = RestAssured.given()
				.config(RestAssured.config().encoderConfig(
						EncoderConfig.encoderConfig().encodeContentTypeAs("aplication/json", ContentType.JSON)))
				.when()
				.body(product).post(EndPoint.BASE_URL)
				.body()
				.as(Response.class);

		return response;
	}
}

package br.com.minutrade.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

/**
 * 
 * @author Ronaldo Silva
 *
 */
@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true, snippets = SnippetType.CAMELCASE, 
				plugin = {"pretty","html:target/cucumber.html"},
				features = { ".//src//test//resources//" }, 
				glue = {"br.com.minutrade.steps","br.com.minutrade.config"},
				tags = { "@CEP004" })
				
public class RunTest {


}
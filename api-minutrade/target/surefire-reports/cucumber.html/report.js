$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/controle-estoque/controle-estoque.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Author: Ronaldo silva"
    },
    {
      "line": 3,
      "value": "#Version: 1.0"
    },
    {
      "line": 4,
      "value": "#Encoding: UTF-8"
    }
  ],
  "line": 5,
  "name": "- Cadastrar produto no estoque da minutrade",
  "description": "",
  "id": "--cadastrar-produto-no-estoque-da-minutrade",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 8,
  "name": "CT001 - cadastrar produto no estoque",
  "description": "",
  "id": "--cadastrar-produto-no-estoque-da-minutrade;ct001---cadastrar-produto-no-estoque",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 7,
      "name": "@CPEAPI001"
    },
    {
      "line": 7,
      "name": "@Regressivo"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "que faco uma requisicao POST/products com os parametros",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "quantity"
      ],
      "line": 10
    },
    {
      "cells": [
        "coelho",
        "100",
        "10"
      ],
      "line": 11
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "devo receber um status code \u0027200\u0027",
  "keyword": "Entao "
});
formatter.step({
  "line": 13,
  "name": "retorno dos produtos registrado",
  "keyword": "E "
});
formatter.match({
  "location": "ControleStoqueSteps.queFacoUmaRequisicaoPOSTProductsComOsParametros(DataTable)"
});
formatter.result({
  "duration": 82364877400,
  "error_message": "com.fasterxml.jackson.databind.exc.InvalidDefinitionException: Cannot construct instance of `io.restassured.response.Response` (no Creators, like default construct, exist): abstract types either need to be mapped to concrete types, have custom deserializer, or contain additional type information\n at [Source: (String)\"{\"value\":null,\"quantity\":null}\"; line: 1, column: 1]\r\n\tat com.fasterxml.jackson.databind.exc.InvalidDefinitionException.from(InvalidDefinitionException.java:67)\r\n\tat com.fasterxml.jackson.databind.DeserializationContext.reportBadDefinition(DeserializationContext.java:1451)\r\n\tat com.fasterxml.jackson.databind.DeserializationContext.handleMissingInstantiator(DeserializationContext.java:1027)\r\n\tat com.fasterxml.jackson.databind.deser.AbstractDeserializer.deserialize(AbstractDeserializer.java:265)\r\n\tat com.fasterxml.jackson.databind.ObjectMapper._readMapAndClose(ObjectMapper.java:4001)\r\n\tat com.fasterxml.jackson.databind.ObjectMapper.readValue(ObjectMapper.java:3030)\r\n\tat com.fasterxml.jackson.databind.ObjectMapper$readValue$2.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat io.restassured.internal.path.json.mapping.JsonPathJackson2ObjectDeserializer.deserialize(JsonPathJackson2ObjectDeserializer.groovy:47)\r\n\tat io.restassured.path.json.mapping.JsonPathObjectDeserializer$deserialize.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat io.restassured.internal.mapping.Jackson2Mapper.deserialize(Jackson2Mapper.groovy:58)\r\n\tat io.restassured.mapper.ObjectMapper$deserialize$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat io.restassured.internal.mapping.ObjectMapping.parseWithJackson2(ObjectMapping.groovy:204)\r\n\tat io.restassured.internal.mapping.ObjectMapping$parseWithJackson2$1.callStatic(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallStatic(CallSiteArray.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:194)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:214)\r\n\tat io.restassured.internal.mapping.ObjectMapping.deserialize(ObjectMapping.groovy:57)\r\n\tat io.restassured.internal.mapping.ObjectMapping$deserialize$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat io.restassured.internal.RestAssuredResponseOptionsGroovyImpl.as(RestAssuredResponseOptionsGroovyImpl.groovy:223)\r\n\tat io.restassured.internal.RestAssuredResponseOptionsImpl.as(RestAssuredResponseOptionsImpl.java:165)\r\n\tat br.com.minutrade.functionality.ControleEstoqueProdutoFuncionalidade.postMapping(ControleEstoqueProdutoFuncionalidade.java:43)\r\n\tat br.com.minutrade.steps.ControleStoqueSteps.queFacoUmaRequisicaoPOSTProductsComOsParametros(ControleStoqueSteps.java:48)\r\n\tat ✽.Dado que faco uma requisicao POST/products com os parametros(features/controle-estoque/controle-estoque.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "ControleStoqueSteps.devoReceberUmStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ControleStoqueSteps.retornoProductsRegister()"
});
formatter.result({
  "status": "skipped"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/controle-estoque-produto/controle-estoque-produto.feature");
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
  "name": "- cadastrar cliente",
  "description": "",
  "id": "--cadastrar-cliente",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 14322290201,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que estou na home de cadastro de produto",
  "keyword": "Dado "
});
formatter.match({
  "location": "ControleStoqueSteps.queEstouNaHomeDeCadastroDeProduto()"
});
formatter.result({
  "duration": 6246046701,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LP0963\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\Inmetrics\\AppData\\...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: c0925b1fcc53aef68ceb8d251240be32\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\r\n\tat br.com.minutrade.funcionalidade.ControleEstoqueFuncionalidade.navegarAteHome(ControleEstoqueFuncionalidade.java:32)\r\n\tat br.com.minutrade.steps.ControleStoqueSteps.queEstouNaHomeDeCadastroDeProduto(ControleStoqueSteps.java:34)\r\n\tat ✽.Dado que estou na home de cadastro de produto(features/controle-estoque-produto/controle-estoque-produto.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 39,
  "name": "CT004 - deletar produto no estoque",
  "description": "",
  "id": "--cadastrar-cliente;ct004---deletar-produto-no-estoque",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 38,
      "name": "@chrome"
    },
    {
      "line": 38,
      "name": "@CEP004"
    },
    {
      "line": 38,
      "name": "@Regressivo"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "cadastro um novo produto",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "quantity"
      ],
      "line": 41
    },
    {
      "cells": [
        "produto a deletar",
        "180",
        "10"
      ],
      "line": 42
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 43,
  "name": "clico em deletar um produto",
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "nao devo visualizar o produto mais na pagina do estoque",
  "keyword": "Entao "
});
formatter.match({
  "location": "ControleStoqueSteps.tentoCadastrarProdutoComOsValoresInvalidos(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ControleStoqueSteps.clicoEmDeletarUmProduto()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ControleStoqueSteps.naoDevoVisualizarOProdutoMaisNaPaginaDoEstoque()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 567159801,
  "error_message": "java.lang.NullPointerException: Source must not be null\r\n\tat org.apache.commons.io.FileUtils.checkFileRequirements(FileUtils.java:1377)\r\n\tat org.apache.commons.io.FileUtils.copyFile(FileUtils.java:1060)\r\n\tat org.apache.commons.io.FileUtils.copyFile(FileUtils.java:1028)\r\n\tat br.com.minutrade.commons.SeleniumRobot.generateEvidence(SeleniumRobot.java:94)\r\n\tat br.com.minutrade.config.Hooks.afterScenarioWeb(Hooks.java:27)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
});
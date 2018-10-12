#language: pt
#Author: Ronaldo silva
#Version: 1.0
#Encoding: UTF-8
Funcionalidade: - Cadastrar produto no estoque da minutrade

  @CPEAPI001 @Regressivo
  Cenario: CT001 - cadastrar produto no estoque
    Dado que faco uma requisicao POST/products com os parametros
      | name   | value | quantity |
      | coelho |   100 |       10 |
    Entao devo receber um status code '200'
    E retorno dos produtos registrado

  @CEPAPI002 @Regressivo
  Cenario: CT002 - consultar estoques de produto
    Dado que faco uma requisicao GET/products
    Entao devo receber um status code '200'
    E retorno dos produtos

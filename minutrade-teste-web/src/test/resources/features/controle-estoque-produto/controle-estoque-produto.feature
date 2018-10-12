#language: pt
#Author: Ronaldo silva
#Version: 1.0
#Encoding: UTF-8
Funcionalidade: - cadastrar cliente

  Contexto: 
    Dado que estou na home de cadastro de produto

  @chrome @CEP001 @Regressivo
  Cenario: CT001 - cadastrar produto no estoque
    Quando cadastro um novo produto
      | name  | value | quantity |
      | tinta |   180 |       10 |
    Entao devo visualizar o produto na pagina do estoque

  @chrome @CEP002 @Regressivo
  Esquema do Cenario: CT002 - cadastrar produtos inválidos
    Quando cadastro um novo produto
      | name   | value   | quantity   |
      | <name> | <value> | <quantity> |
    Entao devo visualizar <mensagem> de alerta de campos obrigatorios

    Exemplos: 
      | name           | value | quantity | mensagem              |
      | chave de fenda |  -100 |       10 | "dados inválidos"     |
      | maçaneta       |    20 |       -9 | "dados inválidos"     |
      |                |   200 |       20 | "campos obrigatorios" |
      | martelo        |       |       50 | "campos obrigatorios" |
      | alicate        |    50 |          | "campos obrigatorios" |
      |                |       |          | "campos obrigatorios" |

  @CEP003 @Regressivo
  Cenario: CT003 - editar produto no estoque
    Quando edito um produto
    Entao devo visualizar o produto editado na pagina do estoque

  @chrome @CEP004 @Regressivo
  Cenario: CT004 - deletar produto no estoque
    Quando cadastro um novo produto
      | name              | value | quantity |
      | produto a deletar |   180 |       10 |
    E clico em deletar um produto
    Entao nao devo visualizar o produto mais na pagina do estoque

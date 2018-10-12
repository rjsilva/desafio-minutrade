Manual Para Execução dos Testes - Web e Api


Ferramentas

- IDE(Eclipse, NetBeans ou IntelliJ)

Tecnologias 

- Java 8
- Cucumber
- RestAssured
- Selenium
- Junit

Rodar os Testes

	Pré-Requisito: Atualizar o Projeto Api e Web antes de rodar os testes, para baixar as dependências do maven
	
	- Dentro da IDE
	- Clicar botão direto no projeto
	- Selecionar opção "Maven"
	- Selecionar opção "Update maven project"
	
1 - Opção IDE(Eclipse, Netbeans ou IntelliJ)

	- Run -> JU Run Test
	
2 - Opção Maven

	Pré Requisito 
	
	- Maven Instalado na máquina 
	
	-------------Aplicação Api--------------- 
	
	Sistema Operacional Mac OSX
	- Abrir Terminal
	- Entra dentro do projeto
	- Executar o camando "mvn test"
	
	Sistema Operacional Windows
	- abrir cmd 
	- Entra dentro do projeto
	- Executar o camando "mvn test"
	
	----------Aplicação Web----------------- 
		
	Sistema Operacional Windows
	- Pré requisito
	- Abrir as features no pacotes src/test/resources -> features -> 
	- Retirar a tag -> @chrome
	- Inserir em todas as features a tag -> @chrome_windows
	- Ir até o pacote config -> 
	- Abrir classe hooks -> ir até o metodo -> beforeScenarioChromeWindows
	- Atualizar o metodo initializeWebApplication para -> initializeWebApplication(Web.CHROME_WINDOWS);
	- abrir cmd 
	- Entra dentro do projeto
	- Executar o camando "mvn test"
	
	------------Reports do Testes -----------------------
	
	- Dentro do projeto
	- Pasta target -> surefire--reports -> cucumber.html -> index.html
	
	- clicar no "index.html" ou abrir com seu browser de preferência
	
	obs: futuramente esse report, estará no jenkins
	
	
	------------Prints Web-------------------------------------------------
	-dentros da pastas abaixo ficam os prints de acordo com o status do testes. 
	-passed
	-error
	-failed
	------------Observação Testes que estão Funcionando-----------------
	
	- Teste Api
	- Cenario: CT001 - cadastrar produto no estoque - ok
	- Cenario: CT002 - consultar estoques de produto - error
	
	*problemas com bugs api:
	O cenário CT001 está cadastrando produto com valores null e no retorno não consegue serializar.
	
	- Testes Web
	- Cadastrar Produto - Cenario: CT001 - cadastrar produto no estoque
	- Deletar Produto - Cenario: CT004 - deletar produto no estoque
	
	*Problemas com Bugs web:
	alguns testes foram criados bdd´s porém não estão rodando devido ao bugs, ou seja não faz sentido automatizar algo que não está         funcionando.
	

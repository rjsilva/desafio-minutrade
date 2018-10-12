Manual Para Execu��o dos Testes - Web e Api


Ferramentas

- IDE(Eclipse, NetBeans ou IntelliJ)

Tecnologias 

- Java 8
- Cucumber
- RestAssured
- Selenium
- Junit
- JavaFaker

Rodar os Testes

	Pr�-Requisito: Atualizar o Projeto Api e Web antes de rodar os testes, para baixar as depend�ncias do maven
	
	- Dentro da IDE
	- Clicar bot�o direto no projeto
	- Selecionar op��o "Maven"
	- Selecionar op��o "Update maven project"
	
1 - Op��o IDE(Eclipse, Netbeans ou IntelliJ)

	- Run -> JU Run Test
	
2 - Op��o Maven

	Pr� Requisito 
	
	- Maven Instalado na m�quina 
	
	-------------Aplica��o Api--------------- 
	
	Sistema Operacional Mac OSX
	- Abrir Terminal
	- Entra dentro do projeto
	- Executar o camando "mvn test"
	
	Sistema Operacional Windows
	- abrir cmd 
	- Entra dentro do projeto
	- Executar o camando "mvn test"
	
	----------Aplica��o Web----------------- 
		
	Sistema Operacional Mac OSX
	- Abrir Terminal
	- Entra dentro do projeto
	- Executar o camando "mvn test"
	
	Sistema Operacional Windows
	- Pr� requisito
	- Abrir as features no pacotes src/test/resources -> features -> 
	- Retirar a tag -> @chrome
	- Inserir em todas as features a tag -> @chrome_windows
	- Ir at� o pacote config -> 
	- Abrir classe hooks -> ir at� o metodo -> beforeScenarioChromeWindows
	- Atualizar o metodo initializeWebApplication para -> initializeWebApplication(Web.CHROME_WINDOWS);
	- abrir cmd 
	- Entra dentro do projeto
	- Executar o camando "mvn test"
	
	------------Reports do Testes -----------------------
	
	- Dentro do projeto
	- Pasta target -> surefire--reports -> cucumber.html -> index.html
	
	- clicar no "index.html" ou abrir com seu browser de prefer�ncia
	
	obs: futuramente esse report, estar� no jenkins
	
	------------Melhorias e sugest�o de usabilidade da aplica��o front-end-----------------
	
	- Campo Data deve ter 8 caracteres
	- Navega��o de todos os menus deve ser na horizontal
	- Campo "Selecione o cliente" deve ser um "input" para que o usu�rio possa inserir o cliente que deseja pesquisar
	- Bot�o "limpar base" n�o deve existir. o usu�rio deve excluir apenas pela table pelo bot�o de "excluir"
	
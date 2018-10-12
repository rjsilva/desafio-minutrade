package br.com.minutrade.commons;

/**
 * 
 * @author Ronaldo Silva
 *
 */
public enum Credentials implements AccountCredentials{
	
	
	ADMIN {

		@Override
		public String user() {
			return "admin";
		}

		@Override
		public String password() {
			return "admin";
		}

	},

}

package br.com.minutrade.service;

import org.json.simple.JSONObject;

/**
 * 
 * @author Ronaldo
 *
 * @param <T>
 */
public abstract class Http<T> {
	
	
	public T getMapping() {
		return null;
	}
	
	public T postMapping(JSONObject product) {
		return null;
	}
	
	public T deleteMapping() {
		return null;
	}
	
	public T putMapping() {
		return null;
	}

}

package br.com.minutrade.dto;

/**
 * 
 * @author Ronaldo Silva
 *
 */
public class Product {
	
	
	private String name;
	
	private Integer value;
	
	private Integer quantity;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getValue() {
		return value;
	}

	public void setValue(Integer value) {
		this.value = value;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	

}

package com.ncblazers.payroll;

public class Employee extends Person {
	private int id;
	private float bonus;
	private float basePay;
	
	public Employee(){
		
	}
	
	public Employee(
			String firstName, 
			String lastName, 
			int age, 
			int id, 
			float bonus, 
			float basePay) 
	{
		super(firstName, lastName, age);
		this.id = id;
		this.basePay = basePay;
		this.bonus = bonus;
	}
	
	/**
	 * Meant to be call by passing in a line from a CSV that will be parsed into the fields. 
	 * 
	 * @param lineFromCSV
	 */
	public Employee(String lineFromCSV) {
		
		
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public float getBonus() {
		return bonus;
	}
	public void setBonus(float bonus) {
		this.bonus = bonus;
	}
	public float getBasePay() {
		return basePay;
	}
	public void setBasePay(float basePay) {
		this.basePay = basePay;
	}
	
	public float calculatePay(int hours) {
		float base = hours * basePay;
		
		return base + base * bonus;
	}
	
}

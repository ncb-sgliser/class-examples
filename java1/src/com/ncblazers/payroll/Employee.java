package com.ncblazers.payroll;

public class Employee extends Person {
	private int id;
	private float bonus;
	private float basePay;
	private float hours;
	
	public Employee(){
		clearHours();
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
		clearHours();
		this.id = id;
		this.basePay = basePay;
		this.bonus = bonus;
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
	
	public void addHours(float hours) {
		if(hours > 0) {
			this.hours = this.hours + hours;
		} else {
			throw new RuntimeException("Hours must be greater than zero.  check your file");
		}		
	}
	
	public void clearHours() {
		this.hours = 0;
	}
	
	public float calculatePay() {
		float base = hours * basePay;
		
		return base + base * bonus;
	}
	
}

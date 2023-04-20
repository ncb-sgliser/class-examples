package com.ncblazers.payroll;

import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

public class Payroll {
	
	private SimpleDateFormat formatter = new SimpleDateFormat("MM.dd.yyyy");
	private String payDay;
	private float total;
	private Map<String, Employee> employees;
	
	
	public Payroll() {
		Date now = new Date();
		this.payDay = formatter.format(now);
	}
	
	public Payroll(Date date) {
		this.payDay = formatter.format(date);
	}
	
	public String getPayDay() {
		return payDay;
	}
	public void setPayDay(String payDay) {
		this.payDay = payDay;
	}
	public float getTotal() {
		return total;
	}
	public void addToTotal(float pay) {
		this.total = this.total + pay;
	}
	
	public Map<String, Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(Map<String, Employee> employees) {
		this.employees = employees;
	}

	public String toString() {
		NumberFormat totalFormatter = NumberFormat.getCurrencyInstance();
		
		return payDay + ": " +totalFormatter.format(total);
	}
	
	
}

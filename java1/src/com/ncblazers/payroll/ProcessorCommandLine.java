package com.ncblazers.payroll;

import java.util.Scanner;

public class ProcessorCommandLine {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String line;
		Employee newbie = new Employee();
		
		System.out.println("First Name:");
		line = scanner.nextLine();
		newbie.setFirstName(line);
		
		System.out.println("Last Name:");
		line = scanner.nextLine();
		newbie.setLastName(line);
		
		System.out.println("Age");
		line = scanner.nextLine();
		newbie.setAge(Integer.parseInt(line));
		
		System.out.println("Base Pay");
		line = scanner.nextLine();
		newbie.setBasePay(Float.parseFloat(line));
		
		System.out.println("Bonus Rate");
		line = scanner.nextLine();
		newbie.setBonus(Float.parseFloat(line));
		
		System.out.println("How many hours did "+newbie.getFirstName()+ " work?");
		line = scanner.nextLine();
		newbie.addHours(Float.parseFloat(line));
		
		System.out.println(newbie.getFirstName()+ " earned: "+newbie.calculatePay());
		
		

	}

}

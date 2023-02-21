package com.ncblazers.payroll;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.text.NumberFormat;
import java.util.HashMap;
import java.util.Map;

public class ProcessorCSV {

	public static void main(String[] args) {

		String employeeCSV = "employees.csv";
		String timecardCSV = "timecard.csv";
		String line;
		String delimiter = ",";
		NumberFormat formatter = NumberFormat.getCurrencyInstance();
		
		Map<String, Employee> employees = new HashMap<String, Employee>();
		try {

			BufferedReader bufferedEmployeeFileReader = new BufferedReader(new FileReader(employeeCSV));
			
			//Ditch the first line as useless headers
			line = bufferedEmployeeFileReader.readLine();			
						
			while((line = bufferedEmployeeFileReader.readLine()) != null) {
				System.out.println(line);
				String[] parts = line.split(delimiter);
								
				Employee newbie = new Employee(
						parts[0], 
						parts[1], 
						Integer.parseInt(parts[2]), 
						Integer.parseInt(parts[3]), 
						Float.parseFloat(parts[4]), 
						Float.parseFloat(parts[5]));
				
				employees.put(""+newbie.getId(), newbie);
				
			}
			bufferedEmployeeFileReader.close();
			
			System.out.println("Number of Employees imported: "+employees.size());
			
			
			
			BufferedReader bufferedTimecardFileReader = new BufferedReader(new FileReader(timecardCSV));
			
			//Ditch the first line as useless headers
			line = bufferedTimecardFileReader.readLine();	
			
			while((line = bufferedTimecardFileReader.readLine()) != null) {
				String[] timecardData = line.split(delimiter);
				String id = timecardData[0];
				float hours = Float.parseFloat(timecardData[1]);
				Employee employee = employees.get(id);
				employee.addHours(hours);
			}
			bufferedTimecardFileReader.close();
			
			float total = 0;
			for(Employee employee: employees.values()) {
				float pay = employee.calculatePay();
				String pretty = formatter.format(pay);
				total += pay;
				System.out.println(employee.getFirstName()+ " " +employee.getLastName()+ " "+pretty);
			}
			System.out.println("Total Payroll: "+formatter.format(total));
			System.out.println("END OF REPORT");
			
			
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
	}
}

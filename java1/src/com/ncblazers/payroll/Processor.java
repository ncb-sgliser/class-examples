package com.ncblazers.payroll;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class Processor {

	public static void main(String[] args) {

		String employeeCSV = "employees.csv";
		String line;
		String delimiter = ",";
		
		Map<String, Employee> employees = new HashMap<String, Employee>();
		try {
			FileReader employeeCSVFileReader = new FileReader(employeeCSV);
			BufferedReader bufferedEmployeeFileReader = new BufferedReader(employeeCSVFileReader);
			
			//Ditch the first line as useless 
			line = bufferedEmployeeFileReader.readLine();
			
			while(line != null) {
				System.out.println(line);
				line = bufferedEmployeeFileReader.readLine();
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
	}
}

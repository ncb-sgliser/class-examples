package com.ncblazers;

/**
 * A very basic Object to learn how objects and instances work
 * 
 * @author ShaneGliser
 */
public class HelloWorld {

	/**
	 * Called when running the application from the command line
	 * 
	 * @param args
	 */
	public static void main(String[] args) {

		HelloWorld basicHello = new HelloWorld();
		System.out.println(basicHello);
		
		HelloWorld myHello = new HelloWorld("Shane");
		System.out.println(myHello);
		
		HelloWorld myHello2 = new HelloWorld("Shane", "What's up,");
		System.out.println(myHello2);
	}
	
	/**
	 *  Zero Argument Constructor
	 *  The default version created if you pass nothing in at the time of instantiation
	 */
	public HelloWorld() {
		
	}
	
	/**
	 * One Argument Constructor 
	 * This is called if you pass in single String at the time of instantiation
	 * 
	 * @param name
	 */
	public HelloWorld(String name) {
		this.name = name;
	}
	
	/**
	 * Two Argument Constructor
	 * This is called if you pass in two strings at the time of instantiation
	 * 
	 * @param name
	 * @param greeting
	 */
	public HelloWorld(String name, String greeting) {
		this.name = name;
		this.greeting = greeting;
	}
	
	//private variables
	private String greeting = "Hello";
	private String name = "World";

	/**
	 * Returns the name
	 * @return
	 */
	public String getName() {
		return name;
	}

	/**
	 * Sets the name
	 * @param name
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * Returns the greeting
	 * @return
	 */
	public String getGreeting() {
		return greeting;
	}

	/**
	 * Sets the greeting
	 * @param greeting
	 */
	public void setGreeting(String greeting) {
		this.greeting = greeting;
	}
	
	/**
	 * Format the string output of the object. 
	 */
	public String toString() {
		return greeting + " " + name;
	}
}

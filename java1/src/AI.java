import java.util.Scanner;

public class AI {	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String input;
		while( (input = scanner.nextLine())!= null) {
			if(input.equals("exit")) {
				System.out.println("closing program");
				System.exit(0);
			}
			System.out.println("You entered: " + input);
		}
	}
}

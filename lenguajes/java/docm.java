
//start
/* 

 * all app start on class name
 * ide: class name == file.java, compile and exec
 * terminal: compile->javac file.java, exec->java file

*/ 

/*
public class docm {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
*/


//sintax

/*

 * is case sensitive, myclass =/= myClass
 * the code always inside a class
 * name class == name file 
 * class name start in upperclase

*/


//main() is a method requiered
//need a class 

/*
 
 * public static void main(String[] args)
 * execute code
 * System.out.println()
 * println() method
 * {} start end code
 * statement end -> ; 
 
 * built in: 
 * System
 * out is member
 * println -line- is method
 
*/


//println()

/*

 * text and values
 * using "text"
 * add new line in multiple print/text, etc

 * numbers: 
 * println(1+2)
 * println(3)
 * 
 
*/

//print()

/*
 
 * no add new line in multiple print
 * add extra space for readability 
 
*/

/*
public class docm {
	public static void main(String[] args) {
		System.out.println("hello world");
		System.out.println(1);
		System.out.println(1+2);
	}
	
}
*/

//commnets 

/*
  
 *c, java and javaScript
 * single or mulitiple is same
  
*/



//vars

/*
 
 * storing data values in different type
 * type name = value 
 
 * types:  
 * String in " "
 * int 
 * float 
 * char 
 * boolean
 
 * final or constant var: 
 * final type name = value 
 * name = other value, no change
 * 
 
*/


// combine types in print

/*

 * text and var: + 

 * whitespace in " "
 * linespace \n in start or final of string
 * String name = "Bob"; 
 * String lastName = " Willis"; 		
 
 * multiple var: 
 * int x = 5, y = 6, z = 50;
 
 * same value on multiple var: 
 * int x, y, z;
 * x = y = z = 50;
  
 * naming: 
 * can letters, digits, underscores, and dollar signs
 * start in letter and lowercase, no whitespace
 * can start in $ and _
 * upper and lower is diff
 * no keyword
 
 
*/

/*
public class docm {
	public static void main(String[] args) {
		System.out.println("hello world");
		System.out.println(1);
		System.out.println(1+2);
		
		String name = "Bob"; 
		System.out.println(name);
		
		final int ten = 10; 		
		// ten = 14; err
		System.out.println(ten);
		
		System.out.println(name + " is a " + ten);
		
		String lastName = " Willis"; 		
		String fullName = name + lastName; 
		System.out.println(fullName + " is awesome!");
		
		int x = 5, y = 6, z = 50;
		System.out.println("The sum is: " + x + y + z);
		
		int a, b, c;
		a = b = c = 50;
		System.out.println("The value of the var a is " + a + ", b is " + b + " and c is " + c);
		
	}
	
}
*/


//data type

/*
 
 * primitive: 
 * predefined for languaje
 * always has a value
 * starts with a lowercase letter
 * 
 * byte: 1 byte, -128 to 127
 * short: 2 bytes, -32,768 to 32,767
 * int: 4 bytes, -2,147,483,648 to 2,147,483,647
 * long: 8 bytes, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
 * float: 4 bytes, 6-7 decimal digits after point
 * double: 8 bytes, 15 decimal digits
 * boolean: 1 bit, t o f 
 * char:  2 bytes, single char/lett or ASCII value 
 
 * no primitive (reference types to an object): 
 * created by the programmer or language
 * used to call methods
 * can be null
 * starts with an uppercase letter
 * 
 * String
 * Arrays
 * Classes
 * Interface
 
 * primitive are two: 
 * int: byte, short, int and long
 * float: float and double
 * int and double are the most used
 
 * floats can be scientific
 * e is power 10 
 
 * boolean: 
 * t/f, y/n, 1/0 or on/off

 * char and ASCII: 
 * char is single character -> single quote ' '
 * 
 * ASCII is a number what contain a char -> 128 numbers 
 * 0-9, a-z (upper and lower unique numb), specials
 * a -> 97
 * A -> 65 
 
 * String: 
 * secuence of characters, text in double quote " "
 * no primitive, refers to an object called reference types
 * has methods to operate strings
 
 
 

*/


public class docm {
	public static void main(String[] args) {
		
		int myNum = 5;
		float myFloatNum = 5.99f;
		char myLetter = 'D';
		boolean myBool = true;
		String myText = " Hello";
		
		System.out.println("int is " + myNum + ", float is " + myFloatNum + ", char is " + myLetter + ", boolean is " + myBool + ", string is " + myText + "\n");
		
		//Integer types: 
		byte myByteInt = 100;
		short myShortInt = 5000;
		int myInt = 100000;
		long myLongInt = 15000000000L;
		
		//Float types: 
		float myFloatValue = 5.75f;
		double myDoubleValue = 19.99d;
		
		//scientific float
		float f1 = 35e3f;
		double d1 = 12E4d;

		System.out.println("Scientific float is " + f1 + ", scientific double is " + d1);
		
		char myGrade = 'B';
		char UpperA = 65
		
	}
	
}



//casting
 
/*
 
 * Widening/wide (auto)
 * 
 * Narrowing/narrow (manual))
 * 
 * 
	
*/

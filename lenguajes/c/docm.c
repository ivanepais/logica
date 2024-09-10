//docm.c


/*
#include <stdio.h>

int main(int argc, char **argv)
{
	printf("hello world\n"); 
	
	return 0;
}

*/


//program is a list of instruccion called statements
//return 0 finish the execution 

/*
#include <stdio.h>
int main() {
	printf("Hello World!\n");
	printf("Have a good day!\n");
	return 0;
	
}
*/

//output values or text 

/*
 
 * #include <stdio.h>

 * printf()
 
 * new line '\n':
 * forces the cursor to change its position 


 * err: using '' for string, is a char
 
*/


//multiple lines of text

/*
 
 * is not clear for reading: 
 * printf("Hello World!\nI am learning C.\nAnd it is awesome!");


 * blank line: 
 * \n\n
 * printf("Hello World!\n\n");
 * printf("I am learning C.");

 
*/



//escape secuence 

/*

 * horizontal tab: \t (more espace in text)
 * backslash character (\): \\ 
 * double quote char: \"
 
*/


//commets

/*
 
 *c89: only multi-line
 
 *c99: multi and single
 
  
*/



//variables 

/*
 
 * storing data 
 
 * types of var: int, float, char(like 'a' in single quote)
 
 * syntax: type name = value; 
 
 * 
 
*/


//format specifiers for print var/value 

/*
 
 * tell to the compiler what type of data is the var in print
 * "%d", : int 
 * "%c", : char
 * "%f", : float
 * 
*/


/*
#include <stdio.h>
int main() {

	//int myNum = 15; 
	 
	int myNum2;
	 
	myNum2 = 16; 
	 
	printf("%d\n", myNum2); 
	 
	int myNum = 15;
	printf("My favorite number is: %d\n", myNum); 
	
	char myLetter = 'D';
    printf("My number is %d and my letter is %c\n", myNum, myLetter); 
	
	//print value without var
	printf("My favorite number is: %d\n", 15);
	printf("My favorite letter is: %c\n", 'D'); 
	
	//change values
	printf("changing values...\n"); 
	//overwrite var
	int myNum3 = 17;
	myNum3 = 10;
	
	//var to var
	int myNum4 = 18; 
	int myNum5 = 19; 
	
	myNum4 = myNum5;
	printf("The value change to: %d\n", myNum4); 
		
	int myNum6; 
	myNum6 = myNum5; 
	
	//operator and var
	int x = 5;
	int y = 6;
	int sum = x + y;
	printf("%d\n", sum);
	
	//Multiple var
	int a = 5, b = 6, c = 50;
    printf("%d\n", a + b + c); 
	
	//multiple var same value
	int d, e, f;
    d = e = f = 50;
    printf("%d\n", x + y + z); 
	
	return 0;
	
}

*/


//var names

/*
  
 * each variable, unique name called identifiers
 * short or descriptive
 * descriptive for readable and mantenible code
 * contain letters, digits and underscores
 * begin with a letter or an underscore (_)
 * are case-sensitive (myVar and myvar)
 * cannot contain whitespaces or special characters like !, #, %, etc.
 * Reserved words (such as int) cannot be used as names
  
*/


/*
int main() {
	
	//good
	int minutesPerHour = 60; 
	
	//bad
	int m = 60; 
	
	
	//real life examples
	
	// Student data
	int studentID = 15;
	int studentAge = 23;
	float studentFee = 75.25;
	char studentGrade = 'B';

	// Print variables
	printf("Student id: %d\n", studentID);
	printf("Student age: %d\n", studentAge);
	printf("Student fee: %f\n", studentFee);
	printf("Student grade: %c", studentGrade);
	
	
	//Area of a Rectangle
	// Create integer variables
	int length = 4;
	int width = 6;
	int area;

	// Calculate the area of a rectangle
	area = length * width;

	// Print the variables
	printf("Length is: %d\n", length);
	printf("Width is: %d\n", width);
	printf("Area of the rectangle is: %d", area); 
	
}

 
*/


//data type and size

/*
 
 * int(2/4bytes), %d/%i; 
 * float(4bytes), %f/%F; 6-7 decimal digits
 * char(1byte), %c; single character/letter/number, or ASCII values
 * double(8bytes), floating point number (%lf); 15 decimal digits
 * string (%s) 
 
*/


//char, ASCII, string

/*

 * single character
 * using '', 'a'
 * %c
 
 * ASCII
 * set of characters, used in inet
 * iso-8859-1 (html4.01) and utf8 (html5), based on ASCII
 * are number, not ''
 * 128 characters of 7bits
 * 0-9, a-z(minus/mayus) and special chars, all unique number

  
 * string
 * char myText = 'Hello'; //only print last character
 * char myText[] = "Hello";
 * 
 

*/


//Numeric Types

/*
 
 * int myNum = 1000; (%d)
 * float myNum = 5.75; 6-7 digits after decimal (%f)
 * double myNum = 19.99; 15 digits after deciamal (%lf)
 * double is safer for all operations
 
 * Scientific Numbers: e is power of 10
 
 * set decimal: with %.number
 * %.4f
 * %.8lf
 
 
*/

/*
#include <stdio.h>
int main() {
	
	double myNum = 19.99; 
	printf("El decimal es: %lf\n", myNum); 
	
	float f1 = 35e3;
	double d1 = 12E4;

	printf("%.4f\n", f1);
	printf("%.8lf\n", d1); 
	
	return 0; 
}
*/


//sizeof Operator

/*
 
 * get memory size (in bytes) for data or var 
 * how much space occupies in memory
 * important for memory usage and performance.
 * ej: char -> 1byte, array char 1000 -> 1kb
 * Using the right data type for the right purpose impact on perf
 
 * int 2/4 bytes   
 * float 4 btyes
 * double 8 bytes
 * char 1 byte
 
 * print long unsigned %lu
 
*/



#include <stdio.h>
int main() {

	int myInt;
	float myFloat;
	double myDouble;
	char myChar;

	printf("%lu\n", sizeof(myInt));
	printf("%lu\n", sizeof(myFloat));
	printf("%lu\n", sizeof(myDouble));
	printf("%lu\n", sizeof(myChar)); 
	
	//printf("%u\n", sizeof(myInt));
	//printf("%u\n", sizeof(myFloat));
	//printf("%u\n", sizeof(myDouble));
	//printf("%u\n", sizeof(myChar)); 
	
	//real ej.
	// Create variables of different data types
	int items = 50;
	float cost_per_item = 9.99;
	float total_cost = items * cost_per_item;
	char currency = '$';

	// Print variables
	printf("Number of items: %d\n", items);
	printf("Cost per item: %.2f %c\n", cost_per_item, currency);
	printf("Total cost = %.2f %c\n", total_cost, currency);
	
	return 0; 
	
}



//Type Conversion

/*
 
 * convert value in other type
 * case 5 / 2 = 2 on int, not 2.5; no implicit conver
 
 * Implicit Conversion (automatically)
 * 
 * 
 
 * Explicit Conversion (manually)
 * 
 * 
 * 
 * 
  
*/

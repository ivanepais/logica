# Cracking the coding interview

## Complejidad Espacial y Complejidad Temporal

"""
El espacio de pila (stack space) en las llamadas recursivas también cuenta.

Por ejemplo, un código como este ocuparía O(n) de tiempo y O(n) de espacio.

"""

"""
int sum(int n) {/*Ex 1.*/
  if (n <= 0) {
    return 0;
  }
  return n + sum(n-1);
}

"""

"""
sum(4)
   -> sum(3)
     -> sum(2)
       -> sum(l)
         -> sum(0)
"""

"""
Cada una de estas llamadas se añade a la pila de llamadas y ocupa memoria real.

"""


def sum(n):
	if n <= 0:
		return 0
	return n + sum(n-1)


"""
Sin embargo, que tenga n llamadas en total no significa que ocupe O(n) de espacio. 

Considere la siguiente función, que añade elementos adyacentes entre O y n:


int pairSumSequence(int n) {/* Ex 2.*/
  int sum = 0;
  for (int i= 0; i < n; i++) {
    sum += pairSum(i, i + 1);
  } 
  return sum;
}

int pairSum(int a, int b) {
  return a + b;
}
  

Habrá aproximadamente O(n) llamadas a pairSum. 

Sin embargo, esas llamadas no existen simultáneamente en la pila de llamadas, por lo que solo necesita O(1) de espacio.

"""

def pairSumSequence(n):
	sum = 0;
    for x in range(n): 
		sum += pairSum(x, x + 1)
	return sum
	
def pairSum(a, b):
	return a + b



# DRY

def print_balance(account):
	printf ('Debits: %10.2f\n', account.debits)
	printf ('Credits: %10.2f\n', account.credits)
	
	if account.fees < 0:	
		printf ('Fees: %10.2f-\n', -account.fees)
	else:
		printf ('Fees: %10.2f\n', account.fees)
	#end
	
	printf (' ———-\n')

	if account.balance < 0:
		printf ('Balance: %10.2f-\n', -account.balance)
	else:
		(printf 'Balance: %10.2f\n', account.balance)
	#end
#end

"""
error
guardar las monedas en flotantes.

hay una duplicación
gestión de los números negativos.

Para arreglarlo 
"""

def format_amount(value)
    result = sprintf(“%10.2f”, value.abs)
    
    if value < 0
        result + “-”
    else
        result + “ “
    end
end


"""
Otra duplicación es la repetición
en todas las
llamadas printf.

Podríamos arreglar esto introduciendo una constante y
pasándola a cada llamada,

pero ¿por qué no utilizar la función existente, sin
más?

"""

def print_balance(account)
    printf “Debits: %10.2f\n”, account.debits
    printf “Credits: %10.2f\n”, account.credits
    printf “Fees: %s\n”, format_amount(account.fees)
    printf “ ———-\n”
    printf “Balance: %s\n”, format_amount(account.balance)
end

"""
si el cliente pide un espacio extra entre las
etiquetas y los números? Tendríamos que cambiar cinco líneas. Vamos a
eliminar esa duplicación:

"""

def format_amount(value)
    result = sprintf(“%10.2f”, value.abs)

    if value < 0
        result + “-”
    else
        result + “ “
    end
end


def print_line(label, value)
    printf “%-9s%s\n”, label, value
end

def report_line(label, amount)
    print_line(label + “:”, format_amount(amount))
end

def print_balance(account)
    report_line(“Debits”, account.debits)
    report_line(“Credits”, account.credits)
    report_line(“Fees”, account.fees)
    print_line(“”, “———-”)
    report_line(“Balance”, account.balance)
end

"""
Si tenemos que cambiar el formato de las cantidades, cambiamos
format_amount. Si queremos cambiar el formato de las etiquetas,
cambiamos report_line.

el número de
guiones en la línea de separación está relacionado con la anchura del campo
de las cantidades. Pero no es una correspondencia exacta:

en este momento
es un carácter más corta, así que cualquier signo menos siguiente se
extiende más allá de la columna. Ese es el propósito del cliente y es un
propósito diferente a la aplicación real de formato a las cantidades.

"""


def validate_age(value):
validate_type(value, :integer)
validate_min_integer(value, 0)
def validate_quantity(value):
validate_type(value, :integer)

"""
los cuerpos de las dos
funciones son iguales.
Se equivoca. El código es el mismo, pero la información que representa
es diferente. Las dos funciones validan dos cosas separadas que resulta que
tienen las mismas reglas. Eso es una coincidencia, no una duplicación

"""


"""
Duplicación en la documentación

"""
# Calcular las tasas para esta cuenta.
#
# * Cada cheque devuelto cuesta 20 dólares
# * Si la cuenta está en descubierto más de 3 días,
# se cobran 10 dólares por cada día
# * Si el saldo medio es superior a 2.000 dólares
# se reducen las tasas en un 50 %
def fees(a)
    f = 0
    if a.returned_check_count > 0
        f += 20 * a.returned_check_count
    end
    if a.overdraft_days > 3
        f += 10*a.overdraft_days
    end
    if a.average_balance > 2_000
        f /= 2
    end
    f
end

"""
Si el cliente cambia una tasa y tenemos
que actualizar las dos cosas.

propósito de esta función se proporciona dos veces: una vez en el
comentario y otra vez en el código.

"""


def calculate_account_fees(account)
    fees = 20 * account.returned_check_count
    fees += 10 * account.overdraft_days if account.overdraft_days > 3
    fees /= 2 if account.average_balance > 2_000
    fees
end

"""
El nombre dice lo que hace y, si alguien necesita detalles, están
expuestos en la fuente.

"""


"""
DRY en los datos
"""

class Line {
    Point start;
    Point end;
    double length;
};

"""
parecer razonable. Una línea tiene,
claramente, un principio y un final, y siempre tendrá una longitud (incluso
aunque sea cero).

La longitud está definida por
los puntos de inicio y final: cambie uno de esos puntos y la longitud
cambiará. Es mejor hacer que la longitud sea un campo calculado:
"""

class Line {
Point start;
Point end;
double length() { return start.distanceTo(end); }
};


"""
razones de rendimiento.
esto ocurre
cuando necesita almacenar datos para evitar repetir operaciones caras.

limitar el impacto.
no está expuesta al mundo exterior:
solo los métodos dentro de la clase tienen que preocuparse por mantener las
cosas claras:
"""

class Line {
    private double length;
    private Point start;
    private Point end;

    public Line(Point start, Point end) {
        this.start = start;
        this.end = end;
        calculateLength();
    }

    // público
    void setStart(Point p) { this.start = p; calculateLength(); }
    void setEnd(Point p) { this.end = p; calculateLength(); }

    Point getStart() { return start; }
    Point getEnd() { return end; }

    double getLength() { return length; }

    private void calculateLength() {
        this.length = start.distanceTo(end);
    }
};


"""
ilustra una cuestión importante: cada vez que un
módulo expone una estructura de datos, estamos acoplando todo el código
que usa esa estructura a la implementación de ese módulo.

Cuando sea
posible, use siempre funciones de acceso para leer y escribir los atributos de
objetos. Eso hará que sea más fácil añadir funcionalidad en el futuro.

"""

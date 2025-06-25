/*
const greet = () => 'Hola!';
console.log(greet()); 
*/

// Ejercicios 

// 1. Registro de usuario

/*
interface User {
  id: string;
  name: string;
  age: number;
  email?: string; // opcional
}

function describeUser(user: User): string {
  return Object.entries(user)
    .map(([k, v]) => `${k}: ${v}`)
    .join(", ");
}
*/

/*
function describeUser(user: User): string {
  let base = `Usuario: ${user.name} (ID: ${user.id}), Edad: ${user.age}`;
  
  // Solo agregamos el email si está definido
  if (user.email) {
    base += `, Email: ${user.email}`;
  }

  return base;
}
*/

/*
const usuario1: User = {
  id: "u123",
  name: "Ana",
  age: 25,
  email: "ana@email.com"
};

const usuario2: User = {
  id: "u124",
  name: "Luis",
  age: 30
};
*/


/*
console.log(describeUser(usuario1));
console.log(describeUser(usuario2));
*/


// 2. Carrito de compras 

interface Product {
	id: string; 
	name: string; 
	price: number; 	
}

interface CartItem {
	product: Product; 
	quantity: number; 
}

interface Cart {
	items: CartItem[]; 
}


function addToCart(cart: Cart, item: CartItem): Cart {
  return {
    // clonamos cualquier otra propiedad de Cart (hoy solo items)
    ...cart,
    // items es un nuevo array con los viejos + el nuevo ítem
    items: [...cart.items, item]
  };
}

function calculateTotal(cart: Cart): number {
  return cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
}

function cartSummary1(cart: Cart): string {
  const lines = cart.items.map(item =>
    `${item.quantity}× ${item.product.name} – $${item.product.price.toFixed(2)}`
  );
  lines.push(`Total: $${calculateTotal(cart).toFixed(2)}`);
  return lines.join("\n");
}


// 3. Address Book

interface Contact {
	id: string; 
	name: string;
	email: string;  
	phone?: string; 
}

interface AddressBook {
	contacts: Contact[]; 
}



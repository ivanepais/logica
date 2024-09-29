# Styling boxes


|| Agregar Sombra a un Elemento

	Usando la propiedad box-shadow. 
	
	Para el texto se usa text-shadow. 
	
	
	Toma los valores: 
	
		Desplazamiento (offset) en el eje x, y. 
		
		Radio de desenfoque (blur)
	
		Radio de propagación (spread)
		
		Color 
		
		inset 
		
		
	Ej: 5px en x, y; 10px blur, spread 2px
	
	```
	<div class="wrapper">
	  <button class="shadow">box-shadow</button>
	</div>
	
	.shadow {
	  box-shadow: 5px 5px 10px 2px rgb(0 0 0 / .8);
	}
		
	```
	
	No se uso inset shadows, esta se proyectada predeterminada con el cuadro encima de la sombra
	
	Aparecen dentro del cuadro como si el contenido se hubiera insertado nuevamente en la página.



|| Rellenar Caja con una Imagen sin Distorsionarla

	object-fit proporciona distintas maneras de ajustar una imagen a una caja que tiene una relación de aspecto (aspect ratio) diferente. 
	
	
	Si usamos el elemento <img> para agregar una imagen. 

	la imagen mantendrá el tamaño y la relación de aspecto del archivo de imagen, o la de cualquier atributo HTML de ancho o alto. 

	Le gustaría que la imagen llene completamente el cuadro en el que la ha colocado.

	Primero debe decidir qué sucede si la imagen tiene una relación de aspecto incorrecta para el contenedor.

	
	1. La imagen debe llenar completamente el cuadro, manteniendo la relación de aspecto y recortando cualquier exceso en el lado que es demasiado grande para caber.
	
	2. La imagen debe caber dentro del cuadro, con el fondo visible como barras en el lado demasiado pequeño.

	3. La imagen debe llenar el cuadro y estirarse, lo que puede significar que se muestra con una relación de aspecto incorrecta.
	
	
	object-fit hace posible cada uno de estos enfoques.
	
	```
	.wrapper {
	height: 200px;
	display: flex;
	gap: 20px;
	
	}

	.box {
	  border: 5px solid #000;
	}

	.box img {
	  width: 100%;
	  height: 100%;
	}

	.box1 img {
	  object-fit: cover;
	}

	.box2 img {
	  object-fit: contain;
	}

	.box3 img {
	  object-fit: fill;
	}
	
	```


|| Estilo a las cajas

	Un repaso a las propieades que pueden servirnos. 
	
	Crear cajas elegantes consiste en dominar las propiedades de border y background
	
	```	
	<div class="fancy">Hi! I want to be fancy.</div>
	
	```

	Para manipular esta caja tenemos que tener en cuenta las propiedaes: 
	
		1. box model properties: 
			
			width, height, padding, border, etc.
		
		
		2. background properties: 
			
			background, background-color, background-image, background-position, background-size, etc.

		3. pseudo-element: ::before and ::after


		4. aside properties: 
		
			shadow, rotate, outline, etc. 
			
		
	Ajustes en Model Box: 
		
		Desde  cosas básicas, como agregar bordes simples, crear cuadrados, etc
		
		Hasta relleno negativo y/o un margen al tener un radio de borde mayor que el tamaño real de la caja.

		
		Circulos: 
		
			La propiedad border-radius está diseñada para crear una esquina redondeada 
			
			¿qué sucede si el tamaño del radio es igual o mayor que el ancho real de la caja?
			
			
			```
			.fancy {
			/* Dentro de un círculo, el texto centrado se ve más bonito. */
			text-align: center;

			/* Evitemos que nuestro texto toque el borde. Como
			nuestro texto seguirá fluyendo en un cuadrado, se ve
			mejor de esa manera, dando la sensación de que es un círculo "real". */
			padding: 1em;

			/* El borde hará que el círculo sea visible.
			También puedes usar un fondo, ya que
			los fondos se recortan por el radio del borde */
			border: 0.5em solid black;

			/* Asegurémonos de que tenemos un cuadrado.
			Si no es un cuadrado, obtendremos una elipsis en
			lugar de un círculo */
			width: 4em;
			height: 4em;

			/* y convirtamos el cuadrado en un círculo */
			border-radius: 100%;
			}
		
			```
			
			
		Fondos: 

			Se deben manejar son las propiedades background-*.
	
			Es posible configurar varios fondos en un solo cuadro. Se apilan uno sobre el otro como capas.

			Pueden ser colores sólidos o imágenes.
			
			El color sólido siempre llena toda la superficie.
			
			Las imágenes se pueden escalar y posicionar.

			```
			.fancy {
			padding: 1em;
			width: 100%;
			height: 200px;
			box-sizing: border-box;

			/* En la parte inferior de nuestra pila de fondo,
			tengamos un color sólido gris brumoso */
			background-color: #e4e4d9;

			/* Apilamos degradados lineales uno sobre otro
			para crear nuestro efecto de franja de color.
			Como notarás, los gradientes de color se consideran imágenes y se pueden manipular como tales */
			background-image: linear-gradient(175deg, rgb(0 0 0 / 0%) 95%, #8da389 95%),
			linear-gradient( 85deg, rgb(0 0 0 / 0%) 95%, #8da389 95%),
			linear-gradient(175deg, rgb(0 0 0 / 0%) 90%, #b4b07f 90%),
			linear-gradient( 85deg, rgb(0 0 0 / 0%) 92%, #b4b07f 92%),
			linear-gradient(175deg, rgb(0 0 0 / 0%) 85%, #c5a68e 85%),
			linear-gradient( 85deg, rgb(0 0 0 / 0%) 89%, #c5a68e 89%),
			}
						
			```
			
	Pseudo Elementos: 
		
		Al diseñar un único cuadro, es posible que te sientas limitado y desees tener más cuadros
	
		Eso puede llevar a contaminar el DOM al agregar elementos HTML adicionales con el único propósito de crear estilos
		
		Una solución es usar pseudo elementos. 
		
		
		Cloud: 
		
			```
			.fancy {
			text-align: center;

			/* El mismo truco que se utilizó anteriormente para hacer círculos */
			box-sizing: border-box;
			width: 150px;
			height: 150px;
			padding: 80px 1em 0 1em;

			/* Dejamos lugar para las "orejas" de nuestra nube */
			margin: 0 100px;

			position: relative;

			background-color: #a4c9cf;

			/* Bueno, en realidad no estamos haciendo un círculo completo
			ya que queremos que la parte inferior de nuestra nube sea plana.
			Siéntete libre de modificar este ejemplo para hacer una nube
			que no sea plana en la parte inferior ;) */
			border-radius: 100% 100% 0 0;
			}

			/* Esos son estilos comunes que se aplican a nuestros pseudoelementos ::before
			y ::after. */
			.fancy::before,
			.fancy::after {
			/* Esto es necesario para poder mostrar los pseudoelementos, incluso si el valor es una cadena vacía
			*/
			content: "";

			/* Posicionamos nuestros pseudoelementos en los lados izquierdo y derecho de la caja, pero siempre en la parte inferior */
			position: absolute;
			bottom: 0;

			/* Esto asegura que nuestros pseudoelementos estarán debajo
			del contenido de la caja pase lo que pase. */
			z-index: -1;

			background-color: #a4c9cf;
			border-radius: 100%;
			}

			.fancy::before {
			/* Este es el tamaño de la oreja izquierda de las nubes */
			width: 125px;
			height: 125px;

			/* Lo movemos ligeramente hacia la izquierda */
			left: -80px;

			/* Para asegurarnos de que la parte inferior de la nube
			permanezca plana, debemos hacer que la esquina inferior derecha
			de la oreja izquierda sea cuadrada. */
			border-bottom-right-radius: 0;
			}

			.fancy::after {
			/* Este es el tamaño de la oreja izquierda de la nube */
			width: 100px;
			height: 100px;

			/* La movemos ligeramente hacia la derecha */
			right: -60px;

			/* Para asegurarnos de que la parte inferior de la nube
			permanezca plana, debemos hacer que la esquina inferior izquierda
			de la oreja derecha sea cuadrada. */
			border-bottom-left-radius: 0;
			}
					
			```
			
			
		Blockquote:
		
			Con los pseudoelementos podemos crear un formato atractivo para los elementos HTML <blockquote>
			
			```
			<blockquote>
			  People who think they know everything are a great annoyance to those of us who
			  do. <i>Isaac Asimov</i>
			</blockquote>
			
			<blockquote lang="fr">
			  L'intelligence, c'est comme les parachutes, quand on n'en a pas, on s'écrase.
			  <i>Pierre Desproges</i>
			</blockquote>
		
			```
			
			```
			blockquote {
			  min-height: 5em;
			  padding: 1em 4em;
			  font: 1em/150% sans-serif;
			  position: relative;
			  background-color: lightgoldenrodyellow;
			}

			blockquote::before,
			blockquote::after {
			  position: absolute;
			  height: 3rem;
			  font:
				6rem/100% Georgia,
				"Times New Roman",
				Times,
				serif;
			}

			blockquote::before {
			  content: "“";
			  top: 0.3rem;
			  left: 0.9rem;
			}

			blockquote::after {
			  content: "”";
			  bottom: 0.3rem;
			  right: 0.8rem;
			}

			blockquote:lang(fr)::before {
			  content: "«";
			  top: -1.5rem;
			  left: 0.5rem;
			}

			blockquote:lang(fr)::after {
			  content: "»";
			  bottom: 2.6rem;
			  right: 0.5rem;
			}

			blockquote i {
			  display: block;
			  font-size: 0.8em;
			  margin-top: 1rem;
			  text-align: right;
			}

			```


	Aplicar todo junto: 
	
		Es posible crear un efecto maravilloso cuando mezclamos todo esto. En algún momento, lograr ese embellecimiento de los cuadros es una cuestión de creatividad, tanto en el diseño como en el uso técnico de las propiedades CSS.

		Al hacer esto, es posible crear ilusiones ópticas que pueden darle vida a los cuadros, como en este ejemplo. 
		
		```
		.fancy {
		  position: relative;
		  background-color: #ffc;
		  padding: 2rem;
		  text-align: center;
		  max-width: 200px;
		}

		.fancy::before {
		  content: "";

		  position: absolute;
		  z-index: -1;
		  bottom: 15px;
		  right: 5px;
		  width: 50%;
		  top: 80%;
		  max-width: 200px;

		  box-shadow: 0px 13px 10px black;
		  rotate: 4deg;
		}
		
		```
		
		Creemos algunos efectos de sombra parcial. 
		
		La propiedad box-shadow nos permite crear luz interior y un efecto de sombra plana, pero con un poco de trabajo adicional es posible crear una geometría más natural utilizando un pseudoelemento y la propiedad rotate, una de las tres propiedades de transformación individuales.
		


|| Elementos Semitransparentes

	Se usa la propiedad opacity y el canal alpha de los valores de la propiedad color. 
	
	Hacer que un cuadro sea semitransparente mediante CSS.
	
	Cambiar la opacidad del cuadro y el contenido
	
	
	1. Si desea que el cuadro y todo su contenido cambien de opacidad:
	
		La opacidad es lo opuesto a la transparencia
		
		```
		opacity: 1; 
		
		```
		
		Es completamente opaco; no verá a través del cuadro en absoluto.
		
	
		```
		opacity: 0; 

		```
		
		Haría que el cuadro sea completamente transparente
		
		Se usan esos dos valores. 
		
		Los valores más altos darán menos transparencia.
	
		
	2. Cambiar solo la opacidad del color de fondo:
	
		Solo querrá hacer que el color de fondo sea parcialmente transparente, manteniendo el texto y otros elementos completamente opacos.
		
		Use un valor <color> que tenga un canal alfa, como rgb(). 
		 
		Al igual que con la opacidad, un valor de 1 para el canal alfa hace que el color sea completamente opaco.
		
		```
		background-color: rgb(0 0 0 / 50%);
		
		```
		
		Establecerá el color de fondo con una opacidad del 50 %.
		
		
		Ej: 
		
		```
		.box1 {
		  background-color: #000;
		  color: #fff;
		  opacity: .7;
		}

		.box2 {
		  background-color: rgb(0 0 0 / .3);
		  color: #fff;
		}
		
		```
		
		Cuidar que su texto mantenga suficiente contraste con el fondo en los casos en que superponga una imagen; de lo contrario, puede dificultar la lectura del contenido.
	


# Styling Text


|| Agregar Sombra al Texto

	Se usa la propiedad text-shadow.
	
	Añade una sombra paralela al texto dentro del cuadro.
	
	
	Toma valores para: 
	
		Desplazamiento en el eje X (offset)
		
		Desplazamiento en el eje y
		
		Radio de desenfoque (blur)
		
		Color
		
	
	Ej: 
	
		Desplazamiento del eje x en 2 px
		
		Desplazamiento del eje y en 4 px
		
		Radio de desenfoque en 4 px
		
		Color en un azul semitransparente. 
	
		```
		h1 {
		  color: royalblue;
		  text-shadow: 2px 4px 4px rgb(46 91 173 / 0.6);
		}
		
		```
		
		Asegúrese de que las opciones que elija permitan que el texto siga siendo legible y proporcionen suficiente contraste de color 



|| Resaltar la Primera Línea de un Parrafo

	Se usa el pseudoelemento ::first-line
	
	
	1. Desea hacer que la primera línea de un párrafo sea más grande y esté en negrita:
	
		Si envuelve la primera línea con un <span>.
		
		Podrá darle estilo; pero, si la primera línea se acorta debido a un tamaño de ventana gráfica más pequeño
		
		El texto con estilo se ajustará a la siguiente línea.
	
	
	2. Un pseudoelemento puede reemplazar al <span>:
	
		Es más flexible: el contenido exacto seleccionado por un pseudoelemento se calcula una vez que el navegador ha representado el contenido.
		
		Funcionará incluso si cambia el tamaño de la ventana gráfica.

		Necesitamos usar el pseudoelemento ::first-line. 
	
		Selecciona la primera línea formateada de cada párrafo, lo que significa que puede darle el estilo que desee.
		
		```
		.wrapper p::first-line {
		  font-weight: bold;
		  font-size: 130%;
		}
		
		```
	
		Todos los pseudoelementos actúan de esta manera. 
		
		Se comportan como si hubieras insertado un elemento en el documento, pero lo hacen de forma dinámica en función del contenido tal como se muestra en tiempo de ejecución.


	3. Combinación de pseudoelementos con otros selectores:
	
		El pseudoelemento selecciona la primera línea de cada párrafo. 
		
		Para seleccionar solo la primera línea del primer párrafo, puede combinarlo con otro selector
	
		Utilizamos la pseudoclase :first-child.
		
		Permite seleccionar la primera línea del primer elemento secundario de .wrapper si ese primer elemento secundario es un párrafo.
		
		```
		.wrapper p:first-child::first-line {
		  font-weight: bold;
		  font-size: 130%;
		}
		
		```
		
		Nota: Al combinar pseudoelementos con otros selectores en un selector complejo o compuesto 
		
		Los pseudoelementos deben aparecer después de todos los demás componentes en el selector en el que aparecen.
	
	
	
|| Resaltar el Primer Parrafo

	Se usa la pseudoclase :first-child.
	
	Para resaltar el primer párrafo dentro de un contenedor.


	1. Dar estilo al primer párrafo:
	
		Hacer que el primer párrafo sea más grande y esté en negrita.
		
		Puede agregar una clase al primer párrafo y seleccionarlo de esa manera.
		
		
	2. Usar un selector de pseudoclase es más flexible:
	
		Puede seleccionar el párrafo según su ubicación en el documento y no tendrá que mover la clase manualmente si cambia el orden de origen.

		Una pseudoclase actúa como si hubiera aplicado una clase. 
		
		En lugar de usar un selector de clase, CSS selecciona según la estructura del documento.
	
		Hay varias pseudoclases diferentes que pueden seleccionar diferentes cosas.
		
		Como :first-child. 
		
		Seleccionará el elemento que es el primer elemento secundario de un elemento principal.
		
		```
		.wrapper p:first-child {
		  font-weight: bold;
		  font-size: 130%;
		}
		
		```
		
		Si usamos :last-child seleccionará el último párrafo.

		Siempre que necesite seleccionar algo en su documento, puede verificar si una de las pseudoclases disponibles puede hacerlo por usted.



|| Resaltar Parrafo después de un Encabezado
	
	Los combinadores pueden ayudarte a identificar con precisión los elementos en función de su ubicación en el documento.
	
	Podemos usarlos para aplicar CSS a un párrafo solo si aparece inmediatamente después de un encabezado.
	
	
	Un patrón común es aplicar un estilo diferente al primer párrafo de un artículo a los que vienen después.
	
	Este primer párrafo aparecerá justo después de un encabezado y, si este es el caso en su diseño, puede usar esa combinación de elementos para orientar el párrafo.
	
	
	Combinador de siguiente elemento:
		
		CSS tiene un grupo de selectores CSS que se conocen como combinadores
		
		Seleccionan elementos en función de una combinación de selectores.
	
		Como lo es el selector combinador de siguiente elemento. 
		
		Selecciona un elemento en función de si está junto a otro elemento. 
	
	
		Si en un HTML tenemos un h1 seguido de un <p>. 
	
		El <p> es el siguiente elemento hermano del <h1>
		
		Por lo que podemos seleccionarlo con h1 + p
	
		```
		.wrapper h1+p {
		  font-weight: bold;
		  font-size: 130%;
		  color: rebeccapurple;
		}
		
		```



# CSS Layout


|| Centrar un elemento
	
	Centrar un elemento dentro de otro cuadro de forma horizontal y vertical 
	
	Flexbox lo hace más sencillo.
	
	
	Centrar un cuadro dentro de otro:
	
		Deberá usar las propiedades de alineación de cuadro CSS en el contenedor principal.

		Las propiedades de alineación (Box Alignement) aún no tienen compatibilidad con el navegador para el diseño en bloque y en línea.
		
		Deberá convertir el contenedor principal en un contenedor flexible o de cuadrícula para activar la capacidad de usar la alineación.
	
		Ej. Dar al contenedor principal display: flex; luego, establecemos justify-content en center para alinearlo horizontalmente y align-items en center para alinearlo verticalmente.
		
		```
		.wrapper {
		  height: 300px;
		  display: flex;
		  align-items: center;
		  justify-content: center;
		}
		
		<div class="wrapper">
		  <div class="box">center me!</div>
		</div>
				
		```
		
		Puedes usar esta técnica para realizar cualquier tipo de alineación de uno o más elementos dentro de otro. 
		
		En el ejemplo anterior, puedes intentar cambiar los valores a cualquier valor válido para justify-content y align-items.





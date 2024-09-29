#HTML
 
|| HTML

	|| Audio:
		
		```
		<audio controls>
		  <source src="viper.mp3" type="audio/mp3">
		  <source src="viper.ogg" type="audio/ogg">
		  <p>Your browser doesn't support HTML5 audio. 
		  Here is a <a href="viper.mp3">link to the audio</a> 
		  instead.</p>
		</audio>
		
		```


	|| Código programación: 
		
		```
		<pre>
			<code>
			var for = document.querySelector('p');

			for.onclick = function() {
			  alert('¡Guau!, ¡deja de apretar!');
			}
			</code>
		</pre>

		<code>&lt;font&gt;</code>

		<var>for</var>

		<kbd>Ctrl</kbd>/<kbd>Cmd</kbd>

		<pre>
			$ <kbd>ping mozilla.org</kbd>
			<samp>
			PING mozilla.org (63.245.215.20): 56 bytes de datos
			64 bytes de 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms
			</samp>
		</pre>
		
		```
	
	|| Dirección de contacto:
			
			```
			<address>
			  <p>Dirección de contacto:</p>
			  <ul>
			    <li>Tel: 01234 567 890</li>
			    <li>Email: me@grim-north.co.uk</li>
			  </ul>
			</address>
			
			```

	|| Enlace de descarga:
		Se usa para darle un nombre al archivo que el usuario
		va a descargar
		
		```
		<a
		  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=es-MX"

		  download="firefox-latest-64bit-installer.exe">
		  Descarga la última versión de Firefox para Windows (64 bits) (Español, es-MX)
		</a>
		
		```
	
	|| Fecha y hora:
	
		```
		Fecha simple estándar 
		<time datetime="2016-01-20">20 Enero 2016</time>

		Solo año y mes 
		<time datetime="2016-01">Enero 2016</time>

		Solo mes y día 
		<time datetime="01-20">20 Enero 2016</time>

		Solo tiempo, horas y minutos 
		<time datetime="19:30">19:30</time>

		¡También puedes hacer segundos y milisegundos!
		<time datetime="19:30:01.856">19:30:01.856</time>

		Fecha y hora
		<time datetime="2016-01-20T19:30">7.30pm, 20 Enero 2016</time>

		Fecha y hora con desplazamiento de zona horaria
		<time datetime="2016-01-20T19:30+01:00"
		>7.30pm, 20 Enero 2016 es 8.30pm en Francia</time>

		Llamar a un número de semana específico
		<time datetime="2016-W04">La cuarta semana de 2016</time>
		
		```

	|| Formulario de busqueda (no lineal): 
		
		```
		<nav>	
			<form>
        		<input type="search" name="q" placeholder="Buscar" />
        		<input type="submit" value="¡Vamos!" />
      		</form>
      	</nav>
      	
      	```


	|| Imágenes:

		Imagen:
		
		```
		<figure>
		  <img src="images/dinosaur.jpg"
		  alt="La cabeza y el torso de un esqueleto de dinosaurio; tiene una cabeza grande con dientes largos y afilados" 
		  width="400"
		  height="341">
		  <figcaption>
		  Exposición de un T-Rex en el museo de la Universidad de Manchester.
		  </figcaption>
		</figure>
		
		```

	    Imagen con enlace:
	    
	    ```
		<a href="https://developer.mozilla.org/">
		  <img src="mdn-logo-sm.png" alt="MDN"></a>
		  title="Logo del navegador Mozilla Firefox".
		</a>
		
		```

		Imagenes responsivas HTML:

			imagenes responsivas:
			
			```
			<img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     		 sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
             src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
			
			```
			
			zoom y fallback (src):
			
			```
			<img srcset="elva-fairy-320w.jpg,
             elva-fairy-480w.jpg 1.5x,
             elva-fairy-640w.jpg 2x"
     		 src="elva-fairy-640w.jpg" alt="Elva dressed as a fairy">
			
			```
			
			dirección de imagen:
			
			```
			<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
				
			<picture>
			  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
			  <source media="(min-width: 800px)" srcset="elva-800w.jpg">
			  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
			</picture>
			
			```

			formatos modernos:
			
			```
			<picture>
			  <source type="image/svg+xml" srcset="pyramid.svg">
			  <source type="image/webp" srcset="pyramid.webp">
			  <img src="pyramid.png" alt="regular pyramid built from four equilateral triangles">
			</picture>
			
			```
	
	|| Incrustar:
	
		```
		<object type="application/pdf"
		    data="/media/examples/In-CC0.pdf"
		    width="250"
		    height="200">
		</object>	
		
		<embed
		  type="video/quicktime"
		  src="movie.mov"
		  width="640"
		  height="480"
		  title="Title of my video" />

		<iframe src="https://developer.mozilla.org/en-US/docs/Glossary"
			width="100%" height="500" frameborder="0"
			allowfullscreen sandbox>
			<p> <a href="https://developer.mozilla.org/en-US/docs/Glossary">
			Fallback link for browsers that don't support iframes
			</a> </p>
	    </iframe>
		
		```

	|| Lenguaje:
		
		```
		<html lang="es-MX"></html>
		<p>Ejemplo Japonés: <span lang="ja">ご飯が熱い。</span>.</p>
		
		```

	|| Lista descriptiva:
	
		```
		<dl>
			<dt>Titulo</dt>
				<dd>descripción/parrafo</dd>
		</dl>
		
		```
		
	|| Validar HTML, CSS: 
	
		```
		https://validator.w3.org/
		
		```

	|| Video:
		
		```
		<video controls width="400" height="400"
		  autoplay loop muted
		  poster="poster.png">
		  <source src="rabbit320.mp4" type="video/mp4">
		  <source src="rabbit320.webm" type="video/webm">
		  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
		</video>
		
		```

		subs:
		
		```
		<video controls>
		    <source src="example.mp4" type="video/mp4">
		    <source src="example.webm" type="video/webm">
		    <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
		</video>
		
		```


	|| Texto y Resaltado:
	
		abreviatura:
		
			```
			<abbr title="Lenguaje de marcado de hipertexto">HTML</abbr> 
			
			```
			
		enfasis ligero y fuerte (advertencia, etc): 
			
			```
			<em></em> y <strong></strong>
			
			```
			
 		resaltado visual sin importancia en la semantica/interpretación del navegador:
			
			```
 			<i>cursiva/italica</i>, <b>negrita</b> y <u>subrrayado</u>
			
			```
			
 		citas:
			
			```
 			<blockquote	cite="https://developer.mozilla.org/es/docs/Web/HTML/Element/blockquote">
			<p> indica que el texto al que delimita es una cita ampliada. </p>
			</blockquote>
			
			<q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"> 
			utiliza en para citas breves que no requieren saltos de párrafo.</q>	
			
			<cite>página de MDN</cite>
			
			```
			
		subíndice y superíndice:
		
			```
			<p>Si x<sup>2</sup> es 9, x debe ser igual 3 o -3.</p>

			<p>
			  La fórmula química de la cafeína es
			  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
			</p>
			
			```

	|| Svg:
		
		```
		<img
		src="equilateral.svg"
		alt="triangle with all three sides equal"
		height="87"
		width="100" />

		fallback:
		<img src="equilateral.png" alt="triangle with equal sides" 
		srcset="equilateral.svg">
		
		```

	|| Tablas:
	
	Tabla con filas y columnas:
	

	<table>
        <tr> <!-- una fila-->
            <td>musica</td> <!-- tres columnas-->
            <td>vida</td>
            <td>champagne</td>
        </tr>
    </table>
    
   
    

    Indicar si cada columna(td) sea un titulo en la tabla. Usando la etiqueta th:
	

    <table>
        <tr> <!-- una fila-->
            <th>musica</th> <!-- tres columnas-->
            <th>vida</th>
            <th>champagne</th>
        </tr>
    </table>
    
  
	


#CSS

	|| Cascada, Especificidad, Important! y Layers (capas de CSS):
		
		En la cascada, las reglas más especificas se sobreponen a las
		menos especificas sin importar el orden en la hoja de estilo.
		Puede haber reglas que compiten por dar estilo a un 
		mismo elemento con algunas propiedades. 
		La única forma de anular una declaración !important 
		es incluir otra declaración !important.

		    <p class="better">This is a paragraph.</p>
            <p class="better" id="winning">One selector to rule them all!</p>
                
             #winning {
                background-color: red;
                border: 1px solid black;
            }
                    
            .better {
                background-color: gray;
                border: none !important;
            }
                    
            p {
              	background-color: blue;
                color: white;
                padding: 5px;
            } 

		Las capas de cascada funcionan con at-rule <em>@layer</em>.	
		Cuando declaramos CSS en capas en cascada, 
		el orden de precedencia (importancia al aplicar estilo)
		está determinado por el orden en que se declaran las capas. 
		Los estilos CSS declarados fuera de cualquier capa 
		se combinan, en el orden en que se declaran esos estilos, 
		en una capa sin nombre, como si fuera la última capa declarada.

		Los estilos con capas !important tienen 
		prioridad sobre los estilos !important declarados en capas
		posteriores, nuevamente, sin importar la especificidad.

		La especificidad entre capas no importa, pero la especificidad 
		entro de una sola capa sí lo es.


		    <p id="addSpecificity">
            A paragraph with a border and background
            </p>    

            @layer firstLayer, secondLayer;

            p {  0-0-1 
                background-color: red;
                color: grey !important;
                border: 5px inset purple;
            }
          	
          	p#addSpecificity {  1-0-1 
                border-style: solid !important;
            }

           	@layer firstLayer {
            	#addSpecificity {  1-0-0 
                    background-color: blue;
                    color: white !important;
                    border-width: 5px;
                    border-style: dashed !important;
                }
            }

            @layer secondLayer {
                p#addSpecificity { 1-0-1 
                    background-color: green;
                   	color: orange !important;
                    border-width: 10px;
                   	border-style: dotted !important;
                }
            } 


	|| Herencia (inheritance): 
       
        A los elementos que estén dentro de otro se le aplicarán
        las mismas propiedades, pero a otros no. No se heredaran
        propiedades si el elemento hijo tiene las suyas.
		
		Ej: La propiedad de color es una propiedad heredada. 
		Por lo tanto, el valor de la propiedad de color se aplica
		a los <em>hijos directos</em> y también a los hijos indirectos:
		los <em>hijos inmediatos</em> li y los que están dentro de la
		primera lista anidada.

		En la especificación de las propiedades se ve cual tiene herencia. 
		En el inspector de código podemos ver las propiedades heredadas
		en cada elemento.

		Valores:
		    
		    inherit
            Permitido en todas las propiedades CSS. 
            Hace que el elemento al cual se aplica tome el valor
            calculado de la propiedad de su elemento padre 
            Si hay un elemento hijo con la misma especificidad 
            se aplicará las que tenga definida y en orden a la 
            cascada.

            initial
            Se puede aplicar a un elemento seleccionado tenga 
            el mismo valor que esté establecido para esa
            propiedad en la hoja de estilo por defecto del 
            navegador. Fuerza la utilización del valor inicial 
            de la propiedad para el elemento seleccionado.

            unset
            Este valor restablece la propiedad a su condición
             natural, si no es heredable, será inicial.

            revert
            Este valor actuá como el valor unset (restablece valor natural) 
            en muchos casos. También puede establecer los valores de 
            estilo del navegador.

            all
            Es una propiedad que puede tomar los valores anteriores 
            para restablecer el estilo que tenia el elemento antes
            de hacer cambios (funciona para casi todos las propiedades
            de estilo que se tenían aplicados).

            body {
                color: green;
            }
                              
            .my-class-1 a {
                color: inherit; hereda color green de su padre
            }
                              
            .my-class-2 a {
                color: initial; hereda su color inicial del navegador
            }
                              
            .my-class-3 a {
                color: unset; hereda color del elemento principal
            }
            
            .fix-this {
                all: unset; resetea las propiedades 
                			a su valor original 
            }					


	|| Selectores:

		Lista de selectores:
			h1, .special {
			  color: blue;
			}

			h1,
			.special {
			  color: blue;
			}
		
		Tipos de selectores:
		De tipo/etiqueta: h1
		De clase: .clase
		De id: #id;

		Selector de atributo
            a[title] {
            }
			
			a[href="https://example.com"]{}			
			
		Selectores de (:)Pseudoclases y (::)pseudoelementos
        La pseudoclase aplican estilo a ciertos estados de un 
        elemento según qué valor tenga la propiedad.
        El pseudoelemento selecciona cierta parte de un elemento
        en vez de darle estilo a todo en conjunto.

            a:hover {
            }

            p::first-line {
            }

		Selector hermano adyacente:
    	párrafo después de titulo: en un mismo nivel de jerarquía

        	h1 + p {
          	font-size: 200%;
        	}
		

		Selectores y combinación:
		
		adyacente (+) e hijo (espacio):

		Selecciona cualquier elemento span que se encuentre dentro 
		de un párrafo, que esté dentro de un articulo:
		se invoca al elemento padre espacio hijo; p span

        	article p span {
       			background-color: green;
        	}

		Selecciona cualquier p que se encuentre directamente
		después de ul, que va directamente después de h1:
		tiene que estar en la misma jerarquía

        	h1 + ul + p {
        		color: blue;
        	}

    	Combinación de estas dos técnicas: clase dentro de p que 
    	venga después de h1 que se encuentre dentro de body

        	body h1 + p .special {
          		color: yellow;
          		background-color: black;
          		padding: 5px;
        	}
		
		Seleciona hijos directos:

            article > p {
            }
        
        Selector universal (*):
			*h1 {
				}
		
		Selectores de atributo:
        Los elementos/etiquetas del HTML pueden tener atributos, proporcionan 
        un nivel de profundidad mayor para aplicar estilo.
            
        a (link) con el atributo title:

            a[title] {
               color: purple;
            }

        a con atributo href tiene que coincidir con 
        el valor: "https://example.org":

            a[href="https://example.org"]{
                  color: green;
                }

        Link con href tienen que tener la palabra  "example": 
           
            a[href*="example"] {
                font-size: 2em;
            }

        a con href tiene que terminar con la palabra ".org": 
               
         	a[href$=".org"] {
                font-style: italic;
            }

        a con la clase que contenga "logo":
            a[class~="logo"] {
                padding: 2px;
          	}


		Selector descendiente (un espacio):
        selecciona nodos que son descendientes (directos y no directos) del primer elemento.

            li descendientes de la clase "my-things" list 
                
                ul.my-things li {
                margin: 2em;
                }

   		Selector hijos directo (>):
        selecciona nodos que son hijos directos del primer elemento
            
            li que son hijos de la clase "my-things" list

                ul.my-things > li {
                   margin: 2em;
                }
		
		
		Minúscula y mayúscula:

        Con el carácter i después del valor del atributo
        (ejemplo, atributo="x" i), le decimos al navegador 
        que tome los valores escritos en mayus y minus.

            a[href*="insensitive" i] {
                color: cyan;
            }

		Que coincida/respete tal cual las mayus y minus:

            a[href*="cAsE" s] {
                color: pink;
            }

        Selector de atributos con valores de inicio y fin:
        Por ejemplo, cuando inicia con numeral
            
            a[href^="#"] {
                background-color: gold;
            }

        Cuando termina, por ejemplo; con la palabra .org, usamos:
              
            
            a[href$=".org"] {
                color: red;
            }
	

	|| Pseudoclase(:):
		
		Para Display:
		Selecciona elementos según su estado de visualización

			:fullscreen
			Para elemento en pantalla completa
				
			:modal
			Elemento que se encuentra en un estado en el que 
			excluye toda interacción con elementos fuera de 
			él hasta que se descarte la interacción.

			:picture-in-picture
			Elemento en modo picture-in-picture


		Para Input:
		se relacionan con elementos de formulario y permiten 
		seleccionar elementos en función de los atributos HTML 
		y el estado en el que se encuentra el campo antes y
		después de la interacción.

			:autofill
			Coincide cuando un <input> ha sido autocompletado
			por el navegador.

			:enabled
			Para elemento de interfaz de usuario que está en un
			estado deactivado
			
			:disabled
			Elemento de la interfaz de usuario que se encuentra en 
			un estado deshabilitado.

			:read-only
			Representa cualquier elemento que no puede ser editado 
			por el usuario.
			
			:read-write
			Para elemento que puede ser editado por el usuario.
			
			:placeholder-shown
			Para elemento input que muestra texto de ejemplo/muestra/sombra. 
			Por ejemplo, coincidirá con el atributo/valor de muestra  
			en los elementos <input> y <textarea>.

			:default
			Uno o más elementos de la interfaz de usuario que
			son los predeterminados entre un conjunto de 
			elementos.

			:checked
			Cuando elementos como casillas de verificación (checkboxes) y 
			botones de opción están activados.

			:indeterminate
			Elementos de la interfaz de usuario cuando están
			en un estado indeterminado

			:blank
			Elemento de input-user que está vacío, que contiene
			una cadena vacía (string) u otra entrada nula (null input).

			:valid
			Elemento con contenido válido. Por ejemplo, un elemento
			de entrada con el tipo 'correo electrónico' 
			que contiene una dirección de correo electrónico 
			formada de forma válida o un valor vacío si no se 
			requiere el control.

			:invalid
			Elemento con contenido no válido. Por ejemplo, un elemento 
			de entrada con el tipo 'correo electrónico' con un nombre 
			ingresado.

			:in-range
			Se aplica a elementos con limitaciones de rango. Por ejemplo, 
			un control deslizante (slider-control) cuando el valor seleccionado está en el
			rango permitido.

			:out-of-range
			A elementos con limitaciones de rango. Por ejemplo, 
			un control deslizante cuando el valor seleccionado 
			está fuera del rango permitido.

			:required
			Cuando se requiere un elemento de formulario.

			:optional
			Cuando un elemento de formulario es opcional.

			:user-invalid
			Elemento con entrada incorrecta, pero solo 
			cuando el usuario ha interactuado con él.


		Para lingüística:
		Reflejan el idioma del documento y permiten la selección
		de elementos según el idioma o la dirección del script.

			:dir()
			Selecciona un elemento en función de su direccionalidad
			determinada por el idioma del documento.


			:lang()
			Selecciona un elemento en función del idioma de su contenido.
			

		Para location (ubicación/hover):
		Se relacionan con enlaces y elementos específicos dentro del documento actual.

			:any-link
			Si el elemento o enlace coincidiría con :enlace o :visitado.

			:link
			Enlaces que aún no han sido visitados.
		
			:visited
			Enlaces que han sido visitados.

			:local-link
			Enlaces cuya URL absoluta es la misma que la URL
			de destino. Por ejemplo, ancla enlaces a la misma página.

			:target
			Elemento que es el destino de la URL del documento.

			:target-within
			Elementos que son el destino de la URL del documento, 
			pero también con elementos que tienen un descendiente 
			que es el destino de la URL del documento.

			:scope
			Elementos que son un punto de referencia para que los 
			selectores coincidan.


		Para estados de recursos (multimedia, video, etc):
		Se aplican a los medios que pueden estar en un estado 
		en el que se describiría como reproducción, como un video.
		
			:playing
			Cuando se está reproduciendo un elemento multimedia que es capaz de reproducirse.

			:paused
			elemento multimedia cuando este en pausa.


		Time-dimension: 
		Cuando algo tiene tiempo, como puede ser una pista de subtitulos
		WebTT

			:current
			Representa el elemento o antecesor del elemento que 
			se muestra.

			:past
			Representa un elemento que ocurre completamente 
			antes del elemento :current.

			:future
			Representa un elemento que ocurre completamente
			después del elemento :current.


		DOM document tree:
		Se relacionan con la ubicación de un elemento dentro 
		del árbol del documento (código fuente)

			:root
			Representa un elemento que es la raíz del documento. 
			En HTML, este suele ser el elemento <html>.

			:empty
			Elemento sin elementos secundarios que no sean
			caracteres de espacio en blanco.

			:nth-child
			Utiliza la notación An+B para seleccionar elementos
			de una lista de elementos hermanos.

			:nth-last-child
			Utiliza la notación An+B para seleccionar elementos 
			de una lista de elementos hermanos, contando hacia 
			atrás desde el final de la lista.

			:first-child
			Elemento que es el primero de sus hermanos.
			
			:last-child
			Elemento que es el último de sus hermanos.

			:only-child
			Elemento que no tiene hermanos. Por ejemplo, un elemento de lista
			sin otros elementos de lista en esa lista.
			
			:nth-of-type
			Usa la notación An+B para seleccionar elementos de una lista de 
			elementos hermanos que coinciden con un determinado 
			tipo de una lista de elementos hermanos.

			:nth-last-of-type
			Notación An+B para seleccionar elementos de una lista 
			de elementos hermanos que coinciden con un determinado
			tipo de una lista de elementos hermanos que cuentan hacia atrás desde el final de la lista.

			:first-of-type
			Elemento que es el primero de sus hermanos y también coincide con un determinado selector de tipo.

			:last-of-type
			Elemento que es el último de sus hermanos y también coincide con un determinado selector de tipo.

			:only-of-type
			Elemento que no tiene hermanos del selector de tipo elegido.
	

		Para user-action:
		Requieren cierta interacción por parte del usuario para
		que se apliquen, como mantener el puntero del mouse
		sobre un elemento.

			:hover (flotar)
			Usuario designa un elemento con un dispositivo señalador, 
			como mantener el puntero del mouse sobre el elemento.

			:active
			Elemento está siendo activado por el usuario. 
			Por ejemplo, cuando se hace clic en el elemento.

			:focus
			Cuando un elemento tiene foco.

			:focus-visible
			Elemento tiene el foco y el agente de usuario identifica 
			que el elemento debe estar visiblemente enfocado.

			:focus-within
			elemento al que se aplica :focus, más cualquier elemento
			que tenga un descendiente al que se aplica :focus.


		Funcionales:
		Aceptan una lista de selectores o una lista de selectores
		indulgentes (aceptados) como parámetro.

			:is()
			Cualquier elemento que coincida con cualquiera de los 
			selectores de la lista proporcionada. La lista es indulgente.
	
			:not()
			Representa cualquier elemento que no esté representado por su argumento.

			:where()
			Cualquier elemento que coincida con cualquiera de los selectores 
			de la lista proporcionada sin agregar ningún peso de especificidad. La lista es indulgente.

			:has()
			Elemento si alguno de los selectores relativos coincide cuando se ancla contra el elemento adjunto.


	|| Pseudoelementos (::):
		
		::after

		::backdrop

		::before

		::cue

		::cue-region

		::first-letter

		::first-line

		::file-selector-button

		::grammar-error (experimental, aprob a futuro)

		::marker

		::part()

		::placeholder

		::selection

		::slotted()

		::spelling-error (experimental, aprob a futuro)

		::target-text (experimental, aprob a futuro)



	|| Box Model

		Caja en bloque:
			Fuerza un salto de linea al llegar al final de la linea.
			Se extenderá en la dirección de la linea para rellenar todo el espacio disponible que haya en su contenedor, la mayoría de las veces, la caja será tan ancha y ocupara todo el espacio como su contenedor.
			Respetan las propiedades width y height.
			Las propiedades padding, margin y border separan la caja de otros elementos.

		Caja en linea:
			No fuerza un salto de linea al llegar al final de la linea.
			Las propiedades width y height no funcionan por defecto (solo cambiando su tipo de visualización). Aunque con padding se puede agrandar la caja desde adentro pero se superponen los otros elementos, si hay y dependiendo de cuanto sea el padding.
			Las propiedades padding, margin y border <em>verticales</em> no alejan a otras cajas en linea.
			Las propiedades padding, margin y border <em>horizontales</em> si alejan a otras cajas en linea.

		Partes de una caja:
			Contenido (content box): area que muestra el contenido (texto, img, vid), puede modificarse con las propiedades width y height.
			Relleno (padding box): espacio en blanco alrededor del contenido, se modifica con la propiedad padding.
			Borde (border box): envuelve y limita la caja, puede modificarse con border.
			Margen (margin box): espacio en blanco entre la caja y los otros elementos, se usa para separarlos. Se modifica con margin.
			
			*Se calculan desde su borde.
			*El espacio ocupado de los elementos en línea está determinada por la propiedad line-height

		Modelos de caja:
			Estándar: suma todo y no cálcula automaticamente el ancho y alto de la caja.
			Alternativo: box-sizing: border-box; resta las demás propiedades de la caja al ancho y alto total.
	
		Margin:
			Buenas practicas:
			Margenes automáticos para centrar elementos con margin-left: auto; mueve la caja hacia el margen derecho (al agrandar el margen izquierdo). 
			Con margin-right: auto; muevo todo el elemento hacia la izquierda y con las dos declaraciones centramos el elemento o la caja.</p>
			Siempre que no se use flexbox.

			Malas practicas:
			Eliminar el margin y el padding: Con margin: 0; y padding: 0; se juntan todos los elementos y no se pueden distinguir. Peor es la situación si usan un selector universal porque van a tener que ir elemento a elemento para cambiar estas propiedades.
			Centrar elementos con margin 0 auto: Puede desaparecer el espacio/separación vertical si hay otros elementos antes en la cascada.</p>
			Usar margin 0 y padding 0 en el body: El primero por que todos los navegadores tienen por defecto un margin 8px (a todos los lados) se puede ver en inspeccionar elemento y los hace desaparecer. El segundo no tiene sentido porque no hay padding por defecto.
			
			Colapso de margin
			Si hay dos elementos cuyo margen se tocan, el margen que se sobrepone es el más grande. Un problema común es cuando queremos crear espacios y no se asigna el que le decimos, lo más probable es que haya un colapso de margen.
			Otros casos:
				Dos márgenes negativos colapsarán y se usará el valor más pequeño (el más alejado de cero).
				Si un margen es negativo, su valor se restará del total.
		

	|| Backgrounds y Borders:
		
		Background-color:
		Define el color de fondo de cualquier elemento/caja en CSS, el color se va a aplicar por debajo del contenido y del padding. Los valores de color pueden ser todos los que permite esta propiedad.
				.box {
				  background-color: #567895;
				}
		
		Background-image
		Permite poner una imagen de fondo a un elemento o caja (lo mas utilizado). De forma predeterminada una imagen grande no se ajusta a la caja, mientras que una imagen pequeña se repite hasta llenar la caja. Además si le aplicamos un color de fondo a la imagen, ésta va a quedar por encima del color.
				.b {
				  background-image: url(star.png);
				  background-color: blue;
				}
		
		Background-repeat
		Se usa para controlar el comportamiento repetitivo de las imágenes de fondo. Los valores son: no-repeat (evita que el fondo se repita), repeat-x (repite el fondo horizontalmente), repeat-y (repite el fondo verticalmente), repeat (repite el fondo de forma vertical y horizontal).
				.box2 {
					background-image: url(star.png);
					background-repeat: repeat-x;
				}

		Background-size
		Se usa para dimensionar las imágenes de fondo, usa tipo de valores de medida como longitud (px) y porcentaje (%). También tiene valores de palabra clave como: <strong>cover</strong> (el navegador agrandará la imagen para que cubra toda la caja, sin que se pierda su relación de aspecto, que se recorte la imagen). Por eso es probable que parte de la caja quede sin cubrir. También está <strong>contain</strong>: el navegador hará que la imagen cubra toda la caja a costa de cortar la imagen, perdiendo su relación de aspecto.
				.box {
				  background-image: url(balloons.jpg);
				  background-repeat: no-repeat;
				  background-size: 100px 10em;
				}

				.box {
					background-image: url(star.png);
					background-repeat: repeat;
					background-size: cover;
				}        			

		Gradient: degradado
		Es un tipo de imagen que se puede usar como fondo, se establece usando background-image con el valor linear-gradient o radial-gradient.
				.a {
				  background-image: linear-gradient(105deg, rgba(0,249,255,1) 39%, rgba(51,56,57,1) 96%);
				}

		Bordes
		Por lo general se usa la propiedad abreviada borde para poner el ancho, estilo y color en una sola linea. Pero para diseños más creativos se puede usar cada lado del borde de manera diferente.
				.box {
				  border: 1px solid black;
				}

				.box2 {
				  border-top: 1px solid black;   
				}

				box3 {
					border-top-width: 1px;
					border-top-style: solid;
					border-top-color: black;  
				}		
		
		Border-radius: esquinas redondeadas
		Aplica sobre la esquina de la caja, distinto a border que solo aplica a los lados.
				.box {
				  border-radius: 10px;
				}
				
				.box2 {
				  border-top-right-radius: 1em 10%;
				}
	

	|| Writing Mode, Display, Propiedades fisicas y lógicas
		
		La propiedad writing-mode cambia la dirección en bloque y en línea (o vertical u horizontal) de los elementos.
		Mientras que display cambia el diseño/disposición de los elementos interiormente (diseño) y exteriormente (interacción).
		El flujo físico es el que se usa para las coordenadas top, right, bottom y left en distintas propiedades como margin, padding, etc. Entonces, las coordenadas estan atadas a los lugares fisicos de las cajas de css tomo puede ser un top. 
		El flujo lógico depende desde donde empiezan y terminan los elementos en los modos de escritura, por eso se utiliza <em>block/inline</em> con <em>start/end</em> que sirven para cualquier modo de escritura así no tendrás que ajustar nada y escribir menos código.
	 
	
	|| Propiedades y valores lógicos
		Estas van a reemplazar a las propiedades width y height (valores horizontales) en los modos de escritura como horizontal-tb, vertical-rl y lr porque width y height no se ajustan al contenido en los modos mencionados. Y a otros valores más.

		inline-size:
		Se refiere al tamaño de la dimension inline (texto/contenido dentro de la caja), va a extender o encoger las lineas de texto/contenido. Reemplaza a width.

		block-size:
		Se refiere al tamaño de la caja, reemplaza a height. En resumen son la altura y la anchura que se usan en estos modos de escritura pero refiriéndose a las dos dimensiones.
			.box {
			  inline-size: 150px;
			}
	
		margin-block-start:
		Margen de inicio del bloque. Reemplaza a margin,.

		padding-inline-start:
		Es relleno va a aplicar al inicio de la dimension en linea (al inicio de las lineas de texto). Reemplaza a padding-left.

		border-block-end:
		El borde se va a aplicar al final del bloque.
		Las propiedades físicas quedan ligadas a sus direcciones físicas, mientras que las propiedades lógicas cambian con el modo de escritura.

		block-start:
		Reemplaza a la propiedad top.

		inline-end:
		Reemplaza a la propiedad right.

		block-end:
		Reemplaza a la propiedad bottom.

		inline-start:
		Reemplaza a la propiedad left. Si estamos en el modo de escritura horizontal-tb, el texto empieza por izquierda y termina por derecha, entonces, tiene sentido que esta propiedad reemplacé a left.
			
			.box {
			  inline-size: 200px;
			  writing-mode: horizontal-tb;
			}

			.logical {
			  margin-block-start: 20px;
			  padding-inline-end: 2em;
			  padding-block-start: 2px;
			  border-inline-end: 10px dotted rebeccapurple;
			  border-block-end: 1em double orange;
			}

			.physical {
			  margin-top: 20px;
			  padding-right: 2em;
			  padding-top: 2px;
			  border-bottom: 1em double orange;
		
		*Son propiedades que no tienen aun un amplio soporte.
	
	
	|| Desbordamiento/overflowing
		Se aplicarán propiedades para controlar el contenido dentro de los elementos, evitando la perdida datos.

		Propiedad overflow
		Controlamos como se comporta el desborde de contenido. 

		Valor predeterminado:
		<em>visible</em>.

		Ocultar:
		<em>hidden</em> hace que los datos se pierdan para el usuario.
		
		Barra de desplazamiento:
		<em>scroll</em> agrega una barra de desplazamiento horizontal y vertical a la caja. 

		Barras de desplazamiento cuando sean necesarias:
		<em>auto>/em>

		Propiedad <em>overflow-y: 
		<em>scroll</em> agrega una barra de desplazamiento vertical. 
		
		Propiedad overflow-x: 
		<em>scroll</em> agrega una barra horizontal, aunque no es recomendada para las palabras largas, 
		es mejor investigar <em>"word-break"</em> y <em>"overflow-wrap"</em>. 

		Dos valores en la propiedad overflow:
		Representan a overflow-x y overflow-y.
		
			.box {
			  border: 1px solid #333333;
			  width: 200px;
			  height: 100px;
			  overflow-y: scroll;
			}

		Block Formatting contentext:
		Cuando se usa overflow, la caja se convierte en un bfc que es como otro html superpuesto; tiene reglas de comportamiento de diseño en bloque.
 

	|| Valores y unidades
		
		Numeros:
			integer: Es un numero entero como 1200 o -200
			number: Representa a un numero decimal, puede tener o no, un punto para separar la parte entera de la decimal. Ej, 0.2, 100
			percentage: Es una fracción de otro valor, ejemplo; 15%. Son relativos a otra cantidad o elemento padre.
			
		Longitudes:

			length: 
			Contiene unidadades como 10px (pixeles) o 30em. 
			
			Absolutas: 
			Son valores relativos a algo más, puede ser al tamaño de letra del un elemento principal o al tamaño de la ventana gráfica del navegador. Posee la ventaja de que
			los <em>elementos<em> con unidad relativa, <em>escalen</em> en relación a todo lo demas.
			
			Relativas: 
			Siempre tienen el mismo tamaño. Pueden ser cm (centimetros), mm (milimetros), Q (Cuartos de milimetros), in (pulgadas), pc (picas), pt (puntos) y px (pixeles).
				em: Al tamaño de letra del elemento padre (a veces estos heredan tamaño del <em>elemento html (raiz)</em>) si tiene <em>font-size</em> o el tamaño de la fuente del propio elemento, en el caso de otras propiedades, como <em>width</em>.
				rem: Al tamaño de la letra del elemento raíz.
				vw: 1% del ancho de la ventana grafica del navegador.</li>
				vh: 1% del alto de la ventan grafica.

				Rem vs Em:
				rem se usa para tamaño de fuente de los elementos y em se usa para dimensionar elementos.
					html {
					  font-size: 16px;
					}

					.box {
					  font-size: 1.5rem;
					  width: 2em; 
					}

					.box2 {
					  padding: 1em;
					}

		Porcentajes:
		Se establecerá en relación con otro valor. Por ejemplo, si establecemos font-size en % a un elemento, será un % del font-size de un elemento padre. 
		Si le damos un porcentaje para width, será un porcentaje del atributo width del elemento padre.
			.wrapper {
			  width: 400px;
			  border: 5px solid rebeccapurple;
			}

			.percent {
			  width: 40%;
			}
		
		Palabras claves:
		Multiples propiedades admiten estas palabras como valores, tambien llamados identificadores, con comillas (texto de contenido) y sin comillas (palabras).
			.box {
				background-color: blue;
			}

			.box::after {
				content: "cadena de palabras para generar un texto"
			}

		Funciones:
		Hay propiedades que admiten la función calc(), el resultado será el valor aplicado.

		Imágen:
		La propiedad backgroun-image admite la función url() para pasar un archivo de imagen como valor.
		Está propiedad tambien admite las funciones linear-gradient() y radiant-gradient para crear imágenes degradadas.
			.image {
			  background-image: url(star.png);
			}

			.gradient {
			  background-image: linear-gradient(90deg, rgba(119,0,255,1) 39%, rgba(0,212,255,1) 100%);
			}
		

	|| Colores:
		El sistema de color estadar es de 24 bits, permite 16,7 millores de colres distintos a partir de una combinacion de diferentes canales de rojo, verde y azul con 256 valores diferentes por canal.

		Palabras claves:
			.box {
			  background-color: cornflowerblue;
			}
		
		Hexadecimales RGB:
		Empiezan con un hastag(#) seguido de seis cifras hexadecimales, cada cifra puede tomar 16 valores que se encuentran entre 0 y la f (que representa el 15). 
		Cada <em>par</em> de cifra representa uno de los canales (rojo, verde, azul) que nos permite especificar los 256 colores por canal.
			.box {
			  background-color: #F2F2F2;
			}

		RGB y RGBA:
		Un color RGB es una funcion, rgb (); tiene tres parametros que representa los colores rojo, verde y azul.
		Cada canal se representa por un numero decimal entre 0 y 255.
		RGBA agrega un canal alfa de color que controla la opacidad su valor se establece entre 0 y 1 (trasparente/opaco), con un punto antes del numero final.
		Este solo aplica al elemento que especificas y no a todo el contenedor.
			.box {
			  background-color: rgb(2, 121, 139);
			}

			.box2 {
			  background-color: rgba(2, 121, 139, .3);
			}
		
		HSL y HSLA:
		Es una funcion como rgb pero en lugar de los valores para rojo, verde y azul, HSL admite valores de matriz, saturacion y luminosidad.
		Matriz: Tono base del color, su valor va de 0 y 360 que representa un angulo en torno a una rueda de colores.
		Saturación: Es la intensidad del color, toma un valor entre 0 (tono gris) y 100% (max saturación).
		Luminosidad: Es la claridad o brillo del color, su valor está entre 0 (negro) y 100% (blanco).
		Su canal alfa con la funcion HSLA que controla la opacidad del elemento.
			.box {
			  background-color: hsl(188, 97%, 28%);
			}

			.box2 {
				background-color: hsla(188, 97%, 28%, .3);
			}  
			
		Canal alfa:
		RGB y HSL tiene la capacidad de admitir el canal alfa sin especificar la función para este canal y viceversa.

	
	|| Determinar el tamaño de los elementos
		El tamaño por defecto de una caja es el tamaño de contenido: el ancho será la palabra más larga y el alto se ajusta a la cantidad de palabras/contenido.
		
		Tamaño natural o intrínseco:
		Tienen un tamaño por defecto antes de que los redefinamos. Por ejemplo: una imagen tiene un ancho y un alto cuando se crea, esto es intrínseco. Si no cambiamos esos dos valores se mostrará con su tamaño natural. 
		Un div no tiene tamaño natural, se extenderá por todo el ancho del contenedor y no tiene altura, pero si agregamos un texto, la altura se adaptará y será su tamaño <em>intrínseco</em> pero no el ancho.

		Tamaño especifico o extrínseco:
		Cuando asignamos un tamaño a un elemento (debemos ajustar el contenido) se llama tamaño <em>extrínseco</em>.
		Podemos usar las propiedades height (alto) y width (ancho) en un elementos, pero se recomienda dar ancho y no alto para dejar que el contenido determine la altura.
			
			Uso de porcentajes:
			Es un valor de longitud, relativo al tamaño intrínseco natural del elemento o al tamaño extrínseco dado por nosotros . 
				
				en width:
				Si le damos un ancho en porcentaje dependera del tamaño de su <em>contenedor padre<em>, sin ancho dado por nosotros, ocuparía el total del espacio en horizontal por tratarse de un elemento de bloque.	
					.box {
						border: 5px solid darkblue;
						width: 50%;
					}    

				margin y padding:
				Se calcula a partir del tamaño en linea (espacio horizontal) del elemento (lo determina el contenido).
					.box {
					  border: 5px solid darkblue;
					  width: 300px;
					  margin: 10%;
					  padding: 10%;
					}		

		Tamaño mínimo y máximo:
		Se usa para cantidades variables de contenido, puede ser algo que manipule el usuario o se vaya generando automaticamente.
		Un tamaño minimo que funcionará como piso (a partir de ahí crecerá con el contenido) y un tamaño maximo que funcionará como un techo (el contenido tendrá un espacio máximo).
			
			min-height: altura mínima
			Podemos usarlo para una caja que tendrá contenido variable y necesitamos una altura predeterminada
				
				<div class="wrapper">
				  <div class="box"></div>
				  <div class="box">etc.</div>
				</div>

				.box {
				  border: 5px solid darkblue;
				  min-height: 150px;  //altura max.
				  width: 200px;
				  padding: 5px;	//espacio para el contenido.
				}				

			max-width: 100%; ancho máximo
			Podemos usarlo para reducir el tamaño de las imagenes si no hay espacio para su tamaño intrínseco, nos aseguramos que no será mayor al ancho de la caja. 
			No se agrandará más del 100%, lo que evita que se pixele.
			Funcionará con otros elementos reemplazados, como <video> o <iframe>.	
				.box {
				  width: 200px;
				}
				.minibox {
				  width: 50px;
				}
				.width {
				  width: 100%;
				}
				.max {
				  max-width: 100%;
				}
				
				<div class="wrapper"> //contenedor con tres cajas.

					// el ancho mínimo van hacia las img.

					<div class="box"><img src="star.png" alt="star" 
					class="width"> 
					</div>

					// la subcaja contiene a cada img.

					<div class="box"><img src="star.png" alt="star" 
					class="max">
					</div>

					<div class="minibox"><img src="star.png" alt="star" 
					class="max">
					</div>
				
				</div>

	* Se hace para que las imagenes se adapten a dispositivos pequeños.
	Pero las imagenes deben tener el tamaño adecuado para cada situación.
	A los dispositivos moviles les puede costar mucho dinero descargar imagenes grandes.
	Reducir el tamaño intrínseco con CSS no evita que se descargue completamente.
	Si la img es más o menos proporcional a la caja se ajustará bien. Si se agranda más de su tamaño perderá resolución, que no es lo ideal.
	
		Valores de ventana gráfica:
		Es el area visible dentro del navegador, esta tiene un tamaño.
			
			vw:
			Se usa para al ancho. 1vw es 1% del ancho visible o del área visible.

			vh:
			Se usa para la altura. 1vh es 1% de la altura del área visible.
 
			Puede usarse para diseñar un elemento a pantalla completa y que se vea antes del resto del contenido
			100vh empuja el resto del contenido por debajo de la ventana grafica.
 
	* Las cajas se adaptan si las palabras o el contenido superan el ancho intrínseco o extrínseco de un contenedor.


	|| Imágenes, media y formularios
		
		Elementos de reemplazo:
		Las imagenes, los videos y otros elementos de media (object, elementos de formulario, audio, canvas, etc) no son una caja, son elementos de reemplazo, actúan como bloque pero no se pueden aplicar otras propiedades del model box.
		CSS no puede afectar el diseño interno, solo su posición
			
			Imágenes:

			Con la etiqueta <img> podemos poner una imagen embebida/suelta por la página.
			De acuerdo a la situación la podemos dimensionarla con los atributos height y width, con la propiedad max-
				<img class=""
				 src=""
				 alt=""
				>
			
			Imagen con enlace:
				<a href="https://developer.mozilla.org/">
					<img src="mdn-logo-sm.png" alt="MDN">
					title="Logo del navegador Mozilla Firefox".
				</a>

			Con la propiedad background-image: url(); podemos poner una imagen de fondo de un contenedor con 
				<div class="box"></div> 
				.box {
				  height: 300px;
				  width: 400px;
				  background-image: url(star.png);
				}

				<div class="box image"></div>
				.image {
				  background-image: url(star.png);
				}

			Imagenes con ancho max:
				.box {
				  width: 200px;
				}

				.max {
				  max-width: 100%;
				}
				
				<div class="wrapper"> //contenedor con tres cajas.

					// el ancho mínimo van hacia las img.

					<div class="box"><img src="star.png" alt="star" 
					class="max"> 
					</div>

					// la subcaja contiene a cada img.


		object-fit:
		La propiedad se aplica a los elementos de reemplazo (img, vid, etc).

		El elemento de reemplazo se puede dimensionar para que se ajuste a una caja de varias maneras:
		Si aplicamos  max-width: 100% a una img con un relación de aspecto muy grande, el contenedor puede cortar la imágen.

		Una imágen que es más pequeña que la caja:
		No es problema, se puede arreglar con position.		

		Puede arreglar una imagen que es más grande que la caja:
		Podemos aplicar max-width: 100%;
		
		Valores: 
			cover: 
			Cortará la imagen sin cambiar su relación de aspecto (no se estira/deforma) para que entre en la caja sin dejar espacio sobrante. 
			
			contain:
			La imagen se mostrará completa sin cambiar su relación de aspecto pero se verá un sobrante de espacio en la caja si es de distinto tamaño intrínseco.
			
			fill:
			Llenará la caja pero no mantendrá la relación de aspecto, se estira o deforma.

				.box {
				  width: 200px;
				  height: 200px;
				}

				img {
				  height: 100%; // La imágen toma 100% de la caja contenedora "div/.box"
				  width: 100%;
				}

				.cover {
				  object-fit: cover;
				}

				.contain {
				  object-fit: contain;
				}

				<div class="wrapper">
				  <div class="box"><img src="balloons.jpg" alt="balloons" 
				  class="cover"></div>

				  <div class="box"><img src="balloons.jpg" alt="balloons" 
				  class="contain"></div>
				</div>

	*Para evitar descargar muchos o mantener el sitio ligero siempre es mejor una adecuada relación de aspecto para las imágenes según el sitio/situación.
	
	
	|| Elementos de reemplazo en metodos de diseño moderno:
		Como puede ser flex o grid, las imágenes se ubicarán en el incio  del contenedor flex o del área de cuadrícula. 
		En cambio, los elementos normales se rellenan el contenedor.
		
		Para que no se comporten de forma extraña o rompan el diseño debemos aplicar:
			img {
			  width: 100%;	
			  height: 100%;
			}
		La imágen toma 100% de la caja/elemento flexible o de cuadrícula.


	|| Aplicar CSS a elementos de formulario:
		
		input:
		Define campos de formulario de texto, selectores de hora y tambien de colores.
		 
		textarea:
		Permite un espacio para texto en multilínea.

		fieldset y legend:
		Son elementos para contener y etiquetar partes de formularios.
		
		Mediante un selector de atributos (elemento-html [atributo]) podemos dar algo de estilo a los formularios para que sea coherente con nuestro diseño. 
		Le damos bordes, relleno (padding), margin, colores, tamaño, etc.
			
			input[type="text"],
			input[type="email"] {
			  border: 2px solid #000;
			  margin: 0 0 1em 0;
			  padding: 10px;
			  width: 100%;
			}

			input[type="submit"] {
			  border: 3px solid #333;
			  background-color: #999;
			  border-radius: 5px;
			  padding: 10px 2em;
			  font-weight: bold;
			  color: #fff;
			}

			input[type="submit"]:hover {
			  background-color: #333;
			}

			<form>
			  <div>
				  <label for="name">Name</label>
				  <input type="text" id="name">
			  </div>

			  <div>
				  <label for="email">Email</label>
				  <input type="email" id="email">
			  </div>

			  <div class="buttons"><input type="submit" value="Submit">
			  </div>
			</form>


	|| Normalizar elementos de formulario:
		Los formularios se presentan distinto en los navegadores, para una experiencia homogénea
			
			button,
			input,
			select,
			textarea {
			  font-family: inherit;
			  font-size: 100%;
			  box-sizing: border-box;
			  padding: 0;
			  margin: 0;
			}

			textarea {
			  overflow: auto;
			}

	
	|| Depurar CSS:

		Problemas de especificidad:
		En el inspector de código de los navegadores vemos las reglas en conflicto.
		En el segundo panel vemos las reglas de CSS, debemos fijarnos cual regla más especifica se está aplicando.

		Propieadades y valores incompatibles:
		Los navegadores ignoran lo que no entienden, si la propiedad o valor no es compantible con el navegador, el CSS no se aplicará. Las DevTools tienen un icono triangular de precausion en la pestaña de las reglas y declaraciones de CSS.
		Tambien podemos mirar las tablas de compatibilidad que cada propiedad tiene en la documentación.

		Caso de prueba reducido del problema:
		Mostrar el problema en codigo reducido lo más simple posible sin contenido y estilo complejo. Sacar el codigo problematico del diseño para que solo muestre este codigo o caracteristica.
			
			Copiamos el todo el HTML del codigo fuente, CSS y JS relevante
			Si eliminar JS no soluciona el problema, no lo incluyas. Si hace desaparecer el problema, elimina la mayor cantidad de JS que puedas; deja solo las causas del problema.
			Elimina cualquier HTML que no contribuya al problema, como elementos principales.
			Elimina cualquier CSS que no afecte al problema.

	*Alejarse del problema del problema puede ayudar a encontrar la solución que no estabamos evaluando.

	
	|| Estilo a las fuentes:

		Propiedades que afectan al estilo/aspecto de las fuentes:
			
			color:
			Para la letra o el texto.

			font-family:
			Aspecto o forma de la letra para un elemento.
			Se combinan fuentes seguras para la web: Arial, Courier New, Georgia, Times New Roman, Verdana, Trebuchet MS; con fuentes predeterminadas o genericas: serif, sans-serif, monospace, cursive, fantasy; y fuentes web o especiales
				
				p {
				   font-family: "Trebuchet MS", Verdana, sans-serif;
				}

			font-size:
			Tamaño de la letra. Si aplicamos un valor en rem depende del font-size prederterminado del HTML (16px).
			Si aplicamos un valor en em dependerá del font-size de su elemento contenedor, si no tiene una definida; está heredada.
			El valor em se usa para dimensionar elementos que necesiten variar de tamaño y el valor rem se usa para font-size de los elementos.
				
				*Si aplicamos 10px al font-size del documento, los calculos son más sensillos:

					html {
						font-size: 10px;
					}	

					h1 {
						font-size: 2.6rem;
					}		

					p {
						font-size: 1.4rem;
						color: red;
						font-family: Helvetica, Arial, sans-serif;	
					}
			
			font-style:
			Aspecto visual de la letra: normal, italic, oblique.

			font-weight:
			Peso o grueso de la letra: normal, bold, lighter, bolder, 100-900;

			text-transform:
			Aspecto visual para todo el texto.

				none: Impide la transformación.
				uppercase: Pone todo el texto en mayus.
				capitalize: Transforma las letras iniciales de cada palabra en el texto.
				full-width: Transforma los caracteres para cada uno quede dentro de una caja de ancho fijo, similar a una fuente monoespaciada. Permite la alineacion de caracteres occidentales con los asiáticos.
			
			text-decoration:
			Se usa para los subrayado.

				none: Desactiva la decoración presente del texto.
				underline: Subraya el texto.
				overline: Proporciona una linea arriba del texto.
				line-through: Coloca un tachado sobre el texto.

			text-shadow:
			Aplica sombras al texto. Admite valores en unidad de longitud, en este orden:
				
				Desplazamiento horizontal:
				Desplazamiento vertical:
				Radio de desenfoque:
				Color: 

					text-shadow: 1px 1px 1px red;

			Sombas multiples:
			Se pueden aplicar separando con una coma el grupo de valores que define cada sombra individual. Todo a un solo elemento.
			
				text-shadow: -1px -1px 1px #aaa,
				 0px 4px 1px rgba(0,0,0,0.5),
				 4px 4px 5px rgba(0,0,0,0.7),
				 0px 0px 7px rgba(0,0,0,0.4); 


		Propiedades que afectan a la disposición del texto en su conjunto:
			
			text-align:		

				left: Alinea el texto por la izquierda.
				right: Alinea el texto por la derecha.
				center: Centra el texto.
				justify: Varía los espacios entre las palabras para que todas las líneas de texto tengan el mismo ancho.
				se puede combianar con la propiedad hyphens: auto; por ejemplo.

			line-height (interlineado):
			Toma unidades de longitudes y tambien puede tomar un valor sin unidades que actúa como multiplicador de <em>font-size</em> para determinar la altura entre líneas, es la mejor opción
		
			letter-spacing (espaciado entre letras) y word-spacing (espaciado entre palabras):
			Son utilies para lograr algun efecto o para aumentar la visibilidad de algun tipo de letra condensada.

				html {
				  font-size: 10px;
				}

				p {
				  font-size: 1.5rem;
				  color: red;
				  font-family: Helvetica, Arial, sans-serif;
				  line-height: 1.6;
				  letter-spacing: 1px;
				}


	|| Estilo a las listas:
		Tienen un propiedades predeterminadas por cada navegador, por ejemplo: 
		Es necesario que estas mantengan los mismos espacios verticales/top-bottom (tambien llamado ritmos verticales) que el resto de los elementos como parrafos e imagenes y el mismo espaciado horizontal/left-right entre uno y otro.
		
			Las listas ul y ol tienen:
			margin: top y bottom de 16px (1em).
			padding-left: 40px (2.5em).
			Los renglones (li): no tienen margin, border y padding.
		
			La lista dl:
			Tiene un margin top y bottom pero no tiene padding.
			El parrafo (dd) de la lista descriptiva tiene un margin-left de 40px (2.5em).
		
		Un parrafo cualquiera tiene un margin superior e inferior de 16px (1em).
		
		Personalizar elementos li:
		Propiedades especificas para personalizar las listas ordenadas (ol) y no ordenadas (ul).	

			Estilo: dibujo de las viñetas
			Por ejemplo, podemos poner numeros romanos.
				list-style-type: upper-roman;

			Posición:
			Puede mostrar las viñetas un poco más adentro o afuera del renglón
				list-style-position: inside;

			Imagen personalizada:
				1er metodo: es limitado en cuanto al posicionamiento, tamaño, etc.
	  				list-style-image: url(star.svg)

	  			2do metodo: utilizar la propiedad background y crear espacios con las propiedades del model box.
					ul {
					  padding-left: 2rem;
					  list-style-type: none;
					}

					ul li {
					  padding-left: 2rem;
					  background-image: url(star.svg);
					  background-position: 0 0;
					  background-size: 1.6rem 1.6rem;
					  background-repeat: no-repeat;
					}

			numeración de lista:
			Para las listas ordenadas e items podemos usar unos atributos:

				start:
				Comenzamos la lista con un numero elegido.
					<ol start="4">

				reversed:
				Podemos hacer una lista de menor a mayor
					<ol start="5" reversed>

				value:
				Se aplican en li para poner los numeros que quisiéramos.
					<li value="2">

	
	|| Ritmo:
		Las propiedades que afectan a la disposición del texto deben ser coherentes en todo el sitio.
		 	
		 	1° Tomamos el HTML y se establece un tipo de letra y tamaño para todo el sitio que van a heredar los demas elementos.
			2° Tomamos el titulo secundario, todas las listas y los parrafos para establecer su tamaño de fuente, así tendran el mismo espaciado superior e inferior.
			3° Aplicamos el interlineado line-height para las listas descriptivas (dl) en su titulo (dt) y su parrafo (dd).
			   Aplicamos negrita para el titulo y aumentamos el margen de abajo para su parrafo separandolo de los siguientes elementos, 
			   Será el mismo espacio entre los titulos y todos los parrafos.

			Ejemplo:

				html {
				  font-family: Helvetica, Arial, sans-serif;
				  font-size: 10px;
				}

				h2 {
				  font-size: 2rem;
				}
			
				ul,
				ol,
				dl,
				p {
				  font-size: 1.5rem;
				}

				li,
				p {
				  line-height: 1.5;
				}
				
				// Listas descriptivas

				dd,
				dt {
				  line-height: 1.5;
				}

				dt {
				  font-weight: bold;
				}
	
				// Estilos particulares:
		
				p {
				  font-size: 1.5rem;
				  color: red;
				  font-family: Helvetica, Arial, sans-serif;
				  line-height: 1.6;
				  letter-spacing: 1px;
				}


	|| Estilo a los enlaces:
				
		Por defecto vienen:
		Subrayados
		Los no visitados (:link) se ven azul.
		Los visitados (:visited) se ven violetas.
		Al pasar por arriba un enlace (:hover), el cursor cambia de forma.
		Si tiene foco (:focus) se ve un contorno alrededor del link apretando tab y así se va cambiando (Windows).
		Los activos (:active) se ponen de color rojo (se distingue si se mantiene apretado el click derecho).
		
		Cambiar estilo por defecto:
		Usando las propiedades: color, cursor, outline.

		Se recomienda:
		Subrayar los enlaces, pero no otros elementos; sino, destacarlos de otra forma</li>
		Aplicar :hover para resaltarlos de alguna manera.

		Aplicar estilo:
		Se tieen que seguir el orden: 
		L(:link), V (:visited), F (:focus), H (:hover), A (:active).
			
			a {
			  outline: none;
			  text-decoration: none;
			  padding: 2px 1px 0;
			}

			a:link {
			  color: #265301;
			}

			a:visited {
			  color: #437a16;
			}

			a:focus {
			  border-bottom: 1px solid;
			  background: #bae498;
			}

			a:hover {
			  border-bottom: 1px solid;
			  background: #cdfeaa;
			}

			a:active {
			  background: #265301;
			  color: #cdfeaa;
			}

		Icono al costado en los enlaces: 
		Pueden usarse para señalar un sitio externo/una acción.	
			a[href^="http"] {
			  background: url("external-link-52.png") no-repeat 100% 0;
			  background-size: 16px 16px;
			  padding-right: 19px;
		
		Aspecto de botón en un enlace:
			.container {
			  display: flex;
			  gap: 0.625%;
			}

			a {
			  flex: 1;
			  text-decoration: none;
			  outline: none;
			  text-align: center;
			  line-height: 3;
			  color: black;
			}

			a:link,
			a:visited,
			a:focus {
			  background: palegoldenrod;
			  color: black;
			}

			a:hover {
			  background: orange;
			}

			a:active {
			  background: darkred;
			  color: white;
			}
		
		Enlaces con imagen en nav:

			<nav class="container">
			  <a href="#"><img src="mdn-logo-sm.png" alt="MDN"></a>
			  <a href="#"><img src="mdn-logo-sm.png" alt="MDN"></a>
			  <a href="#"><img src="mdn-logo-sm.png" alt="MDN"></a>
			  <a href="#"><img src="mdn-logo-sm.png" alt="MDN"></a>
			  <a href="#"><img src="mdn-logo-sm.png" alt="MDN"></a>
			</nav>

	|| Fuentes web:
		Es una función de CSS que adminte archivos de fuentes para no depender de las fuentes del sistema.
		
		1° Declaramos @font-face, usamos la propiedad font-family para nombrar la fuente y la propiedad src con la funcion url() y la dirección donde se encuentra nuestra fuente.
		2° Declaramos el HTML y usamos font-family para dar una listas de fuentes, poniendo el nmbre de @font-face y otras fuentes para personalizar el sitio.
			Para usar este metodo hay que tener en cuenta que:
			
			@font-face {
			  font-family: "myFont";
			  src: url("myFont.woff2");
			}

			html {
			  font-family: "myFont", "Bitstream Vera Serif", serif;
			}

		Los navegadores adminte diferentes formatos de letras, por ejemplo, los modernos adminten WOFF/WOFF2 (Web Open Font Format 1 y 2). Las versiones antiguas de IE admiten EOT (Embedded Open Type).
		Elegimos dos tipos de letra, una para encabezados (puede ser de tipo Display o Slab serif) y otra para parrafos (menos llamativa y comoda para leer como sans), no importa el formato (TTF o OTF).
		puede tener varias versiones de una misma fuente (como thin, regular, normal, bold, etc) y archivo de licencia,
			
			Ejemplo:
			
			html {
			  font-size: 10px;
			  margin: 0;
			  font-family: sans-serif;
			}
			
			h1 {
			  font-size: 3.6rem;
			  color: #0084ff;
			  font-family: 'rubik';
			  font-weight: normal;
			  font-style: normal;
			 }
		
		Para una misma fuente vemos hay versiones con distinta extensión por ejemplo: .ttf, .woff, .woff2 que se necesitan para tener compatibilidad con los navegadores.
		Tambien tiene una hoja de estilo CSS que contiene el código de la propiedad @font-face que se necesita.

		Ejemplo 2:

		@font-face {
			  font-family: "zantrokeregular";
			  src: url("zantroke-webfont.woff2") format("woff2"), url("zantroke-webfont.woff")
			      format("woff");
			  font-weight: normal;
			  font-style: normal;
		
		Se pone la ruta y el tipo de archivo para compatibilidad. Vemos que podemos poner varias declaraciones separadas por comas.



	|| NORMAL FLOW
		Disponemos de elementos de bloque que aparecen uno debajo de otro y 
		de elementos de línea que aparecen uno al lado de otro.
			
			bloque:
			Va a ocupar el 100% del ancho de su elemento padre.
			
			línea:
			Tiene su ancho y alto determinado por su contenido, a menos que cambie a display: inline-block;
		
		*Es una buena practica comenzar el documento con el flujo normal y despues hacer las modificaciones.
		Al contenido de una caja se le añade padding (relleno), border y margin. 
		El modelo de caja más facil de aplicar es el que se usa con box-sizing: border-box en el cual las propiedades anteriores no afectan a la caja cambiando su anchura y altura dado.
		Si dos elementos adyacentes tienen margen aplicado, se impondrá el más grande debido al colapso de margen.


	|| FLEX

		Contenedor y elementos flex:

			<div class="wrapper">
              <div class="box1">One</div>
              <div class="box2">Two</div>
              <div class="box3">Three</div>
            </div>
            
            .wrapper {
              display: flex;
            }

            .wrapper > div { 
              flex: 1;   // selecciona todos los descendientes del contenedor.
            }
		
		Propiedades para el contenedor:
			display: flex
			flex-direction y flex-wrap = flex-flow
			align-items
			justify-content

		Propiedades para los elementos:
			flex
			align-self
			justify-self
			order
		
		Anidación:
		
		El articulo 3 tiene 3 divs tomamos el 1° para transformarlo en contenedor de nuestros botones.

			article:nth-of-type(3) div:first-child {
			  flex: 1 100px;
			  display: flex;
			  flex-flow: row wrap;
			  align-items: center;
			  justify-content: space-around;
			}
	
		botones con flex: 1 auto; ocuparán el espacio que puedan cuando reducimos el ancho de la ventana del navegador y cuando no puedan saltarán a la nueva línea.
			
			button {
			  flex: 1 auto;
			  margin: 5px;
			  font-size: 18px;
			  line-height: 1.5;
			}


	|| GRID
		
		Contenedor y elementos:
			
			<div class="wrapper">
              <div class="box1">One</div>
              <div class="box2">Two</div>
              <div class="box3">Three</div>
              <div class="box4">Four</div>
            </div>
            
            .wrapper {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: 100px 100px;
              gap: 10px;
            }

            .box1 {
              grid-column: 2 / 4;
              grid-row: 1;
            }		

		Propiedades para el contenedor:
			display: grid
			grid-template-rows
			grid-template-columns
			grid-template-areas
			grid-column-gap
			grid-row-gap
			gap
			grid-auto-rows      //tamaño implícito
			grid-auto-columns
			align-items: para eje bloque.
				Alinéa a todos los elementos. Despues podemos usar align-self para alinar algun caso especial.
				Para el contenedor.
			jusitify-items: eje en línea.
				Alinea todos los elementos.

				// El valor predeterminado es stretch (estirar), excepto para elementos con una relación de aspecto intrínseca. 
					Esto significa que, de forma predeterminada, los elementos cubrirán su área de cuadrícula.
					Si usamos align o justify-items todos cambian y ninguno llena el espacio.
				
				// Con justify/align-self veremos que los elementos ocupan/empiezan en una fracción del espacio horizontal.

		Propiedades para los elementos:
			grid-column-start/end
			grid-row-start/end
			grid-column
			grid-row        //ubicación 
			grid-area
			align-self:
				Alinéa elementos individualmente en el eje de bloque.
			justify-self

		Repetir cuadrícula y fila o columna implicita:
		El primer valor será para la cantidad y el segundo valor será para el tamaño, separados por una coma.
		Podemos determinar tamaño de fila o columna implicita con grid-auto-rows/columns.

			.container {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
			  grid-auto-rows: 100px;
              gap: 20px;
            }
		
		Contenido min y max:
		El contenido mínimo/max deben coincidir al menos para evitar desbordamiento.			
		
		minmax(): 
		El primer valor es para altura (row) o anchura (column) mínima y el segundo determina el valor máximo.
			
			.container {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-auto-rows: minmax(100px, auto);
              gap: 20px;
            }

        Filas o columnas como sean posibles:
        Para que el contenedor admita la cantidad maxima de columnas posibles.
        
        repeat():
		El 1° valor será auto-fill, el 2° la función minmax() y sus valores serán: tamaño (mínimo) y fr (unidad flexible) maximo.
		O sea, repite los valores de min y max.	
			
			.container {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
              grid-auto-rows: minmax(100px, auto);
              gap: 20px;
            }

		Posicionamiento sobre líneas:
		Las lineas son definidas por grid, no son los espacios (gutters).
		Usamos valores de inicio y fin en una sola propiedad.	
			
			header {
              grid-column: 1 / 3;
              grid-row: 1;
            }

		Se coloca en la columna 1 hasta la 3ra y se extiende por toda la fila.
		Los valores negativos como -1, -2, -3 solo funcionan con explícita.
		
		Posicionamiento sobre áreas:
		Cada palabra representará una columna/fila y cada línea de nombres representará a una fila.
		
			Usamos grid-template-rows o grid-template-columns:
			Se usa en el contenedor y las palabras van entre comillas, al final ponemos el punto y coma para cerrar la propiedad. 
			Con los nombres debemos replicar la forma en la que queremos que se vea la página.
		
			Reglas:
				Se llenan todas las celdas.
    			Para llenar dos celdas repetimos el nombre.
    			Las areas deben ser solo rectangulares.
    			Las areas no pueden repetirse en lugares diferentes.
			
			.container {
              display: grid;
              grid-template-areas:
                "header header"
                "sidebar content"
                "footer footer";
              grid-template-columns: 1fr 3fr;
              gap: 20px;
            }

            header {
              grid-area: header;
            }	

		Superponiendo elementos:
		Usando las líneas de la cuadrícula con grid-column y grid-row.
		
		Anidación de cuadrículas:
		Tomamos un elemento del contenedor para convertirlo en cuadrícula, no hereda las propiedades del contenedor padre, se acomoda en una cuadrícula aparte.
		
		Cuadrícula de 12/16 columnas:
		Los frameworks para diseñar una cuadrícula se basaban en 12 o 16, pero para esto ya no se necesitan de terceros.
		Podemos hacer estás cuadrículas nativamente.
		Solo necesitamos un contenedor con una cuadrícula de 12 columnas. 
			
			.container {
            	display: grid;
            	grid-template-columns: repeat(12, minmax(0,1fr));
            	gap: 20px;
       		}


	|| FLOAT
		Se utiliza para desplazar un elemento del flujo normal que flotará en el documento para poder ubicarlo en alguna parte de la ventana del navegador.
		Tiene cuatro valores para establecer la flotación a los lados de otros elementos: left, right, none, inherit (heredar propiedades del padre)
		No podemos aplicar propiedades del model box a los elementos que están alrededor para elejarlo, lo aplicamos al float.

			<div class="box">Float</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam</p>

            .box {
              float: left;
              width: 150px;
              height: 150px;
              margin-right: 30px;
            }
	
		Clear:
		Si solo aplicamos esta propiedad, mueve el flotante y vemos que los elementos circulantes dejan de envolverse al float.
		El problema es que no se integra con los demás elementos.

			.cleared {
			  clear: left;
			}

		display: flow-root
		Creará un bloque que envuelve los elementos para que no sobresalgan en la parte inferior.
		Un BFC (block formatting context) crea un pequeño diseño para que un elemento padre pueda abarcar el tamaño que toman los elementos hijos como son el flotante y el parrafo.
			
			.wrapper {
			  background-color: rgb(79, 185, 227);
			  padding: 10px;
			  color: #fff;
			  display: flow-root;
			}


	|| POSITION
		Se usa para mover elementos desde su ubicación por defecto en el flujo normal hacia otra posición.

		static:
		Valor por defecto en cada elemento.

		relative:
		Permite mover elementos dentro flujo normal, puede superponerse con otros.
		Para moverlo usamos propiedades como <em>top</em> y <em>left</em> que lo va a empujar desde arriba y desde la izquierda.
			
			.positioned {
              position: relative;
              top: 30px;
              left: 30px;
            }

		Toma estos lados de la caja y los mueve en dirección contraria.

		absolute:
		Saca los elementos del flujo normal, para poder moverlo al borde del <em>html</em> (o de su elemento padre más próximo) para crear elementos de diseño complejo como paneles ocultos en la página que aparecen con un botón.		
		El espacio en la página dónde estaba el elemento desaparece, los demás elementos tomán el lugar. Tendrá su bloque o capa propia.
		Las propiedades top y left si van hacia arriba y a la izquierda, no empujan desde esas direcciónes como en relative.
		Dependiendo del contenedor padre, dimensionamos el elemento.
			
			.positioned {
              position: absolute;
              top: 30px;
              left: 30px;
            }

        La posición del elemento absoluto depende de su contenedor o ancestro más cercano y no del flujo normal.
			Ej:
			Especifican la distancia que debe estar el elemento desde cada uno de los lados del elemento que lo contiene. 
			Entonces, en este caso, estamos diciendo que el elemento absolutamente posicionado debe estar a 30 px desde la parte superior del "elemento contenedor" y 30 px desde la izquierda.

		Crear contenedor ancestro:
		Si ningún ancestro tiene un valor de position explicito (que nosotros codeamos) tendrá por defecto el valor sticky y su contenedor será el viewport (toda la ventana grafica disponible).
		Necesitamos codear uno:

			position: relative;
		
		Para nuestro ancestro, así el contenedor deja de ser la ventana gráfica.
		El tamaño se podrá definir mejor.

		fixed:
		El elemento flotará fijamente por la ventana del navegador porque es su contenedor natural mientras su ancestro no tenga las propiedades transform o perspective con un valor distinto de none.
		
			h1 {
			  position: fixed;
			  top: 0;
			  width: 500px;
			  margin-top: 0;
			  background: white;
			  padding: 10px;
			}

			top 0 es para que se adhiera a la parte superior o para no moverlo desde esa posición.
			Le damos al encabezado el mismo ancho que la columna de contenido y luego un fondo blanco y algo de relleno y margen para que el contenido no sea visible debajo.
			El encabezado posicionado ya no aparece en el flujo del documento, puede causar efectos que debemos arreglar.
			Cuando fijamos un elemento parte del contenido se recorta al movernos por la página.
			
			Podríamos mejorar esto bajando o moviendo los elementos normales del documento:
			
			p:nth-of-type(1) {
			   margen superior: 60px;
			}

		sticky:
		Puede hacer que un elemento esté estatico que se desplazará cuando se mueva la pantalla.
		El elemento sticky solo se desplazará en un área: por todo alto o dimensión de su elemento padre (elemento de bloque, flex o grid más cercado).	
		
			.positioned {
              position: sticky;
              top: 30px;
              left: 30px;
            }

        Si es muy pequeño no se notará que se queda fijo. Con las propiedades top, bottom, left y right lo movemos hacia su lado contrario.
			
			Scrolling index:
			Le agregamos sticky a al elemento <em>dt</em> (description title) de la lista de descripcion (dl). Con un valor maximo de 0 en top, los encabezados se desplazan con el contenido (dd) y cada encabezado siguiente reemplazará al anterior. Con un margen vertical (1em) y horizontal (0).
				
				<h1>Sticky positioning</h1>

					<dl>
					  <dt>A</dt>
					  <dd>Apple</dd>
					  <dd>Ant</dd>
					  <dd>Altimeter</dd>
					  <dt>B</dt>
					</dl>

				dt {
				  background-color: black;
				  color: white;
				  padding: 10px;
				  position: sticky;
				  top: 0;
				  left: 0;
				  margin: 1em 0;
				}

				El efecto es que cada elemento dt se quedará fijo.

		Colapso de margen en los elementos posicionados:
		Los margenes pueden ser aplicados, pero no colapsan, se sumarían.
		

		top, left, right y bottom:

			relative, fixed, sticky:
			Lo usamos para empujar los elementos desde estas direcciones.
			Ej: La propiedad top: 0; hace el elemento no se mueva desde esta posición.

			absolute: 
			Toma distancia de su elemento contenedor.
			Ej: top: 0; toma toda la dimensión top del contenedor ancestro.


		Contenedor ancestro más cercano:
		HTML es un jerarquia de elemento relacionados, entre ellos pueden ser:

			Elemento padre: 
			Un elemento que <em>contiene directamente</em> a otros elementos.
		
			Hijo: 
			Elemento que <em>está contenido</em> directamente dentro de otro elemento.
		
			Hermano: 
			Los elementos son hermanos cuando <em>comparten</em> el mismo elemento principal.
		
			antepasado:
			Elemento que contiene <em>en cualquier nivel</em> a otros elementos, será un antepasado de estos.

			descendiente: 
			Elemento que esta <em>está contenido</em> (en cualquier nivel) dentro de otro elemento.
		
		Las áreas de una caja (margin, border, padding, content) pueden ser el contenedor de un elemento posicionado:

		Bloque contenedor y position:
		Para generar un bloque contenedor debe haber un ancestro (más cercano) para el elemento.		
		Determina la posición en donde va a estar ubicado.
		Si un elemento no cumple para ser bloque contenedor, pasa al otro más cercano.	
		Para ser contenedor, un elemento cercano debe tener ciertas caracteristicas:	
				
			Si el elemento es static, relative o sticky:
			El bloque contenedor será el <em>content área</em> del antepasado si es un elemento en bloque, flex o grid. Un elemento en linea no es tenido en cuenta porque no es un bloque contenedor.
			
			Si es absolute: 
			El contenedor será el <em>padding</em> del antepasado mientras no tenga aplicado <span>position: static;</span> o sea, puede tener fixed, absolute, relative. Este truco lo usamos en el apartado de posicionamiento, para que el contenedor del elemento no sea el viewport y se extienda por toda la pantalla.
			
			Si es fixed: 
			El contenedor será el viewport (ventana grafica) del navegador.
			
			Si es absolute o fixed:
			El contenedor puede ser el padding del ancestro si tiene las siguientes propiedades:
				
				transform o perspective distinto del valor none.
				will-change con los valores transform o perspective.
				filter distinto del valor none o will-change (solo en firefox).
				contain con el valor paint.
				backdrop-filter distinto de none.
		
		Mover el BFC:
		Usamos el inspector para saber los valores de las areas de los ancestro y dar valores en px a las propiedades top, bottom, left y right.
		Con los porcentajes podemos hacerlo más rápido, sin tener que restar los px del contenedor y nuestro elemento. Hace referencia al ancho del contenedor. El valor 0 se acerca al borde del contenedor.


	|| Z-INDEX:
	 	El elemento HTML es capaz de crear el contexto de diseño/formato inicial para poder aplicar el diseño en bloque y en línea en los elementos, tambien puede crear el contexto de apilamiento inicial que nos permite verlos y ubicarlos en orden.
		Establece el orden de renderización/visualizacion en la página usando el eje z de un elemento posicionado y sus descendientes o de los elementos flexibles.		
		Así como tambien habia propiedades para crear diferentes contextos de diseño, hay propiedades que crean otros contextos de apilamiento.
		
		Funciona con un elemento posicionado con el valor absolute, fixed o sticky.

			orden html:
			El orden en que aparecen los elementos posicionados en el HTML: los que aparecen últimos se superponen a los que estaban primeros. El eje z es una línea imaginaria que va desde la pantalla hacia nosotros.
		
		Agregamos un valor entero (positivo o negativo) a z-index para subirlo o bajarlo de capa.

		Contextos de aplilamiento:
		Una jerarquia de apilamiento es la estructura que generan todos los elementos del HTML, formado por elementos hermanos y padre/hijo. 
		Existen los niveles en una jerarquia, por ejemplo, elementos hermanos es un nivel y si hay hijos de uno de ellos pasa a ser el segundo nivel. 
		Podemos identificar el orden de renderización (visualización de elementos) imaginando un numero de versión.

		Orden de apilamiento:
			
			Fondo y borde del elemento raíz (HTML).
			Cualquier elemento en bloque del flujo normal.
			Bloques flotantes.
			Elementos en línea del flujo normal
			Elementos position siguiendo su orden en el HTML (los ultimos que aparecen en el HTML se superponen a los primeros).
		
		Apilando con z-index:
		Z-index solo funciona cuando creamos un nuevo contexto de apilamiento en un elemento y un ejemplo es usando position + z-index.	
		Se usa si queremos un orden diferente en los elementos a como vienen predeterminados, visualmente los elementos se alejarán o acercarán de nosotros. 
		Una capa con un numero mayor se renderizará encima de las capas con números menores.
			
			Abajo: Elemento más lejanos al observador.
			...
			Capa -1
			Capa 0: Capa de renderización inicial/por defecto, cuando los elementos no tienen z-index.</li>
			Caja 1
			Caja 2
			Caja 3
			...
			Arriba: Elemento más cercano al observador.
		
		*Si varios elementos comparten el mismo valor de z-index, se situarán en esa capa pero se ordenarán con las reglas basicas anteriores sin z-index.
		*Si los elementos hijos tienen z-index y su padre no, estos se ordenarán en el contexto de apilamiento inicial.
		*Los elementos hijos tiene su propio contexto: se ordenan entre ellos, los de afuera no interfieren y se superponen visualmente a su padre. Si el elemento padre tiene z-index se ordenará en su propio contexto y se moverá junto a sus hijos.
		
		Propiedades que crean contextos de apilamiento:

			elemento raíz (HTML).
			position (relative o absulute, fixed o sticky) y z-index distinto de 0.
			item flex o item grid.
			opacity menor de "1".
			transform distinto de "none".
			mix-blend-mode distinto de "normal".
			filter distinto de "none".
			perspective distinto de "none".
			isolation distinto de "isolate".
			will-change en un valor no inicial.
			contain con layout, paint, strict, content.


	|| BFC: contexto de formato de bloque
		Es la región en que ocurre la disposición de las cajas de bloque y en la cuál los elementos flotantes interactúan los unos con los otros.
		A estos bloques se les aplica las propiedades del model box para alejarlos de los demás, si las aplicamos a los elementos normales no tendrían efecto como vimos con los flotantes.
		Por eso para diseñarlos o solucionar problemas, creamos un bfc contenedor o adyacente.

			Es creado por un elemento con: 
				elemento raiz (<HTML>) o algo que lo contiene.
				float diferente de none.
				position absolute o fixed.
				display: inline-block.
				display: table-cell, que es la propiedad por defecto de las celdas de una tabla HTML.
				display: table-caption, que es la propiedad por defecto de los subtítulos de tablas HTML.
				overflow distinto a visible.
				display: flex o inline-flex.
				display: flow-root.
				Flex items, Grid items.
				Multicol containers.
				column-span: all, siempre; incluso cuando no está en el contenedor de multicolumna.
		
		Colapso de margen:
		Si tenemos dos elementos adyacentes con margen vertical en dónde se tocan el de arriba y abajo, tal vez esperamos que se sumen para que haya más espacio. Pero este no es el comportamiento natural de los margenes, converge el más grande.
			
			Ejemplo: 
				<div class="blue"></div>
				<div class="red"></div>

				.blue,
				.red {
				  height: 50px;
				  margin: 10px 0;
				}
		
			Podemos evitar el colapso, si envolvemos el segundo elemento y a este contenedor lo convertimos en bfc:

				<div class="blue"></div>
				<div class="outer">
				  <div class="red"></div>
				</div>
				
				.outer {
				  overflow: hidden;
				  background: transparent;
				}

		BFC externo: 
		Cuando un contenedor es BFC para sus elementos internos.

		BFC interno:
		Cuando un elemento interno es un BFC dentro de un contenedor normal.


	|| MULTI-COLUMN
		Podemos acomodar el contenido en columnas mediante un contenedor con algunos elementos.

		Propiedades para el contenedor:
		column-count: 
		Divide el contenido en la cantidad de columnas indicadas.
		Toma un valor que será la cantidad de columnas en las que se dividirán los parrafos porque es el contenido
			
			.container {
			  column-count: 3;
			}	

		column-width: 
		La cantidad de columnas dependera del ancho del contenedor.
		Si el ancho del contenedor es menor que el ancho de la columna; se crea una sola columna más pequeña que el contenedor. Cuando sobra espacio se reparte entre las columnas que tendrán más ancho de lo indicado.
		El ancho de las columnas se adaptarán al tamaño de la ventana del navegador.

			Ejemplo:
			<div class="container">
              <h1>Multi-column Layout</h1>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus</p>

              <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada</p>
            </div>  

            .container {
              column-width: 200px;
            }
		
		Estilo a las columnas:
		Las columnas divididas no se pueden diseñar individualmente: cambiarles el tamaño, fondo o color de texto, etc.
		
		column-gap:
		Cambiamos el espacio entre las columnas usando un valor de longitud (% o px), tambien se puede usar con flexbox, grid, etc.
		
		column-rule: 
		Agregamos el ancho, estilo y color de la línea que separa a las columna; es una propiedad abreviada.
		Ocupa el espacio que creó column-gap, si quiere más espacio deberá aumentar esta.
		
		Si queremos 10px a cada lado de las columnas; tenemos que agregar column-gap: 25px; 5px para la línea entre las columnas (estilo de column-rule) y se reparten 10px a cada lado de las columnas.
			
			.container {
			  column-count: 3;
			  column-gap: 20px;
			  column-rule: 4px dotted rgb(79, 185, 227);
			}

		Controlar el desbordamiento: max-width: 100%;
		Cuando el tamaño de un elemento es mayor que el cuadro de la columna.
			
			Ej: una imágen que está entre dos columnas de un contenedor, es más ancha que las columnas
				
				<div class="container">
  					<p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon.</p>
  					<img src="image.jpg" alt="balloons">
  					<p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi-</p>
				</div>

				.container {
				  column-width: 150px;	//puede pasar con column-count.
				}

			Por defecto, el contenido desbordado no se corta, se sigue mostrando.	
			Con max-width: 100% se adaptará al ancho de columna.
		
		Dependiendo del formato del contenido, impresión (print) o continuo (continuous), el contenido de las columnas se desbordará de diferente manera y cambiará la manera en que lo controlamos.
		En impresion puede ser que las columnas que se desborden pasan a otra página, lo mismo con los renglones o líneas de texto horizontal.
		
		En medios continuos, como una web; las columnas se desbordan en dirección del texto cuando no tenemos altura suficiente.
			.container {
			  column-width: 200px;
			  height: 180px;
			}

			Si le sacamos la altura, crean más espacio vertical
			Pero si no podemos, el texto colapsará el contenedor y el navegador nos mostrará una barra de desplazamiento. No tenemos propiedades para esto.

		Aplicar media query:
		Si el contenido de las columnas es más alto que el viewport, el usuario o lector tendrá que subir y bajar para leer cada columna.
		Podemos verificar la altura antes de aplicar las propiedades de la columna.
			
			@media (min-height: 300px) {
			  .container {
			    column-width: 200px;
			  }
			}
			
			Si la altura tiene un minimo de 300px, crear columnas de 200px para que entre todo el contenido en la pantalla.


		Columnas expansivas:

		column-span: all
		Podemos hacer que un elemento se extienda sobre todas las columnas. Para hacer esto, este elemento divide al contenido de las columnas y continua después.
		Ocupa todas las columnas o ninguna.
		Se convierte en un bfc:  mini HTML que funciona aparte y sigue el diseño de bloques.
		
		Fragmentación de cajas:
		al dividir el contenido de un conetenedor nos puede traer un problema en la experiencia de lectura: el texto se puede ver cortado.
			
			<div class="container">
			  <div class="card">
			    <h2>I am the heading</h2>
			    <p>
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
			      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
			    </p>
			  </div>
			</div>

			.container {
			  column-width: 250px;
			  column-gap: 20px;
			}

			.card {
			  background-color: rgb(207, 232, 220);
			  border: 2px solid rgb(79, 185, 227);
			  padding: 10px;
			  margin: 0 0 1em 0;
			}
		
		Si tenemos muchas cartas como esta, el contenedor multicolumna que divide cada divs y no solamente los parrafos: corta mal las cajas y dificulta la lectura.
		
		break-inside:
		Establecemos como deben comportarse los saltos de página o región dentro de una caja. Decidimos si se deben romper o si lo evitamos.
		El valor avoid que evita cualquier ruptura; al contenedor/div del titulo y el parrafo.
			
			.card {
			  break-inside: avoid;
			  page-break-inside: avoid;
			  background-color: rgb(207, 232, 220);
			  border: 2px solid rgb(79, 185, 227);
			  padding: 10px;
			  margin: 0 0 1em 0;
			}
		
		break-before y break-after:
		Se usa para separar antes y despues de un elemento señalado
		Funciona entre los elementos/contenedores. Tienen valores en comun, se usan para el diseño en multicolumna, para los saltos de páginas en un documento de lectura, para regiones (experimental). Tambien valores genericos y globales.

			Si queremos que en una hoja de impresión se corte para usar una hoja nueva en cierto elemento usamos el valor break-before: page.
			Otro uso es querer evitar que los encabezados terminen como ultimo en una página de documento o columna, entonces, usamos: break-after: avoid.	

		Propiedades orphans y widows:
		Determinan cuantas líneas deben quedar/mostrase al principio (widows) o al final (orphans) de un salto de página o corte de una columna.
		Solo funcionan para las líneas de parrafos.
		
		
	|| TABLE
		Se usa para mostrar datos en filas y columnas, mucho tiempo atras se podía usar para diseñar páginas.
		Ahora se puede usar para crear cosas especificas cuando un sitio admite navegadores antiguos.

		display: en los elementos form (table), div (table-row) para una fila. 
		Label e input (<em>table-cell</em>) para las celdas. 
		Para el parrafo que sigue despues del formulario tiene el valor <em>table-caption</em> para el titulo/descripción de la tabla

		Consta de espacios para el form, los campos con margin en 0 (arriba y abajo) y auto (centra horizontalmente), el ancho de los campos estan definidos, etc.
			
			<form>
              <p>First of all, tell us your name and age.</p>
              <div>
                <label for="fname">First name:</label>
                <input type="text" id="fname" />
              </div>

              <div>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" />
              </div>

              <div>
                <label for="age">Age:</label>
                <input type="text" id="age" />
              </div>
            </form>
            
            html {
              font-family: sans-serif;
            }

            form {
              display: table;
              margin: 0 auto;
            }

            form div {
              display: table-row;
            }

            form label,
            form input {
              display: table-cell;
              margin-bottom: 10px;
            }

            form label {
              width: 200px;
              padding-right: 5%;
              text-align: right;
            }

            form input {
              width: 300px;
            }

            form p {
              display: table-caption;
              caption-side: bottom;
              width: 300px;
              color: #999;
              font-style: italic;
            }



	|| RESPONSIVE DESING		
		responsive web desing (RWD) es un conjunto de practicas que permite que las páginas web modifiquen su diseño y apariencia para adaptarse a diferentes anchos de pantalla de los dispositivos.
		
		media query:
		Nos permiten ejecutar una series de pruebas/test que aplicarán CSS de manera selectiva cuando se cumplen los requisitos.
		Se puede agregar multiples (breakpoints) media queries dentro de la hoja de estilo para modificar todo el diseño o parte de él, para que se adapte mejor a los distintos tamaño de pantalla.
		Una practica comun es crear un diseño de una columna en la que los elementos se ven mientras te desplazas hacia abajo para dispositivos moviles de pantalla estreche (smartphones, tablets, etc). Luego probar/testear resoluciones más grandes e implementar un diseño de varias columnas cuando el usuario dispone de suficiente ancho de pantalla.
		
		imágenes responsivas:

			img,
			picture,
			video {
			  max-width: 100%;
			}
		
		responsive font:
		Cambiar en el tamaño de la fuente cuando se aplica <em>media queries</em>.
		Para tamaño de fuente grande en resoluciones de ventana grandes.
			
			h1 {
			  font-size: 2rem;
			}

			@media (min-width: 1200px) {
			  h1 {
			    font-size: 4rem;
			  }
			}
		
		font scale to viewport:
		1vw es el 1% del ancho de la ventana del navegador. Si cambiamos el ancho, cambia el tamaño de la fuente.
		La unidad vw pierde la capacidad de hacer zoom al estar relacionada con la ventana gráfica.
		
		solución:
		Implica usar la funcion calc(), si a un valor con em o rem, le sumamos otro valor con vw; se puede usar el zoom, ademas la fuente va a agrandarse a medida que lo haga el ancho de la ventana del navegador.
			
			h1 {
			  font-size: 6vw;
			  font-size: calc(1.5rem + 3vw);
			}
		No necesitamos media queries para hacerla responsiva gradualmente.

		Texto responsivo al ancho:

			.item {
				width: fit-content;  //soporte con problemas
			}
			
			o 

			.item {
				width: fit-content;  
				block-size: fit-content; 
			}

			white-space: // mayor soporte, fallback/legacy
			Maneja el espacio en blanco y el ajuste de las líneas dentro de un elemento.
			valores: cambia la estetica o presentación del texto en la caja.
			normal, nowrap, pre, pre-wrap, pre-line, break-spaces. Todas tienen distintas caracteristicas, responsivas y no responsivas, etc.

				div {
				  max-width: 100px;
				  width: 100px;
				  white-space: break-word;
				}
				
				<div>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum numquam quas odit maiores corrupti, quo amet, exercitationem error veniam tempore voluptates nisi sequi. Eveniet tempora officiis pariatur ab provident rerum.
				</div>

			división de palabras dentro de si mismas:
			
			Propiedades:
			
			overflow-wrap: Se aplica a los elementos en línea. las palabras son responsivas pero puede afectar el ancho del elemento/caja.
			Valores: normal, anywhere, break-word.
				
				.item {
				  overflow-wrap: anywhere;
				}

				.item {
				  overflow-wrap: break-word; // buen soporte
				}
			
			hyphens (guiones): divide las palabras cuando el texto se ajusta a varias líneas. Puede evitar la división de guiones, dividir con guiones, etc.			
			Las reglas de separación de sílabas son específicas del idioma. En HTML, el idioma está determinado por el atributo lang, y los navegadores dividirán con guiones solo si este atributo está presente y el diccionario de guiones apropiado está disponible.
			Valores: none, normal, auto.

				.hyphens {
				  hyphens: auto;
				}

			word-break:
			Configura los saltos de línea para que no desborden.
			Valores: normal, break-all, keep-all.

				.item {
				  word-break: break-all;
				}

		ancho responsivo al contenido/texto:

			.item {
				width: max-content; // todo el contenido determina el ancho.
			}

			.item {
				width: min-content; // la palabra más larga determina ancho de la caja.
			}

		etiqueta meta:
		Dice que debe establecer su ancho respecto al ancho del dispositivo y ademas escalar el documento al 100%. De esta manera se logra optimizar la página para moviles.
		
			meta name="viewport" content="width=device-width,initial-scale=1" />
		
		Se hizo de está manera porque los primeros smartphones mentian sobre el ancho en la ventana gráfica de sus navegadores porque la mayoria de las páginas no se adaptaban a pantallas estrechas, entonces, mostraban la web de escritorio ampliada para que el usuario se desplaze y haga zoom para usar sus funciones.
		El problema que sucede cuando no configuramos la etiqueta meta anterior, es que en los puntos donde se introduce un media query (breakpoints) para modificar el diseño no funcionará en los dispositivos moviles. Si ponemos un media query que modifique el diseño a partir de una resolución de 480px pero los navegadores moviles están seteados a 980p (da una vista ampliada del sitio como lo hacian antes los moviles, dado su pantalla estrecha), nunca hace efecto. En cambio si configuramos la etiqueta meta, el query funcionará.


	|| MEDIA QUERIES
		Permite aplicar estilo mediante una regla con una serie de condiciones, que si son ciertas -en el navegador/dispositivo- cambia el diseño de la página adaptándola a distintos tamaños de pantalla.
		Tambien pueden detectar caracteristicas/funciones del dispositivo que está usando el usuario. 
		
		sintaxis:

			@media media-type and (media-feature-rule) {
			   CSS rules go here
		
		1° va el tipo de query (media-type)
		2° va el tipo de prueba/test (media-feature-rule) que debe pasar el navegador/disposito del usuario. 
		3° adentro ponemos una declaración que debe cumplirse
		4° CSS que se aplicará a un cuando se cumpla la condición.
		
		Media type:
		Los tipos de medios se refiere a dónde se va aplicar la condición y el estilo de CSS:
			
			all: Aplica para ventana gráfica e impresión código.
			print: Para imprimir/aplicar código.
			screen: Para la ventana gráfica.	

		*Antes de estos, se pone @media para que sean aceptados.
		*Estos valores son opcionales, si no indicamos ninguno; el media query se aplica a todos los tipos de medios.
			
		Media feature rules:
		Son funciones multimedia, cuando el usuario las activa, podemos cambiar el CSS que se especifica debajo de estas.
		
		funciones responsivas:

		width, height; min-width, max-width y min-height, max-height:
		Si las usamos en -screen- afecta a la ventana del navegador.
			
			@media screen and (width: 600px) {
			  body {
			    color: red;
			  }
			}
		
			@media screen and (max-width: 600px) {
			  body {
			    color: blue;
			  }
			}

		El mínimo actúa como un piso y el máximo un techo. 
		
		Orientación:
		Función multimedia para los dispositivos moviles que nos permite cambiar el CSS si el dispositivo está en modo vertical u horizontal
		portrait: es la posición vertical, su alto es mayor que el ancho.
		landscape:  es la posición horizontal, su ancho es mayor que el alto.
				
			@media (orientation: landscape) {
			  body {
			    color: rebeccapurple;
			  }
			}
			
		La vista de escritorio es horizontal, la vista en los navegadores movil es vertical.

		
		puntero:
		Si los usuarios pasan el mouse/puntero por encima de los elememtos, podemos aplicar estilo.
			
			@media (hover: hover) {
			  body {
			    color: rebeccapurple;
			  }
			}

		valores avanzados: 
			fine: para los mouse y trackpad que son punteros precisos en areas pequeñas. 
			coarse: que describe a un puntero grueso como puede ser nuestro dedo en una pantalla tactil.
			none: cuando el dispositivo no este navegando con un puntero y lo haga con el teclado o un comando de voz.
	
		Lógica:
			
			and: se tienen que cumplir las dos condiciones.

				@media screen and (min-width: 600px) and (orientation: landscape) {
					body {
					   color: blue;
					}
				}

				El primer and para conectar el tipo y el segundo para conectar los operadores lógicos. 
			
			or: solo hace falta que se cumpla uno de ellos para que se aplique el CSS.
			Se representa con una coma, podemos crear un media query más complejo con varios conjuntos de condiciones que pueden cumplirse.	
				
				@media screen and (min-width: 600px), screen and (orientation: landscape) {
			  		body {
			    		color: blue;
			  		}
				}

				el texto será azul si la ventana gráfica tiene un minimo de 600px o si el dispositivo está en posición horizontal.

			not:
			invierte las condiciones que ponemos para que cambie el CSS. 

				@media not all and (orientation: landscape) {
			  		body {
			    		color: blue;
			  		}
				}

				Vemos que "not" se ubican antes del tipo de media.
				lo contrario a orientacion: landscape;  es portrait, la pantalla tiene que ser vertical para que cambie el color de texto del body.
		
		Ubicar los breakpoints:
		Hay que usar un media query para cambiar el diseño a uno mejor cuando haya espacio disponible. No importa las dimensiones exactas, se adapta por rangos.
		En las herramientas para desarrolladores hay simulador de dispositivos para el diseño responsivo.
		
		Metodos para el diseño responsivo:
		1° Empezar haciendo un diseño de escritorio y despues agregar queries para mover los elementos a medida que se va reduciendo la ventana gráfica.
		2° Comenzamos un diseño de movil para que los elementos se agranden y acomoden a un espacio mayor a medida que se amplia la ventana del navegador. Este es el más seguido.
		   La vista de los dispositivos más pequeños suelen ser una sola columna de contenido, como aparecen en el flujo normal. Solo hay que ordenar bien las fuentes para que sean legibles y centrar algunos elementos.
		

	|| LEGACY LAYOUT
		Los nuevos metodos de diseño están diseñados para convivir con el código viejo o heredado, ya que los sobreescribe, sin causar problemas.
		En dónde hay código heredado, podemos ir agregando nuevos metodos de diseño sin afectar el código viejo, es la parte más importante para mantener los metodos antiguos y modernos.
		Tambien se podría usar queries que contengan un diseño moderno con propiedades que no son aceptadas en navegadores antiguos.


	|| SUPPORTS BROWSERS
		En caso de querer dar soporte a navegadores antiguos necesitamos de propiedades fallbacks o respaldo que son las que soportan esos navegadores. 
		A los fallbacks los colocamos antes de las propiedades más avanzadas.


	|| Conversión de diseño

		Float y clear:
		Las propiedades float y clear no hacen efecto cuando los elementos se convierten en cuadrículas

		Display inline-block:
		Los elementos de tabla perderan este comportamiento si se convierten en elementos flexibles o de cuadrícula. Ademas si teníamos cajas anonimas para arreglar la estructura de la tabla no se van a crearse o aparecer.

		Display table:
		Los elementos de tabla perderan este comportamiento si se convierten en elementos flexibles o de cuadrícula. Ademas si teníamos cajas anonimas para arreglar la estructura de la tabla no se van a crearse o aparecer.

		Diseño de multiple columna:
		Se puede usar de respaldo cuando el contenedor tenga algunas propiedades de columnas que luego se convertiran en cuadrícula.

		Usar Flexbox como respaldo para Grid:
		Si convertimos un contenedor flexible en uno de cuadrícula, se ignorarán las propiedades de flexbox. Flexbox es más compatible que Grid en navegadores antiguos pero hay algunas inconsistencias que notará en estos navegadores.	

		*Las propiedades usadas para los navegadores antiguos pueden afectar a las propiedades usadas para navegadores modernos que se suele solucionar con queries.



	|| NORMAL FLOW

		Los elementos en bloque tienen dos direcciones: block-direction (como aparecen las cajas) y inline-direction (direción hacia donde fluye el contenido).	
		La propiedad writing-mode determina las dirección de los elementos en los metodos de diseño.
		La propiedad display cambia los metodos de diseño.
		Las direction y text-direction son parecidas a writing-mode.		

		Los contexto de formato determina el comportamiento de los elementos en bloque y en línea:
			
			en bloque:
			Los margenes verticales crean una separación, si aplicamos margin: 0; elimina los margen en los cuatro lados, se juntarán las cajas.
			El contenido de los elementos en bloque ocupará todo el espacio que haya en el contenedor del bloque, hacia donde fluya la dirección de este.
			Aparecerán uno debajo de otro, incluso si para dos elementos determinamos un ancho para que entren los dos.
			
			en línea:
			Se muestran uno tras otro en la dirección de contenido que disponga el modo de escritura que se esté usando.
			Solo podemos aplicar propiedades horizontales del model box (izq y der: width (content área), padding, margin)
			Solo le podemos dar altura si cambiamos el tamaño de fuente para su contenido.
			
			*Los dos tipos de elementos tienen un principio y final que es importante para las propiedades lógicas.	

			Colapso de margen:
			Cuando los margenes top y bottom se tocan, que uno solo: el más grande. Aunque hay más casos.
			
			Elementos de reemplazo (img, video, etc):
			No cambian su orientación/visualización por el modo de escritura.

		Display: define los tipos de visualización 

			exterior:
			Determina como se comporta la caja con respecto a las demás cajas dentro de ese mismo contexto de formato.
			
			interior:
			Determina como se comportan las cajas/elementos dentro de este elemento.
		
		Propiedades lógicas:
		block-size, inline-size y las demás se adaptan bien a los valores de display y writing-mode.

		Elementos del HTML:
		El elemento HTML crea el contexto de diseño/formato inicial para que los elementos esten dentro de la página.	
		Seguirán el comportamiento del normal flow, a menos que con algunas propiedades o algunos valores de display podamos sacarlos de este contexto para crear otros con distintos comportamientos.

			In flow:
			Elementos que pertenecen al contexto inicial creado por la etiqueta HTML.

			Out flow:
			Elementos que pueden salir del flujo con float, position fixed y absolute, etc.
			Podrán superponerse con los elementos que están en el contexto inicial.
			
			BFC (block formatting context):
			Hay propiedades que pueden crear estos elementos especiales que son mini html que estan fuera del principal que exteriormente sigue un comportamiento de bloque.
			Por ejemplo, un float o los item de grid o flex son bfc.

		Desbordamiento/overflow:
		Hay más contenido del que cabe en un contenedor de tamaño restringuido.
		En el flujo normal, darle a un elemento una altura y un ancho fijos genera un desbordamiento.
		
		Por defecto la propiedad overflow está en visible.
		Podemos ocultarlo (hidden) o poner barras horizontal y vertical(scroll) y auto (pone barras cuando son necesarias).
		overflow es abreviada de overflow-x y overflow-y.
		Todas estas crean un nuevo BFC.

		Pero tambien hay otras propiedades que se adaptan al texto o al caja para que no se desborde.
		Como white-space, overflow-wrap, word-break, width: fit-content, width: max-content.
		
		*Estas propiedades no hacen falta en un texto no dinamico/contralado usuario. 
		 Si en una caja definimos ancho pero no alto y la palabra más larga no supera el ancho de la caja, la altura de la caja se ajusta automaticamente al texto;
			
			Ej: Para un parrafo en una caja:
				
				<div class="box">
    			<p>One November night in the year 1782, so the story runs, two brothers sat over their winter fire in the little French town of Annonay, watching the grey smoke-wreaths from the hearth curl up the wide chimney.</p>
				</div>

				.box {
				    width: 300px;
				    border: 5px solid rebeccapurple;
				    padding: 10px;
				}

				.box p {
				    
				    // no harián falta //

				    white-space: nowrap;
				    text-overflow: ellipsis;
				    overflow: hidden;
				}

		Para propiedades lógicas:
		Son como block-size e inline-size que reemplazan a height y width.

			overflow-block:
			Reemplaza a la propiedad vertical, overflow-y

			overflow-inline:
			reemplaza a la propiedad overflow-x.
		
		*Todavía no están implementadas, se deben usar las físicas y ajustar el modo de escritura.
		
		Propiedades para los ejes:
			
			En bloque:
			block-overflow, no está aprobada.

			En línea:
			text-overflow: siempre evitará el desbordamiento. Para que funcione necesitamos algunos valores de las propiedades white-space y overflow.					
								
				.box p {
				    white-space: nowrap;
				    text-overflow: ellipsis;
				    overflow: hidden;
				}

			Todos los valores cortan el texto:
				
				clip: Puede ocurrir en medio de un carácter.

				ellipsis: Antes agrega puntos suspensivos.
				
				text-overflow: "-"; agregará un guión.

				text-overflow: ""; impide que corte el texto en medio de una palabra.
		
	|| Modelo de formato visual:
		Describe como los navegadores leen el DOM (árbol del documento) y lo muestran para los medios visuales (continuous media) una página, audio, video; y medios páginados (paged media) como puede ser un pdf para imprimir, un libro, etc.
		Los elementos del DOM o del documento (web, pdf, etc) tienen un orden de renderizado:

			1. Las cajas de CSS y su tamaño
			2. Su posicionamiento en normal flow, float y position absolute.
			3. Relaciones entre elementos en el árbol del documento.
			4. Información externa (tamaño del viewport, tamaño de imagenes).

		Cajas anonimas
		Son elementos que no podemos diseñar con CSS porque no tienen etiqueta de HTML.
			
			Casos:
			1° Hay un elemento de HTML para usar en una caja. Por ejemplo, cuando declaras display flex en un contenedor/elemento principal y hay texto que no está encerrado en un parrafo. El arbol de cajas, creará una caja anonima para contener ese texto. Se comportará como un elemento flexible pero no se puede diseñar como una caja normal porque no podemos llamar al contenido suelto.
			2° Lo mismo puede suceder cuando en un div hay contenido de texto suelto sin el elemento parrfo. Y lo mismo pasa con otros metodos de diseño.
			2° Tambien sucede con las cajas en línea cuando hay uno de estos elementos vacio.	


	|| FLEX
		Dispone los elementos sobre un eje vertical u horizontal, por eso es unidimensional.

		Dos ejes:
		El eje principal está definido por flex-direction, y el eje transversal corre en perpendicular (90°) al primero.
		
			Valores de flex-direction:

				row: 
				El eje principal corre en la dirección en línea/texto/contenido. 
				Los items se ordenan en línea, uno al lado de otro.
					
					Su eje secundario correrá en dirección de bloque.

				column: 
				Corre en dirección de bloque/elementos. 
				Los items se ordenan en columna, uno debajo de otro.
					
					El eje secundario correrá en dirección en línea.
				
				column-reverse/row-reverse: dirección contraria.
		
		writing-mode:
		Determina dónde empiezan o terminan los elementos, start/end.

		Valores por defecto:

			Flex-direction: row;
			Los items no crecen pero si se reducen
			Los items crecen en el eje transversal para contener todo el contenido
			flex-basis: auto;
			flex-wrap: nowrap;

		Valores auto / 0:

			auto:
			indica que los elementos toman el tamaño establecido en ellos mismo o si no tienen, su contenido determinará su tamaño.
			
			0: 
			indica que va a ignorar el tamaño "auto" de los elementos (por contenido o por su ancho definido) así comparte todo el espacio disponible (del contenedor) proporcionalmente.

		flex-wrap: wrap;
		Acomoda los elementos en multiples líneas cuando no hay espacio en una sola.
		
		flex-flow: 
		Es abreviada para flex-directión y flex-wrap.
			
			{flex-flow: row wrap;}

		Propiedades para los items:
		Usan el espacio disponible del contenedor flex.
		Tamaño horizonal/vertical del contenedor menos el tamaño de los elementos.
		Si sobra espacio, podemos distribuirlo entre los elementos.

			flex-grow: 
			Agrega/toma espacio del disponible para agrandar elementos.

			flex-shrink:
			Quita espacio para reducir elementos. 

			flex-basis:
			Define el tamaño de los elementos para crecer o reducirse.

				auto: valor por defecto.
				Los elementos toman el tamaño establecido en ellos mismo o si no tienen, su contenido determinará su tamaño.
			
				0: 
				Indica que va a ignorar el tamaño "auto" de los elementos (por contenido o por su ancho definido) así comparte todo el espacio disponible (del contenedor) proporcionalmente.
			
			Flex:
			Abreviada de grow, shink, basis; en este orden.

				Configuraciones:

					flex: 1 o flex: 2
					Es como si usará flex: 1 1 0, o flex: 2 1 0; para los valores flex grow (crecimiento), shrink (reducción) o basis (tamaño). 
					Los elementos pueden crecer o reducirse a partir de una base flexible de 0 (espacio proporcional).

					flex: initial
					Resetea a los valores iniciales que son flex: 0 1, cero para crecimiento, uno para reducción y auto para la base de los valores anteriores.
					
					flex: auto
					Es flex: 1 1 auto, los elementos pueden crecer y reducirse a partir de su tamaño determinado.

					flex: none 
					Es flex: 0 0 auto, se distribuyen en el contenedor utilizando el tamaño mismo de los elementos, debido al valor auto.
			
			Alinear elementos:
				
				justify-content:
				Alinea elementos en el eje principal.

				align-items:
				Para alinear elementos en el eje secundario
			
		Writting mode:
		Flexbox se adapta a los modos de escritura, se usa para cuestiones creativas de diseño ya que estamos en CSSS, no se usa para cambiar el idioma de un documento completo. 
		El idioma se trata desde HTML con los atributos dir y lang para indicar la dirección de texto y su idioma.

		Flexbox y otros metodos:

			Float y cleaner:
			Si el contenedor de un float se convierte flex, no se aplicarán estás propiedades.
			
			Grid:
			Si un elemento flexible se convierte en un elemento de cuadrícula, se ignorarán las propiedades flexibles que se hayan asignado a los elementos secundarios.
			O reemplazar un cuadrícula con flex, para navegadores antiguos.		
				
				   	<div class="box">
				       <div>One</div>
				       <div>Two</div>
				       <div>Three</div>
				    </div>
					
					.box {
			          display: flex;
			          flex-wrap: wrap;
			        }

			        .box>* {
			          flex: 1 1 200px;
			        }
					
					.box {
				        display: grid;
				        grid-template-columns: repeat(auto-fill, minmax(200px, auto));
				    }

				*creamos el mismo diseño en flex y en grid

			Propiedad display: contents
			Si un elemento flexible tiene dos elementos anidados, que normalmente no participarían en el diseño flexible.
			Elimina el diseño o estilo aplicado a a los subitems y tambien el estilo de bloque por fuera que le da el contenedor.

				.box {
		            display: flex;
		        }

		        .nested {
		            background-color: orange;
		            display: contents;
		        }

		|| Alineaciones:
			Dejan el espacio en el eje principal o secundario.
			Segun el flex-direction, los ejes van cambian; el espacio estará en eje de bloque o en el eje de línea. 
			
			Propiedades:

			justify-content: 
			Controla la alineación de todos los elementos en el eje principal (main).</li>
			
			align-items: 
			Controla la alineación de todos los elementos en el eje secundario (cross).</li>
			
			align-self: Controla la alineación de un elemento en el eje secundario.</li>
			
			align-content: 
			Controla el espacio entre las líneas del eje secundario.</li>
			
			gap, column-gap, and row-gap: 
			Crean espacios entre elementos flexibles.
			
			Valores:
				
				justify-content: En eje principal
				
					flex-start
					flex-end
					center
					space-between
					space-around
					space-evenly

				align-items: En eje secundario
					
					flex-start
					flex-end
					center
					stretch
					baseline
				
				align-content: En eje secundario

					flex-start
					flex-end
					center
					space-between
					space-around
					stretch
					space-evenly
			
		Margenes automaticos:
		Para separar un grupo de elementos alineados en un contenedor.
			
			<div class="box">
			  <div>One</div>
			  <div>Two</div>
			  <div>Three</div>
			  <div class="push">Four</div>
			  <div>Five</div>
			</div>	

			.box {
			  display: flex;
			}
			.push {
			    margin-left: auto;
			}
		
		Gaps: espacios entre los elementos

			.box {
			  display: flex;
			  flex-wrap: wrap;
			  row-gap: 10px;
			  column-gap: 2em;
			}

			.box > * {
			  flex: 1;
			}
		
		Orden de los elementos:
		Podemos cambiar el orden de los elementos con flex-direction: row/column-reverse y la propiedad order.
		Pero trae problemas de accesibilidad, el orden leido por el navegador es el del código fuente.
		Solo estamos cambiando el orden visual.
			
			propiedad order:
			Puede tomar elementos individuales y cambiarlos de lugar. 
			Diseñada distribuir los elementos en grupos ordinales.
			A los elementos se les asigna un número entero que representa su grupo, los valores más bajos van primero. Mas de un elemento puede tener el mismo numero de orden (se colocan seguidos, de menor a mayor orden del código fuente).
			Por defecto tienen un valor 0, los que tengan un numero mayor, aparecerán despues de estos.				
			Podemos usar negativos para dejar elementos primeros y a los demás no le asignamos ningun orden.

				externo: 
					
					<div class="box">
            			<div><a href="#">1</a></div>
            			<div><a href="#">2</a></div>
            			<div><a href="#">3</a></div>
            		</div>
					
					.box {
			          display: flex;
			          flex-direction: row;
			        }

			        .box :nth-child(1) { order: 2; }
			        .box :nth-child(2) { order: 3; }
			        .box :nth-child(3) { order: 1; }
				
					negativo:

						box {
				          display: flex;
				          flex-wrap: wrap;
				          flex-direction: row;
				        }

				         <div class="active"><a href="#">3</a></div>
				        .active {
				            order: -1;
				            flex: 1 0 100%;
				        }

				interno:
				Puede ocurrir que el orden logico y de lectura (al mismo tiempo) de los elementos flexibles estén separados del orden visual.
				Unos cuadros que tengan de notificaciones/noticias con un diseño que muestre una fecha, un encabezado y luego un contenido.
				La fecha será un elemento flexible, con valor de order negativo, subimos la fecha por encima del encabezado.
					
					<div class="wrapper">
			        	<div class="card">
			            	<h3>News item title</h3>
			            	<div class="date">1 Nov 2017</div>
			            	<p>This is the content of my news item. Very newsworthy.</p>
			        	</div>
					</div>
					
					.card {
            			display: flex;
            			flex-direction: column;
        			}

        			.date {
                		order: -1;
                		text-align: right;
            		}
		
		La mejor practica es mantener el orden logico, de lectura y tabulación. Tampoco se recomienda usar orden en elementos que se puedan navegar usando el teclado, como son los links.

	|| Tamaño de los elementos flexibles:
		Se relacionan con el tamaño natural de los artículos flexibles antes de que crezca o se encoja, y con el concepto de espacio libre.
			
			Espacio disponible en el contenedor:
			El navegador necesita saber el tamaño de los elementos. 
			
			Elementos sin ancho ni alto definido:

				min-content:
				Su contenido minimo y tamaño de caja será la palabra más larga.	El contenido no se desbordará.

					{width: min-content;}

				max-content:
				El contenido se muestra en una sola línea y es probable que se desborde si el contenedor no tiene el ancho suficiente.
					
					{width: max-content;}

			Espacio libre:
			Tamaño total elementos - contendor = espacio positivo o negativo

				Positivo:
				Cuando hay más espacio del necesario para mostrar todos los elementos flexibles dentro del contenedor.

			 	Negativo:
				Tamaño natural de los elementos suma más que el espacio disponible/tamaño del contenedor flex. Los elementos desbordan.
			
			*Para determinar el tamaño de los items flex debemos darnos cuenta si hay espacio positivo para distribuir o negativo para quitar.

			Tamaño por flex-direction: 
			Determinará el eje principal y si debemos calcular ancho/alto elementos con ancho/alto contenedor.
			
				row: viene por su ancho.
				column: viene por su alto.
			
			Propiedades flex:

				basis:
				Especifica el tamaño inicial del elemento flexible antes de distribuir espacio positivo.
					
					auto:
					Valor por defecto/inicial.
					Primero verifica el tamaño inicial de un elemento.

						Tamaño inicial:
						Puede tener un valor/tamaño absoluto como 200px o relativo como %, em o una palabra, etc.
						Sería la base.

						Si el elemento no tiene un tamaño definido, queda en auto.
						FLEXBOX determina que será su max-content.
						
					Ej: elementos con tamaño definido y elementos con auto
						Un elemento, que tiene un ancho explícito de 150px; su valor basis auto será 150px.
						Otro sin tamaño explicito, no tiene ancho explicito; su valor basis auto es max-content.
						En este ultimo no importa el largo de las palabras, todo el contenido se verá en una línea.
							
							.box {
						       display: flex;
						    }

						    .box :first-child {
						       width: 150px;
						    }

						    .box > * {
						       flex: 0 0 auto;
						    }
					
					valor content:
					La base flexible se toma le tamaño del contenido, incluso si hay un ancho establecido en el elemento.
					
					valor 0: 
					Ignora el tamaño del elemento ya sea auto (max-content o explicito). El espacio disponible del contenedor se repartirá proporcionalmente.

				grow:
				Espacio positivo obtenido.
				Crecimiento del elemento en relación con el resto,  cuando se distribuya el espacio libre positivo.
				Si todos tienen el mismo de distribuye uniformemente, pero se puede dar distinto.

					Combinar con basis:
						
						    .box {
						       display: flex;
						    }

						    .box > * {
						       flex: 1 1 0;
						    }

					Ej: flex: 1 1 auto
					Si los elementos no tienen tamaño determinado y basis en auto, toma el tamaño por defecto el tamaño de contenido (el ancho es la palabra más larga y el alto se ajusta a la cantidad de palabras/contenido).
					*Por la cantidad de contenido algun elemento puede quedar más grande, por más que todos tengan el mismo factor de crecimiento
					
					Ej: flex: 1 1 0
					Con basis en 0 todos los elementos quedan con el mismo tamaño porque a todos le dimos un tamaño base 0, ignora su tamaño intrinseco y extrinseco.
					Con grow 1 distribuirá proporcionalmente. 
					
					Ej: distintos valores de crecimiento desde basis 0
					Uno puede llevarse el doble o el triple del espacio disponible
					
						*calculo del navegador:
						suma los factores de crecimiento, después divide la cantidad total de espacio libre positivo en el contenedor flexible por ese número.
						A este resultado lo divide por la cantidad de elemento. 
						Así obtiene su parte cada elemento.

				shrink:
				Espacio negativo eliminado.
				Determina cuánto se encogerá el elemento flexible en relación con el resto, cuando se distribuye el espacio libre negativo.
				El navegador calcula cuando descubre que el total de los elementos son más grandes que el contenedor.
						
					Ej: un valor en 0 hace que los elementos no se reduzcan, el valor en 1 posible su reducción; si todos tienen el mismo valor se verán proporcionados.
						Vemos un ancho determinado y basis auto.
						Tambien vemos que el contenedor flex no tiene ancho, ocupará el 100% ancho de su contenedor padre.
						
						No tiene min/max-content, ni width, etc.

						    .box {
						       display: flex;
						    }
							
							.box >*	{	
								flex: 0 1 auto;        
						 		width: 200px;
							}
				
					Combinando con basis:					
					Ej: 
					Flex shrink evita que los elementos se reduzcan a 0.
					Quedan con el tamaño de min-content (el ancho de la caja será la palabra más larga)
					El item más grande toma más espacio pero los demas no desaparecen.
					Podemos hacerlo proporcional usando basis 0.		

						.box {
						    width: 500px;
						    display: flex;
						}

						.box > * {
						    flex: 1 1 auto;
						}
					
					Ej: diferentes valores de reducción
					Podemos hacer que unos elementos se reduzcan más que otros.
					
						.one {
					        flex: 1 1 auto;
					    }

					    .two {
					        flex: 1 0 auto;
					    }

					    .three {
					        flex: 2 4 auto;
						}
				
				En resumen:
				max-content lo vemos en basis, cuando el elemento no tiene tamaño definido.
				min-content lo vemos en shrink, para que el tamaño no se reduzca a 0.	
				
				Por otro lado, tenemos que controlar el tamaño del contenedor y si los elementos tiene tamaño determinado o automatico.
				
				Tamaño de basis: 
				Si está en auto pero el elemento tiene definido un tamaño explicito, toma como base el explicito.
				Si está en auto o content y el elemento no tiene uno definico, se el tamaño será el contenido.
				A basis le podemos dar una unidad de longitud o factor, si posee uno; será el tamaño del item.
				Si basis está en 0, el tamaño del elemento no se tiene en cuenta al distribuir el espacio. 
				
				Crecimiento y decrecimiento:
				Si hay espacio libre positivo (total tamaño de los elementos < contenedor), los items crecerán.
				Si hay espacio libre negativo (todos los elementos > contenedor), los items se reducirán.
				Flex-direction entra en juego para calcular anchos si es fila o altura si es columna.
				
				Justify-content:
				Podemos aplicarla cuando hay espacio libre para distribuir los elementos, sin aplicar flex basis, grow, shrink. 
				
				Margin auto:
				Para separar un grupo de elementos de otro.

		|| Tamaño de los contenedores flexibles:
			
			Elementos en multiples filas/columnas:
			No sucede automaticamente porque el valor por defecto de la propiedad flex-wrap es nowrap.
			Con el valor wrap de flex-wrap evitamos que los elementos desborden el contenedor y se acomoden en una línea nueva. 
			Tambien podemos usar fle-flow.

				{ flex-wrap: wrap; }
					o 
				{ flex-flow: row wrap; }
				{ flex-flow: column wrap; }

				Ej: filas
				Vemos elementos con tamaño explicito aplicado desde flex-basis.
				Pero un contenedor sin ancho. 

					.box {
					    display: flex;
					    flex-wrap: wrap;
					}

					.box>* {
					    flex: 1 1 160px;
					}
  
				Ej: columnas

					.box {
			       		height: 300px;
			        	display: flex;
			        	flex-direction: column;
			        	flex-wrap: wrap;
			   		}

			    	.box>* {
			        	flex: 1 1 80px;
			    	}

			*Si sobra espacio en el contenedor, el ultimo elemento lo ocupará todo; quedando desproporcionado con respecto a los demas. 		
			A menos que la cantidad de elementos coincida perfectamente con el tamaño del contenedor.
				
				Ej: cuadrícula

				    .box {
				       height: 350px;
				       width: 300px;
				       display: flex;
				       flex-direction: column;
				       flex-wrap: wrap;
				    }

				    .box>* {
				        flex: 1 1 60px;
				    }

			*Si damos altura al contenedor y tamaño base a los elementos podemos crear cuadrículas con flex.
			*Si damos ancho al contenedor, los elementos dejarán de ocupar todo el ancho de su contenedor padre.
			
			*Los valores column/row reverse solo cambian el inicio y fin: derecha a izquierda.
				
				Ej: reverse:

					.box {
				        display: flex;
				        flex-wrap: wrap;
				        flex-direction: row-reverse;
				    }
				    .box>* {
				        flex: 1 1 160px;
				    }
			
			*No se puede indicarle a un elemento que se alineen con otro en otra fila.
			Cada línea actúa como un nuevo contenedor, por eso se llena cuando hay espacio disponible.
			Esto se debe al proposito unidimensional de flexbox.
				
				Ej: grid, sobra espacio y el ultimo item no lo llena

					.box {
				        display: grid;
				        grid-template-columns: repeat(auto-fill,minmax(160px, 1fr));
				    }
				
				// a menos que borre un elemento.			
			
			*Si queremos distribución del espacio fila por fila, usamos flexbox. Si no, usamos Grid.

			Cuadrículas con flex:
			Se asigna anchos porcentuales a elementos flexible.
			Controlamos la flexibilidad usando porcentajes.

				.box {
			        width: 500px;
			        display: flex;
			        flex-wrap: wrap;
			    }
			    
			    .box>* {
			        flex: 0 0 33.3333%;
			    }
				
				o con espacios:
				
				.wrapper {
			        border: 2px dotted rgb(96, 139, 168);
			        width: 500px;
			      }

			    .box {
			        display: flex;
			        flex-wrap: wrap;
			        gap: 10px;
			    }

			    .box>* {
			        flex: 1 1 160px;
			    }

			Colapsar/esconder elementos: 
			Usamos propiedad visibility:collapse; se puede combinar con Js al momento esconder y mostrar contenido.
			Mantiene el diseño y los elementos en sus líneas, así no se representarán desprolijamente.

				<div class="box">
		          <div>One</div>
		          <div>Two</div>
		          <div class="hide">Three
		              <br>has
		              <br>extra
		              <br>text
		          </div>
		        </div>

				.box {
	            	display: flex;
	         	}

	          	.box>* {
	            	flex: 1 1 200px;
	          	}
	          
	          	.hide {
	            	visibility: collapse;
	          	}
			
			Ej: elemento escondido con varias filas
				Si al elemento escondido le sacamos la propiedad visibility, el diseño se rompe; se distribuye el espacio y los demás elementos cambian de tamaño, el contenedor puede cambiar de tamaño si no lo tiene definido.
				
				.box {
		            display: flex;
		            flex-wrap: wrap;
		        }
		        
		        .box>* {
		            flex: 1 1 auto;
		        }
		        
		        .hide {
		            visibility: collapse;
		        }

				<div class="box">
	                <div>One</div>
	                <div>Add more text to this box to make it grow</div>
	        		<div class="hide">Three
	              		<br>has
	              		<br>extra
	              		<br>text
	         		 </div>
	          		<div>Four</div>
	          		<div>Five</div>
	          		<div>Six</div>
	          		<div>Seven</div>
	          		<div>Eight</div>
	          	</div>
			
			*Cuando se vuelve a mostrar el elemento causa problemas en el diseño, puede requerir un replanteamiento de la estructura, por ejemplo, colocar cada fila en un contenedor flexible separado para que no puedan cambiar filas.
			
			visibility: hidden y display none:
			La diferencia con display: none es que este lo elimina del formateo de la página, en cambio el otro lo ocuta pero se puede usar.			
			*Chrome y Safari tratan a collapse como hidden.

		|| Usos tipico:
			El fuerte de flexbox es su capacidad de alineación y su gran compatibilidad con navegadores antiguos y modernos.

			Navegación:

				// Dependiendo del HTML o del diseño, seleccionamos uno u otros elementos y agregamos otras capacidades.
					Lo ideal es que cada selector tenga un nombre dado con una clase así es más facil el mantenimiento.	
						
						<nav>
					 		<ul>
					   			<li><a href="#">Page 1</a></li>
					    		<li><a href="#">Page 2</a></li>
							</ul>
						</nav>

						nav ul {
						  display: flex;
						  justify-content: space-between;
						}

						
						o //Diferente espaciado en los elementos.

						nav ul {
						  display: flex;
						}

						nav li {
						  flex: auto ;
						}


						o // Barra de navegación fija para pantallas grandes.

						nav {
						  position: sticky;
						  top: 0;
						  z-index: 99;
						}

				        nav ul {
				          display: flex;
				          flex-flow: row wrap;
				          justify-content: space-between;
				        }

				        nav ul li {
				          flex: 1fr;
				        }		

				Agrupar y empujar elementos a un lado:
					
					<div class="box">
						<div>Three</div>
					  	<div class="push">Four</div>
					  	<div>Five</div>
					</div>	

					.box {
					  display: flex;
					}
					.push {
					    margin-left: auto;
					}
						
						o
				
					nav ul {
					  display: flex;
					  margin: 0;
					}

					.push-right {
					  margin-left: auto;
					}

					 	0

					nav ul {
					  display: flex;
					  margin: 0 -10px;
					}

					nav li {
					  margin: 0 10px;
					}

					.push-right {
					  margin-left: auto;
					}
			
			Diseño de carta:

				Con footer abajo:
				Necesitamos que el footer se pegue a la parte inferior de la carta, el diseño de bloque interno de los elementos flexibles no puede lograrlo; los elementos se muestran seguido.
				Hacemos que el contenido/elemento antes del footer crezca.	
				
					.card {
					  display: flex;
					  flex-direction: column;
					}

					.card .content {
					  flex: 1 1 auto;
					}
				
					<div class="cards">

					  <div class="card">
					    <div class="content">
					      <p>This card doesn't have much content.</p>
					    </div>
					  <footer>Card footer</footer>
					
						//... más cartas

					</div>

				Con titulos y más elementos:

					<div class="wrapper">
			        	<div class="card">
			            	<h3>News item title</h3>
			            	<div class="date">1 Nov 2017</div>
			            	<p>This is the content of my news item. Very newsworthy.</p>
			        	</div>
					</div>
					
					.card {
            			display: flex;
            			flex-direction: column;
        			}
				
			Centrar item:

				.box {
				  display: flex;
				  align-items: center;
				  justify-content: center;
				}

				.box div {
				  width: 100px;
				  height: 100px;
				}		
			
			Media object:
			Imagen u otro elemento a un lado y texto a la derecha.
			
				Ej: tenemos un contenedor flex con dos elementos, la alineación en el eje transversal es flex-start para que se coloquen arriba de todo.
					La imágen o su contenedor tiene padding a los cuatro lados para que el texto se acomode bien.
					Además, agregamos flex: 1; para que crezca hasta su 100% (seleccionamos la imagen con otra regla) y el texto no ocupe casi todo el espacio del contenedor.

					<div class="media">
					  <div class="image"><img src="MDN.svg" alt="MDN logo"></div>
					    <div class="content">This is the content of my media object.</div>
					</div>

					.media {
					  display: flex;
					  align-items: flex-start;
					}

					.media .content {
					  flex: 1;
					  padding: 10px;
					}

					.imagen img {
					   ancho máximo: 100px;
					}

					// si queremos que crezcan y se reduzcan en proporción:

						.media .content {
						  flex: 1;
						  padding: 10px;
						}

						.image {
						  flex: 1;
						}

			 Controles de formularios:
			Requieren muchos elementos de html, debemos alinearlos.
					
				<form class="example">
					<div class="wrapper">
						<input type="text" id="text">
						<input type="submit" value="Send">
					</div>
				</form>
				
				.wrapper {
		  			display: flex;
				}

				.wrapper input[type="text"] {
		  			flex: 1 1 auto;
				}

				Tenemos los botones imput y buttom en un contenedor flex. Despues hacemos que imput crezca, mientras que buttom no. El campo crecerá a medida que cambie el tamaño de la ventana.
				
				Agregamos otro botón:

					.wrapper {
			  			display: flex;

					}

					.wrapper input[type="text"] {
			  			flex: 1 1 auto;
					}

					<form class="example">
					  <div class="wrapper">
					    <label for="text">Label</label>
					    <input type="text" id="text">
					    <input type="submit" value="Send">
					  </div>
					</form>
					-->
				</code>
				
				Ponemos un label o un icono a la izquierda, ahora el campo de entrada de datos flexible tiene menos espacio.
			
		|| Dar compatibilidad:
			Para navegadores muy antiguos debemos incluir los prefijos en cada regla.

				.wrapper {
				  display: -webkit-box;
				  display: -webkit-flex;
				  display: -ms-flexbox;
				  display: flex;
				}

			*autoprefixer es un sitio dónde podemos ver los prefijos que necesitamos para las versiones antiguas de los navegadores.
			
		    fallbacks:
			Flexbox ignorará las siguientes propiedades por eso podemos usarlas en los elementos flex para dar compatibilidad a navegadores antiguos que no admiten flex. 
			Con ellas logramos diseños parecidos. Los navegadores modernos sobreescribirán las propiedades antiguos y aplicará las modernas.

				float y clear: 
				Cuando aplicamos flex a un flotante, estos dejan de tener efecto.
				Se convierten en elementos flexibles y adquieren la misma proporción, algo que no pasa en float.

					.box {
					  display: flex;
					}

					.item {
					  float: left;
					  width: 150px;
					  flex: 1;
					}
   
				display inline-block:
				Pasa lo mismo, si eliminamos la propiedad flex, vemos las diferencias. 
				Presenta espacios en blanco.
					
					.box {
					  display: flex;
					}

					.item {
					  display: inline-block;
					  width: 150px;
					  flex: 1;
					}					

				display table-:
				Funciona hasta I.E, crea elementos anomimos para representar un diseño de columnas y centrado.
				Pero no se pueden diseñar. Si eliminamos la propiedad flex, vemos que se crean columnas parecidas.

					.box {
					  display: flex;
					}

					.item {
					  display: table-cell;
					  width: 150px;
					  flex: 1;
					}

      			vertical-align:
				Se puede usar en display: table-cell y display: inline-block.
				Flexbox y los navegadores modernos sobreescribirán esta propiedad y podemos usar justify-content o align-content.

					.box {
					  display: flex;
					}

					.item {
					  display: inline-block;
					  vertical-align: top;
					  width: 150px;
					  flex: 1;
					}

				Queries:
				Podemos detectar si hay compatibilidad con flex

					@supports (display: flex) {
					   //code for supporting browsers
					}
				
					o para los que admiten el prefijo antiguo de flexbox

					@supports (display: flex) or (display: -webkit-box) {
					   //code for supporting browsers 
					}


	|| GRID
		La cuadrícula se forma con un conjunto de líneas horizontales y verticales, los elementos se pueden colocar dentro de ellas.
		Podemos hacerlas de tamaño fijo (px) para que los elemtos se adapten al diseño. 
		O hacerlas flexibles (1fr) para que el diseño se adapte a los elementos.
			
		|| Contenedor:
			Solo los hijos directos serán grid items. Display flex por si solo, creará varias una columna con todos los elementos dispuestos uno debajo de otro.		
			Las pistas le dan forma final de cuadrícula, se crean con grid-templete-rows/columns.
			Los elementos que no son o no pueden ser colocados en las pistas creadas por nosotros, se colocarán automaticamente en las pistas implicitas que creará el navegador.
			El tamaño de las pistas explicitas serán los valores que esten en grid-templete-columns/rows.
			El tamaño de las pistas implicitas será su contenido o usar grid-auto-rows/columns.
				
				.wrapper {
				  display: grid;
				  grid-template-columns: repeat(3, 1fr);
				  grid-auto-rows: 200px;
				}

			Las unidades flexibles se usan para que el diseño se adapte al ancho de la ventana del navegador, las pistas o elementos crecen y se reducen segun el espacio disponible.
			Podemos dar diferentes valores para que una parte del diseño se vea más grande u ocupe más espacio disponible que otras partes del sitio. 
			Tambien podemos mezclar los valores inflexibles/absolutos con los flexibles para elementos que tengan que ser mostrados completamente y para elementos que puedan reducirse.
			Podemos usar las funciones minmax() para dar un tamaño flexible entre un mínimo y máximo. 
				
				.wrapper {
				  display: grid;
				  grid-template-columns: repeat(3, 1fr);
				  grid-auto-rows: minmax(100px, auto);
				}
			
			Las líneas de grid se definen después de las pistas (a su vez crean celdas), su numeración depende de la dirección de escritura.
			Con grid-column o grid-row start/end, los números de las líneas serán los sus valores.
			Para colocarlos en las áreas usamos grid-template-areas para crear el diagrama con los nombres de las areas que tenemos que configurar con la propiedad grid-area.
			El diagrama de las areas debe ser rectángular
			Podemos superponer los elementos usando las líneas o usando z-index.
			
				.box1 {
				  grid-column-start: 1;
				  grid-column-end: 4;
				  grid-row-start: 1;
				  grid-row-end: 3;
				  z-index: 2;
				}

		|| Flexbox vs Grid:
			Flex funciona desde el contenido que toma el espacio del contenedor, además de las capacidades de alineación y espaciado. 
			Grid prioriza el diseño y a partir de este colocamos a los elementos. Si creamos pistas que se adaptan al contenido, los elementos se acomodan en línea nueva.

			Alineación:
			El eje principal es la dirección en línea (texto) y el eje secundario es la dirección en bloque (cajas).
			Podemos usar algunas propiedades de box-aligment que valen tanto para flex y grid.

				.wrapper {
				  display: grid;
				  grid-template-columns: repeat(3, 1fr);
				  align-items: end;
				  grid-auto-rows: 200px;
				}
				.box1 {
				  align-self: stretch;
				}
				.box2 {
				  align-self: start;
				}
			
			Unidades flexibles:
			La unidad fr, cuando se combina con la función minmax(), puede brindarnos un comportamiento muy similar a las propiedades flex en flexbox.
			Hay una diferencia entre la forma en que los dos diseños funcionan de manera receptiva, como hay diferencia en la forma de diseño y representación.
			Flexbox puede acomodar todos los elementos en una fila siempre que haya espacio.
			Mientras que en Grid siempre van a estar las mismas pistas que definimos aunque más chicas o grandes.

			Autocompletar y autoajustar cuadrícula:
			Para las filas o columnas podemos usar el valor auto-fill y auto-fit para lograr un efecto responsivo como en flexbox en la función repeat.
				
				Ej: Con auto-fill creará tantas columnas de 200 px como entren en el contenedor.
					
					.wrapper {
					  display: grid;
					  grid-template-columns: repeat(auto-fill, 200px);
					}

					// Puede quedar espacio sin ocupar en el contenedor.
				
				Ej: Con auto-fit y minmax() repartirá el espacio del contenedor entre el mínimo y el máximo.
					Tendremos filas y columnas variables y responsivas.

					.wrapper {
					  display: grid;
					  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
					}

					// Los elementos ocupan todo el espacio del contenedor.

		|| Grid y position absolute:
			Cuando un contenedor grid es bloque contenedor de un elemento posicionado
			Para que el contenedor de grid se bloque contenedor de un elemento, debemos agregarle la propiedad position: relative.
			Así es como funciona para cualquier otro elemento padre cuando necesitemos un elemento absoluto.
			Ahora podemos mover el elemento en todo el area del bloque contenedor/cuadrícula.
				
				wrapper {
				  display: grid;
				  grid-template-columns: repeat(4, 1fr);
				  grid-auto-rows: 200px;
				  gap: 20px;
				  position: relative;
				}

				.box3 {
				  grid-column-start: 2;
				  grid-column-end: 4;
				  grid-row-start: 1;
				  grid-row-end: 3;
				  position: absolute;
				  top: 40px;
				  left: 40px;
				}

				// Estaba posicionado en esas líneas, salió del flujo y cierra ese lugar; se ubica a 40px desde top y left.		
			
			*Una cuadrícula que es padre de un elemento absoluto pero que no tiene position: relative no puede contener a ningun elemento.
			El bloque contenedor pasa a ser la ventana gráfica si no hay otro.	
			Si eliminamos position: relative del contenedor vemos este efecto.
			
			Grid item como contenedor de un elemento absoluto:
				
				<div class="wrapper">
					<div class="box2">Two</div>
				 	<div class="box3">
				    	Three
				 	
				  		<div class="abspos"> 
				 			subelement of three
				    	</div>

					</div>
				</div>
				
				.wrapper {
				  display: grid;
				  grid-template-columns: repeat(4, 1fr);
				  grid-auto-rows: 200px;
				  gap: 20px;
				}

				.box3 {
				  grid-column-start: 2;
				  grid-column-end: 4;
				  grid-row-start: 1;
				  grid-row-end: 3;
				  position: relative;
				}

				.abspos {
				  position: absolute;
				  top: 40px;
				  left: 40px;
				  background-color: rgba(255, 255, 255, 0.5);
				  border: 1px solid rgba(0, 0, 0, 0.5);
				  color: #000;
				  padding: 10px;
				}
			
		|| display: contents:
			Los elementos secundarios de un item de cuadrícula no pertenecen a ella, su comportamiento es de elementos de bloque comunes.
			Cuando activamos display: contents al elemento padre, los hijos se disponen en cuadrícula.
				
				<div class="wrapper">
				  <div class="box box1">
				    <div class="nested">a</div>
				    <div class="nested">b</div>
				    <div class="nested">c</div>
				  </div>
				</div>
			
				.wrapper {
			  		display: grid;
			  		grid-template-columns: repeat(3, 1fr);
			  		grid-auto-rows: minmax(100px, auto);
				}

				.box1 {
			  		grid-column-start: 1;
			  		grid-column-end: 4;
			  		display: contents;
				}
			
		|| Colocación automatica:
			Si no los colocamos en la cuadrícula de ninguna manera, se distribuirán de acuerdo con las reglas de colocación automática, un elemento en cada una de las celdas, uno despues de otro. 		
			
				.wrapper {
				  display: grid;
				  grid-template-columns: repeat(3, 1fr);
				  grid-template-rows: repeat(3, 100px);
				}
				
				// tenemos 3 columnas y 3 filas que forman 9 celdas para colocar elementos. 
					Este diseño creo 4 líneas en cada dimension (horizontal y vertical).
					Y tambien, si tenemos menos de 9 elementos sobrarán lugares. 
			
		|| Espacios vacios:
			Es otra caracteristica de grid, podemos dejar espacios sin usar margenes.
			Con la ubicación en línea tendríamos que evitar las líneas que definen el área que deseemos que este vacia.
			Con grid-template-areas usamos un punto cuando hacemos el diagrama.
			
			Si un elemento ocupa todo una fila o columna no hace falta el valor de grid-column o grid-row end.
				
				.box1 {
				  grid-column-start: 1;
				  grid-row-start: 1;
				  grid-row-end: 4;
				}
				
				.box3 {
				  grid-column-start: 2;
				  grid-row-start: 1;
				}
				
				o

				.box1 {
				  grid-column: 1;
				  grid-row: 1 / 4;
				}

				.box3 {
				  grid-column: 2;
				  grid-row: 1;
				}

			Con el diagrama de grid-template-areas ponemos el nombre de las areas las veces que necesitamos.
			
			Con grid-area ademas de dar un nombre a los elementos, podemos ubicarlos en las líneas
			Su orden:

		    	grid-row-start
    			grid-column-start
    			grid-row-end
    			grid-column-end
			
				.box1 {
				  grid-area: 1 / 1 / 4 / 2;
				}

				.box3 {
				  grid-area: 1 / 2 / 2 / 3;
				}
				
				// El orden está inspirado en el flujo lógico: 
					
					block-start
					inline-start
					block-end
					inline-end
			
		|| Líneas negativas/reversa:
			En modo de escritura de izquierda a derecha, para columnas se empiezan a numerar desde la derecha, -1 es la primera, sigue -2, etc.
			Para filas se enumeran desde abajo hacia arriba -1, -2.
			Quiere decir que el posicionamiento en dirección/orden se cuenta de esa manera.
				
				.box4 {
				  grid-column-start: -2;
				  grid-column-end: -4;
				  grid-row-start: -3;
				  grid-row-end: -4;
				}
			
			Podemos estirar un elemento a lo largo del contenedor:
				
				.item {
				  grid-column: 1 / -1;
				}

		|| Espacios:
			Las propiedades column-gap, row-gap y gap no agregan espacio, sino que lo toman.
			Si las filas y columnas nos quedan más pequeñas de lo que deseamos, aumentamos su tamaño en grid-template-columns/rows
				
				.wrapper {
				  display: grid;
				  grid-template-columns: repeat(3, 1fr);
				  grid-template-rows: repeat(3, 100px);
				  column-gap: 20px;
				  row-gap: 1em;
				}
			
		|| Ubicación con el valor span:
			Podemos especificar una línea de inicio y luego el número de pistas que desea que abarque el área.
				
				.box1 {
				  grid-column: 1;
				  grid-row: 1 / span 3;
				}

				// Ej: Si 4 filas, empieza desde uno y despues toma 3; expandiendose hasta el final.
					En la columna no tenemos el valor final, toma toda la columa 1.
		
		|| Nombrar un área
			Con grid-area le damos un nombre y con grid-template-area le damos ubicación, haciendo una especie de diagrama con los nombres.
			Las áreas principales de una página puede ser:

		     	un encabezado
		    	un pie de página
		    	una barra lateral
		     	el contenido principal

		    Podemos dejar una celda vacia usando un punto en el diseño de grid-template-areas	
			Cada fila de grid-template-areas se crea con comillas dobles al inicio y al final.
			En al ultima fila colocar punto y coma para cerrar la propiedad.
			Siempre que haya un espacio entre varios puntos, formará las celdas.
			Para ordenar el diseño (solo en la propiedad) ubicamos los nombre en línea.
			Para expandir elementos en las celdas, usamos varias veces su nombre; la forma debe ser rectángular. Así creamos areas más grandes.

				.wrapper {
				  display: grid;
				  grid-template-columns: repeat(9, 1fr);
				  grid-auto-rows: minmax(100px, auto);
				  grid-template-areas:
				    "hd hd hd hd   hd   hd   hd   hd   hd"
				    "sd sd sd main main main main main main"
				    ".  .  .  ft   ft   ft   ft   ft   ft";
				}
				
				<div class="wrapper">
				  <div class="header">Header</div>
				  <div class="sidebar">Sidebar</div>
				  <div class="content">Content</div>
				  <div class="footer">Footer</div>
				</div>
			
		|| Redifinir todo el diseño con queries
			Empezamos con un diseño de columna flexible pero muy grande, hasta los 500px del segundo punto de interrupción.
			Despues pasamos a un diseño de menos filas pero más ancho para que entre todo el contenido.

				.wrapper {
				  display: grid;
				  grid-auto-rows: minmax(100px, auto);
				  grid-template-columns: 1fr;
				  grid-template-areas:
				    "hd"
				    "main"
				    "sd"
				    "ft";
				}

				@media (min-width: 500px) {
				  .wrapper {
				    grid-template-columns: repeat(9, 1fr);
				    grid-template-areas:
				      "hd hd hd hd   hd   hd   hd   hd   hd"
				      "sd sd sd main main main main main main"
				      "sd sd sd  ft  ft   ft   ft   ft   ft";
				  }
				}

				@media (min-width: 700px) {
				  .wrapper {
				    grid-template-areas:
				      "hd hd hd   hd   hd   hd   hd   hd hd"
				      "sd sd main main main main main ft ft";
				  }
				}
		
		|| Componentes ui:
			Grid puede ser util para crear elementos pequeños.

			media object:
			Se compone de un elementos multimedia (img, video, svg, etc) y de texto.
			Podemos crear dos columnas de tamaño fijo, variable, combinado, uno responsivo y otro no
				
				* {
				  box-sizing: border-box;
				}

				.media {
				  border: 2px solid #f76707;
				  border-radius: 5px;
				  background-color: #fff4e6;
				  max-width: 400px;
				  display: grid;
				  grid-template-columns: 1fr 3fr;
				  grid-template-areas: "img content";
				  margin-bottom: 1em;
				}

				.media .image {
				  grid-area: img;
				  background-color: #ffd8a8;
				}

				.media .text {
				  grid-area: content;
				  padding: 10px;
				}

				// al reves:

				.media.flipped {
				  grid-template-columns: 3fr 1fr;
				  grid-template-areas: "content img";
				}

		|| Posicionamiento con areas y líneas:
			Pueden funcionar juntas, cuando usamos líneas con nombres.
			Después de su nombre ponemos la cantidad/tamaño de fila o columna.
			Al final posicionamos una elemento con grid-column o grid-row-start/end usando el nombre puesto entre corchetes.

			Nombrar líneas:
			En grid-template-columns/rows, se nombran las líneas entre corchetes; solo le damos nombre a las que son esenciales para el diseño o para marcar áreas de posicionamiento importantes.
				
				Ej: Tenemos tres columnas y 4 líneas.
					
					.wrapper {
					  display: grid;
					  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
					  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
					}

					.box1 {
					  grid-column-start: main-start;
					  grid-row-start: main-start;
					  grid-row-end: main-end;
					}
			
			* El diseño se responsivo, redefinimos la cuadrícula, en lugar de tener que redefinir la posición del contenido cambiando el número de línea con un query.
			  Para cambiar el diseño solo necesitamos volver a cambiar al posición del elemento desde grid-column/row y no desde grid-template-columns/rows. 
		
			Podemos dar multiples nombres a las líneas dejando un espacio en blanco, además de poder usar uno solo para usarla. 
				
				[sidebar-end main-start]
			
			Definir áreas con nombres de línea:
			Con el nombre de las líneas podemos definir un área: 
			Lo hará grid cuando definimos el mismo nombre en grid-template-columns y rows.
			Con esto no necesitamos usar grid-template-areas.
				
				.wrapped {
				  display: grid;
				  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  				  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
				
				.thing {
				  grid-area: content;
				}

				// se ubicarán en el centro del área.
			
			*Es lo contrario a lo que pasa cuando usamos grid-template-areas, en dónde creamos las áreas pero no las líneas.
				
				Ej: posicionamos un elemento en el área main-content usando nombres de líneas "no definidos" explicitamentes.
						
						.wrapper {
						  display: grid;
						  grid-template-columns: repeat(9, 1fr);
						  grid-auto-rows: minmax(100px, auto);
						  grid-template-areas:
						    "hd hd hd hd   hd   hd   hd   hd   hd"
						    "sd sd sd main main main main main main"
						    "ft ft ft ft   ft   ft   ft   ft   ft";
						}
												
						.header {
						  grid-area: hd;
						}

						.wrapper > div.overlay {
						  z-index: 10;
						  grid-column: main-start / main-end;
						  grid-row: hd-start / ft-end;
						  border: 4px solid rgb(92, 148, 13);
						  background-color: rgba(92, 148, 13, 0.4);
						  color: rgb(92, 148, 13);
						  font-size: 150%;
						}

			Multiples líneas con un mismo nombre:
			Usamos la función repeat().

				Ej: Doce columnas de igual ancho.
					Tenemos tamaño 1fr de la pista de la columna y nombre de línea de [col-start].
					Entonces, 12 columnas, todas llamadas col-start.
						
						.wrapper {
						  display: grid;
						  grid-template-columns: repeat(12, [col-start] 1fr);
						}
					
					Para ubicar un elemento usamos el nombre de la línea, más el número de esa línea.
						
						.item1 {
						  grid-column: col-start / col-start 5;
						}
					
					Podemos usar span:

						.item2 {
						  grid-column: col-start 7 / span 3;
						}
				
				Ej: multiples columnas que se repiten con varios nombres de fila
					Tenemos ocho pistas, con una columna de ancho 1fr más angosta llamada col1-start seguida de una columna 3fr más ancha llamada col2-start.
						
						.wrapper {
						  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
						}
					
				Ej: diseño de 12 columnas 	
					Los nombre de línea repetidos se adaptan bien para este tipo de diseño.
					Tenemos 12 columnas con un tamaño responsivo de 1fr con todas líneas llamadas col-start.	

						.wrapper {
						  display: grid;
						  gap: 10px;
						  grid-template-columns: repeat(12, [col-start] 1fr);
						}

						.main-header,
						.main-footer {
						  grid-column: col-start / span 12;
						}

						.side1 {
						  grid-column: col-start / span 3;
						  grid-row: 2;
						}

						.content {
						  grid-column: col-start 4 / span 6;
						  grid-row: 2;
						}

						.side2 {
						  grid-column: col-start 10 / span 3;
						  grid-row: 2;
						}

		|| Autoposicionamiento de los elementos en grid
			Cuando crea una cuadrícula y no coloca algunos o todos los elementos.
			Los elementos, se colocarán en la cuadrícula, uno en cada celda de la cuadrícula.
			Organiza los elementos por fila, uno al lado de otro.			
			Si creamos pistas explicitas con grid-template-rows/columns suficientes se colocarán aquí, sino, creará filas implicitas.
			
			Dimensionar pistas implicitas:
			Por defecto tienen un tamaño automatico (auto-sized), los cuadros se adaptarán al contenido para que nos se desborde, se harán más grandes.
			Pero podemos controlar el tamaño con grid-auto-rows/columns
				
				.wrapper {
				  display: grid;
				  grid-template-columns: repeat(3, 1fr);
				  gap: 10px;
				  grid-auto-rows: 100px;
				}
			
				Usando minmax():
				Podemos pasar un tamaño mínimo de 100px hasta un tamaño máximo auto (la caja se ajusta al contenido).
					
					.wrapper {
					  display: grid;
					  grid-template-columns: repeat(3, 1fr);
					  gap: 10px;
					  grid-auto-rows: minmax(100px, auto);
					}

					// Todas las implicitas tienen este tamaño.
		
				Dimensionar varias pistas:
				Usamos la funcion repeat(), el primer valor es la cantidad, el segundo es el tamaño.
					
					Ej: en este ejemplo solo tenemos dos filas, una de 100px y otra de 200px. 
					Si colocamos muchos elementos que necesiten una tercera fila se creará con el tamaño de 100px primero, y 200px después.	
						
						.wrapper {
						  display: grid;
						  grid-template-columns: repeat(3, 1fr);
						  gap: 10px;
						  grid-auto-rows: 100px 200px;
						}		
				
						// Todas filas implicitas seguirán este patrón.

			|| Qué propiedad el ancho y alto de los elementos grid:
				Rows determinan el alto y columns determinan el ancho.
				
				grid-auto-flow:
				Controla como se colocan los elementos en las pistas implicitas, si en columna o fila.
				Acepta los valores: row, column o dense; en un par o uno.
				Los pistas explicitas se muestran según su configuración.
				Y grid-auto-rows/columns es solo para el tamaño.
					
					row: elementos en fila, uno al lado de otro.
					column: elementos en columna, uno debajo de otro.
					dense: llena los espacios vacios con los elementos que puedan entrar.
						
						row/column junto con dense llenará los espacios para que diseño sea coherente.
						row es el valor por defecto.

				Las tres propiedades son distintas y tienen distinto propósito:

					grid-auto-flow: define como se muestran las pistas implicitas.
					grid-auto-columns/rows:	define el tamaño de las pistas implicitas.
					grid-template-columns/rows: crea y define el tamaño de las pistas explicitas.
				
					Ej:

						.wrapper {
						  display: grid;
						  grid-template-rows: repeat(3, 200px);
						  gap: 10px;
						  grid-auto-flow: column;
						  grid-auto-columns: 300px 100px;
						}

			|| Orden de los elementos ubicados automaticamente:
				Grid coloca a los elementos a los que no se les ha dado una posición explicita en lo que se llama "orden de documento modificado"
				Si usamos la propiedad order para reordenar los elementos, los elementos siguen este orden y no el orden DOM (como aparecen en el código fuente)
				
				Prioridad para el posicionamiento:
					
					1° los elementos que tengan una posición con alguna propiedad.
					2° los elementos automaticamente posicionados.
					3° los elementos en orden del DOM.
			
				Llenar espacios:
				A veces tenemos una cuadrícula que no necesita un orden lógico y podemos hacer que unos elementos se muestren antes que otros porque son más grandes etc.
				Usamos la propiedad grid-auto-flow: dense. O usamos row dense si el orden es en fila o column dense si es en columna.
				Solo cambia el orden visual de los elementos del DOM, el orden para interactuar con los elementos es el del DOM	(código fuente o HTML), como cuando se tabula sobre en link.

					.wrapper {
					  display: grid;
					  grid-template-columns: repeat(4, 1fr);
					  grid-auto-rows: 100px;
					  gap: 10px;
					  grid-auto-flow: dense;
					}

				Elementos anomimos:
				Los que no están envueltos por etiquetas, no se pueden diseñar al no poder tomarlos con un selector de CSS.
				Se colocará según las reglas de posicionamiento automatico.
				Los que no son anonimos podemos colocarlos con algún metodo de posicionamiento.
				
				ubicación automatica:
				Sirve para diseños en los que los elementos no requieren un orden lógico.
					
					Ej: galería de imágenes
						Algunas imágenes de paisajes y retratos. Se ha configurado imágenes de paisajes, con una clase de paisaje para abarcar dos pistas de columnas.

						.wrapper {
						  display: grid;
						  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
						  gap: 10px;
						  grid-auto-flow: dense;
						}

						.wrapper li.landscape {
						  grid-column-end: span 2;
						}
						
						<ul class="wrapper">
							<li><img src="./portrait.jpg" alt="placeholder"></li>
    						<li class="landscape"><img src="landscape.jpg" alt="placeholder"></li>
    						<li><img src="portrait.jpg" alt="placeholder"></li>
    						<li class="landscape"><img src="landscape.jpg" alt="placeholder"></li>
						</ul>

						
					Ej: Lista de definiciones
						Son planas, no hay nada que envuelva los grupos de elementos dt y dd.
						Los términos van de un lado y las definiciones del otro, sin importar cuántos de cada uno tenemos.

						dl {
						  display: grid;
						  grid-template-columns: auto 1fr;
						  max-width: 300px;
						  margin: 1em;
						  line-height: 1.4;
						}

						dt {
						  grid-column: 1;
						  font-weight: bold;
						}

						dd {
						  grid-column: 2;
						}
						
						<div class="wrapper">
						  <dl>
						    <dt>Mammals</dt>
						    <dd>Cat</dd>
						    <dd>Dog</dd>
						    <dd>Mouse</dd>
						    <dt>Fish</dt>
						    <dd>Guppy</dd>
						    <dt>Birds</dt>
						    <dd>Pied Wagtail</dd>
						    <dd>Owl</dd>
						  </dl>
						</div>

		|| Box alignment en grid
			Detalla la alineación para los metodos de diseño, en este caso, para grid.

			Dos ejes:

				de bloque:
				Determina como se disponen los elementos en bloque del diseño normal/bloque.
				Flujen uno debajo de otro.
				El eje es vertical.

				de línea:
				Los elementos en línea van en dirección del texto o contenido, funciona dentro del diseño de bloque.
				Este eje es horizontal.
			
			Podemos alinear los elemenentos dentro del área/celdas de la cuadrícula.

			Alinear items en el eje de bloque:
			Usamos las propiedades align-items o align-self.

				align-items:
				Alinea a todos los elementos. Despues podemos usar align-self para alinar algun caso especial.
				Se usa en el contenedor.

					auto, normal, start, end, center, stretch, baseline, first baseline, last baseline.
						
						.wrapper {
						  display: grid;
						  grid-template-columns: repeat(8, 1fr);
						  gap: 10px;
						  grid-auto-rows: 100px;
						  grid-template-areas:
						    "a a a a b b b b"
						    "a a a a b b b b"
						    "c c c c d d d d"
						    "c c c c d d d d";
						  align-items: start;
						}
						.item1 {
						  grid-area: a;
						}
						.item2 {
						  grid-area: b;
						}

					// Así como está, la altura del elemento depende del contenido

				align-self:
				Alinea un solo elemento.
					
					.item2 {
					  grid-area: b;
					  align-self: start;
					}

				    .item3 {
					  grid-area: c;
					  align-self: end;
					}

					// veremos que los elementos ocupan/empiezan en una fracción del espacio vertical.
				
					// El valor por defecto de aling-self es stretch, menos para los elementos con una relación de aspecto intrínseca,
					    Para estos elementos debemos usar: align-self y justify-self: start; porque puede no estar implementado en el navegador. 
						Así no se distorcionaría la imagen, etc.

			Alinear elementos en eje de línea:
			Usamos las propiedades justify-items y justify-self.
				
				valores:

					auto, normal, start, end, center, stretch, baseline, first baseline, last baseline
					El valor predeterminado es stretch (estirar), excepto para elementos con una relación de aspecto intrínseca. 
					Esto significa que, de forma predeterminada, los elementos cubrirán su área de cuadrícula.
					
					Lo veremos en el primer elemento, como sucedio en align-self, en align-items (todos los elemetos fueron cambiado) por eso no ocuparón todo el espacio.

				justify-items:
				Cambia la alineación de todos los elementos en el eje línea.

				justify-self:
				Cambia individualmente.

				// estas dos propiedades no estan en flexbox porque tiene un solo eje.		
					
					.wrapper {
					  display: grid;
					  grid-template-columns: repeat(8, 1fr);
					  gap: 10px;
					  grid-auto-rows: 100px;
					  grid-template-areas:
					    "a a a a b b b b"
					    "a a a a b b b b"
					    "c c c c d d d d"
					    "c c c c d d d d";
					}
					.item1 {
					  grid-area: a;
					}
					.item2 {
					  grid-area: b;
					  justify-self: start;
					}

					// veremos que los elementos ocupan/empiezan en una fracción del espacio horizontal.

				Abreviadas:
				Son place-items para justify/align-items y place-self para justify/items-self.

				centrar item:

					.wrapper {
					  display: grid;
					  grid-template-columns: repeat(4, 1fr);
					  gap: 10px;
					  grid-auto-rows: 200px;
					  grid-template-areas:
					    ". a a ."
					    ". a a .";
					}
					.item1 {
					  grid-area: a;
					  align-self: center;
					  justify-self: center;
					}
			
		|| Alinear pistas 	
			Las filas y columas deben ser más pequeñas que todo el contenedor.
			
			En el eje de bloque:
			Usamos align-content.

			Eje en línea:
			Usamos justify-content. 

			Abreviatura:
			Es place-content.

			Valores:
			normal, start, end center, stretch, space-around, space-between, space-evenly, baseline, first baseline, last baseline.
				
				Predeterminado:
				Es el valor start, empiezan en la esquina superior izquierda.

				Ej: alinear contenido en eje de bloque, tenemos un contenedor con 500 x 500px
					Usamos align-content.
					Las columnas ocupan 300px en total.
					
					.wrapper {
					  display: grid;
					  grid-template-columns: repeat(3, 100px);
					  grid-template-rows: repeat(3, 100px);
					  height: 500px;
					  width: 500px;
					  gap: 10px;
					  grid-template-areas:
					    "a a b"
					    "a a b"
					    "c d d";

					    Si agregamos alineación:

					  	// align-content: end; todos se mueven al final del eje de bloque.
						
						// align-content: space-between; separa las pistas en este eje.
					}

					.item1 {
					  grid-area: a;
					}
					.item2 {
					  grid-area: b;
					}
					.item3 {
					  grid-area: c;
					}
					.item4 {
					  grid-area: d;
					}
				
				// Los elementos se agrandan tomando más espacio del contenedor. Hay que tener en cuenta que al usar espacios los elementos deben compensar eso, agrandandose o asegurandose que el contenido se ajuste al espacio estricto.

				Ej: alinear contenido en eje de línea, tenemos un contenedor con 500 x 500px
					Usamos justify-content 
					Podemos usarlo junto con align-content si las pistas miden menos que el contenedor podemos du
						
					.wrapper {
					  display: grid;
					  grid-template-columns: repeat(3, 100px);
					  grid-template-rows: repeat(3, 100px);
					  height: 500px;
					  width: 500px;
					  gap: 10px;
					  grid-template-areas:
					    "a a b"
					    "a a b"
					    "c d d";
					  align-content: space-between;
					  justify-content: space-around;
					}

		|| Alinear elementos con auto margin:
			Funciona dentro de su área. Establecemos margen automatico derecho e izquierdo, absorberá todo el espacio disponible.
			Empuja el bloque hacia el centro mientras ambos márgenes intentan ocupar todo el espacio.

				Ej: 
				Artículo 1 tiene un margen izquierdo de auto, el contenido ahora se empuja hacia el lado derecho.
				Ta que el margen automático ocupa el espacio restante, después de que se haya asignado el espacio para el contenido de ese elemento.
					
				.wrapper {
				  display: grid;
				  grid-template-columns: repeat(3, 100px);
				  grid-template-rows: repeat(3, 100px);
				  height: 500px;
				  width: 500px;
				  gap: 10px;
				  grid-template-areas:
				    "a a b"
				    "a a b"
				    "c d d";
				}
				.item1 {
				  grid-area: a;
				  margin-left: auto;
				}	
			
			// En resumen es una ubicación/separación vertical y horizontal de los elementos o pistas. 
			   Lo vemos en las líneas de fila (block/align) y columna (inline/justify).
			// Siempre se debe tener en cuenta los modos de escritura.
		
		
		|| Valores lógicos y writing-mode en Grid:
			
			Posicionamiento físico: 
			Corresponde a la izquierda y derecha, arriba y abajo.
			Son fijas, la izquierda siempre va a estar a la izquierda, etc.
			Si posicionamos un item vemos que se coloca desde estos lugares.

				.item {
				  position: absolute;
				  top: 20px;
				  left: 30px;
				}

				// a 20px desde arriba de la caja/ancestro/viewport y a 30px desde la izquierda.
			
			Posicionamiento lógico:
			No se guía por un lugar físico, se adaptan a la ubicación del contenido. 
			Se usan ubicaciones como start, center, end, etc.

			writing-mode:
			Se puede usar para fines creativos o para adaptar el contenido otro lenguaje.
    			
    			valores:
    			horizontal-tb, vertical-rl, vertical-lr, sideways-rl, sideways-lr.
			
				en grid:
				cambiar el writing-mode cambia los ejes.

					Ej:
					hay tres pistas recorriendo el eje del bloque. En el modo de escritura predeterminado, la cuadrícula coloca automáticamente los elementos comenzando en la parte superior izquierda, moviéndose hacia la derecha, llenando las tres celdas en el eje en línea. 
					Luego pasa a la siguiente línea, crea una nueva pista de Fila y completa más elementos.
						
						.wrapper {
						  display: grid;
						  grid-template-columns: repeat(3, 100px);
						  grid-template-rows: repeat(2, 100px);
						  gap: 10px;
						}

					Ej: si seteamos writing-mode en el contenedor, lo vuelca verticalmente.

						.wrapper {
						  writing-mode: vertical-lr;
						  display: grid;
						  grid-template-columns: repeat(3, 100px);
						  grid-template-rows: repeat(2, 100px);
						  gap: 10px;
						}
						
						// Ahora el eje de bloque corre horizontalmente y el eje en línea corre verticalmente.
			
			Valores lógicos en la alineación:
			Funcionan igual que en el modo predeterminado.

				Ej:
					.item1 {
				  	  grid-column: 1 / 4;
				  	  align-self: start;
					}
					
					.item3 {
					  grid-column: 3;
					  grid-row: 2 / 4;
					  align-self: end;
					  justify-self: end;
					}
				
				Ej: Alineación en línea
					Sin importar el modo de escritura o dirección de texto la línea 1 será la primera y la línea -1 será la última.			

			Orden de grid-area:
			Va en el contrario sentido de las agujas del reloj.

			    grid-row-start
			    grid-column-start
			    grid-row-end
			    grid-column-end
			
			Mezclar direcciones de texto:
			Por ejemplo, podemos poner una barra de navegación a la izquierda de la pantalla, o un titulo orientado de arriba hacia abajo.
				
				.wrapper {
				  display: grid;
				  grid-gap: 20px;
				  grid-template-columns: 1fr auto;
				  font: 1em Helvetica, Arial, sans-serif;
				}
				.wrapper nav {
				  writing-mode: vertical-lr;
				}
				.wrapper ul {
				  list-style: none;
				  margin: 0;
				  padding: 1em;
				  display: flex;
				  justify-content: space-between;
				}
				.wrapper a {
				  text-decoration: none;
				}

			Propiedades Lógicas vs físicas:
			Position sigue dependiendo de los lugares fisicos, al igual que cuando aplicamos margenes automaticos porque dependen de la izquierda y derecha.
			Por otro lado podemos usar equivalentes lógicos para reemplazar los valores y propiedades físicas.
			Tambien hay que verificar la compatibilidad de los navegadores para las nuevas propiedades lógicas.

		|| Accesibilidad en Grid:
			Vimos que podemos usar varias propiedades para cambiar el orden original de los elementos.
			Los navegadores tienen reglas cuando el contenido se reordena visualmente.
			El reordenamiento de los elementos no cambia el orden de fuente que lee el navegador.
			No afectan a la interpretación por voz, ni tampoco a la recorrido o interacción que posee el navegador (como tabular o desplazarse entre enlaces).
			
			Los desarrolladores no deberían cambiar el orden a los elementos que contengan una lógica que sea importante para los usuarios de lectores de pantall.
			Puede cambiar el orden visual en los elementos que solo aporten un valor estetico en el proyecto.
				
				Ej: una cuadrícula con links
					si cambiamos el orden de los elementos y ponemos al segundo elemento en lugar del primero.
					La tabulación va a empezar por el primero, lo mismo para los lectores de pantalla.
					
					.box1 {
					  grid-column: 1;
					  grid-row: 2;
					}

			Peligro de aplastar el marcado:
			Situación en la cual simplificamos el marcado eliminando los elementos semanticos para facilitar la creación del diseño.
			Sobre todo cuando tenemos muchos elementos dentro de un contenedor, dado que solo los elementos secundarios directos se transforman con los metodos de diseño.
			Debemos encontrar formas no eliminar los elementos semanticos para lograr un diseño.

		|| Mejora progresiva:

			Prefijos para I.E y Edge (<15):
			No incluye la capacidad de colocación automática ni las áreas de plantilla de cuadrícula.

			    grid-template-columns as -ms-grid-columns
			    grid-template-rows as -ms-grid-rows
			    grid-row-start as -ms-grid-row
			    grid-column-start as -ms-grid-column
			    align-self as -ms-grid-row-align
			    justify-self as -ms-grid-column-align

			    Para habilitarlos hay que usar:

			    	autoprefixer({ grid: "autoplace" });
			
			Los demás navegadores no tienen prefijos.
			Se usan para sitios orientados a navegadores antiguos o que decide dar soporte o sitios antiguos que deben mantenerse.

			Mejorando diseños:
			Sobreescribiendo metodos anteriores podemos mejorar el diseño heredado de los elementos, los metodos modernos tienen prioridad.
			
				Floats:
				Tenemos un contenedor con un flotanta, si lo convertimos en cuadrícula pasa a tener prioridad.
				Tambien podemos aplicar align-self al contenido.				
					
					Ej: media object

					.media {
					  border: 2px solid #f76707;
					  border-radius: 5px;
					  background-color: #fff4e6;
					  max-width: 400px;
					  display: grid;
					  grid-template-columns: 1fr 2fr;
					  grid-template-areas: "img content";
					  margin-bottom: 1em;
					}

					.media .text {
					  padding: 10px;
					  align-self: end;
					}

					// old code we can't remove 
					.media .image {
					  float: left;
					  width: 150px;
					  margin-right: 20px;
					}
		
					<div class="media">
					  <div class="image">
					    <img src="https://via.placeholder.com/150x150" alt="placeholder" />
					  </div>

					  <div class="text">
					    This is a media object example. I am using floats for older browsers and
					    grid for new ones.
					  </div>
					</div>
				
				Media query:
				Puede presentarse algunos problemas al sobreescribir código heredado.

					Ej: cartas flotantes, tenemos ancho, margen para crear espacio y margen negativo eliminar espacio de afuera.						
						Cuando agregamos contenido a la tarjeta, el diseño se rompe.
						Establecemos una altura minima y no se debería agregar tanto contenido a la carta.
						Convertimos la lista no ordenada en contenedor grid, pero se aplicará el ancho en porcentaja.
						Cambiamos el ancho a auto (la carta se adapta al contenido) y para esto necesitamos el query.
							
							// Float grid heredado

							.wrapper ul {
							  overflow: hidden;
							  margin: 0 -10px;
							  padding: 0;
							  list-style: none;
							}
							.wrapper li {
							  float: left;
							  width: calc(33.333333% - 20px);
							  margin: 0 10px 20px 10px;
							}

							// Mejora progresiva

							@supports (display: grid) {
							  .wrapper ul {
							    display: grid;
							    grid-template-columns: repeat(3, 1fr);
							    gap: 20px;
							    margin: 0;
							  }

							  .wrapper li {
							    width: auto;
							    min-height: auto;
							    margin: 0;
							  }
							}

					Display inline-block:
					Metodo heredado alternativo a grid float.
					Cambian algunas propiedades como la alineación vertical, que despues se ignora al sobreescribir con grid el contenedor.
						
						.wrapper ul {
						  margin: 0 -10px;
						  padding: 0;
						  list-style: none;
						}

						.wrapper li {
						  display: inline-block;
						  vertical-align: top;
						  width: calc(33.333333% - 20px);
						  margin: 0 10px 20px 10px;
						}

						@supports (display: grid) {
						  .wrapper ul {
						    display: grid;
						    grid-template-columns: repeat(3, 1fr);
						    gap: 20px;
						    margin: 0;
						  }
						  .wrapper li {
						    width: auto;
						    margin: 0;
						  }
						}
		
		|| Diseños comunes:
			Los sitios web son una variación de un diseño con un contenido central, barras laterales, un encabezado y un pie de página y un espacio para la publicidad. 
			En un diseño responsivo, primero se pone todos los elementos en una columna y luego se va agrandando el diseño a dos y tres columnas para adaptarlo a diferentes tamaños de pantalla.
				
				Ej: usando solo grid

					.wrapper {
					  display: grid;
					  gap: 20px;
					  grid-template-areas:
					    "header"
					    "nav"
					    "content"
					    "sidebar"
					    "ad"
					    "footer";
					}

					@media (min-width: 500px) {
					  .wrapper {
					    grid-template-columns: 1fr 3fr;
					    grid-template-areas:
					      "header  header"
					      "nav     nav"
					      "sidebar content"
					      "ad      footer";
					  }
					  nav ul {
					    display: flex;
					    justify-content: space-between;
					  }
					}

					@media (min-width: 700px) {
					  .wrapper {
					    grid-template-columns: 1fr 4fr 1fr;
					    grid-template-areas:
					      "header header  header"
					      "nav    content sidebar"
					      "nav    content ad"
					      "footer footer  footer";
					  }
					  nav ul {
					    flex-direction: column;
					  }
					}
					
					// El espacio disponible en el contenedor se divide en 6 y se asigna en proporción a nuestras tres pistas: una parte para cada columna lateral y 4 partes para el centro.
						Las columnas responsivas tienen asignado 1fr para la barra navegación vertical y otro para el aside y 4fr para el contenido principal.
						Para el

			Diseño de 12 columnas:
			Será un diseño particular: Tendremos 12 columnas y las líneas de la cuadrícula tendrán todas el mismo nombre.
			En Los puntos de interrupcion (query) serán posicionados los elementos según el ancho de pantalla así se usarán las líneas necesarias.
			Primero comenzamos con las dimensiones de pantalla para dispositivos moviles.
			Despues pasamos al diseño de dos columnas y vamos expandiendo los elementos por las línenas.
			Para el diseño de tres columnas, ponemos la barra de navegación verticalmente y después expandimos el footer.			
				
				.wrapper {
				  display: grid;
				  grid-template-columns: repeat(12, [col-start] 1fr);
				  gap: 20px;
				}

				.wrapper > * {
				  grid-column: col-start / span 12;
				}

				@media (min-width: 500px) {
				  .side {
				    grid-column: col-start / span 3;
				    grid-row: 3;
				  }
				  .ad {
				    grid-column: col-start / span 3;
				    grid-row: 4;
				  }
				  .content,
				  .main-footer {
				    grid-column: col-start 4 / span 9;
				  }
				  nav ul {
				    display: flex;
				    justify-content: space-between;
				  }
				}

				@media (min-width: 700px) {
				  .main-nav {
				    grid-column: col-start / span 2;
				    grid-row: 2 / 4;
				  }

				  .content {
				    grid-column: col-start 3 / span 8;
				    grid-row: 2 / 4;
				  }

				  .side {
				    grid-column: col-start 11 / span 2;
				    grid-row: 2;
				  }

				  .ad {
				    grid-column: col-start 11 / span 2;
				    grid-row: 3;
				  }

				  .main-footer {
				    grid-column: col-start / span 12;
				  }

				  nav ul {
				    flex-direction: column;
				  }
				}
		
		|| Lista de productos con cartas:
			Podemos crear listas de elementos nativamente con grid, sin queries.
			Principalmente usamos grid y algo de flexbox para corregir el diseño de las cartas.
			Tendremos columnas flexibles (agrandan y reducen) con un piso de 200px, que reparte el espacio proporcionalmente logrado con la funcion minmax().
			Por minmax() y el valor autofill logramos que el numero de columnas aumenten o disminuyan a medida que el contenedor pueda expandirse o reducirse por la ventana gráfica.
			Con esto no necesitamos de queries para agregar columnas.
			Para corregir el diseño por dentro, usamos flex en columna y automargen que empujará el pie de página o banner de la carta.
			*Cuando tenemos que o distribuir elementos en una solo dirección usamos flexbox.

				<ul class="listing">
				  <li>
				    <h2>Item One</h2>
				    <div class="body">
				      <p>The content of this listing item goes here.</p>
				    </div>

				    <div class="cta">
				      <a href="">Call to action!</a>
				    </div>
				  </li>
				</ul>

				.listing {
				  list-style: none;
				  margin: 2em;
				  display: grid;
				  gap: 20px;
				  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
				}

				.listing li {
				  border: 1px solid #ffe066;
				  border-radius: 5px;
				  display: flex;
				  flex-direction: column;
				}

				.listing .cta {
				  margin-top: auto;
				  border-top: 1px solid #ffe066;
				  padding: 10px;
				  text-align: center;
				}

				.listing .body {
				  padding: 10px;
				}

		 	Si tenemos cartas muy grandes dado su contenido, no quedan bien cuando son muy altas.
		 	Para que abarquen más columnas y no sean tan altas, regla grid-column-end con un valor de span 2. Ahora, cuando grid encuentre este elemento, le asignará dos pistas.  
			Además podemos hacer que el contenedor llene espacios en blanco con grid-auto-flow: dense.
			*Esto ultimo solo está permitido para elementos que no necesiten un orden lógico.
			Puede ayudarlo a manejar el contenido que genera un CMS.

				.listing {
				  list-style: none;
				  margin: 2em;
				  display: grid;
				  gap: 20px;
				  grid-auto-flow: dense;
				  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
				}
				.listing .wide {
				  grid-column-end: span 2;
				}

	|| Subgrid:
	
	
	
	






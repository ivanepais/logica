# Cracking the coding interview

Comprensión de los fundamentos de la informática y a aprender a aplicarlos para superar la entrevista de programación.

Una preparación exhaustiva te proporcionará una amplia gama de habilidades técnicas y de comunicación.


Algunos entrevistadores hacían preguntas fáciles, mientras que otros hacían preguntas más difíciles. 
 
¿Pero sabes qué? Conseguir las preguntas fáciles no facilita conseguir la oferta. 
 
Recibir una oferta no se trata de resolver las preguntas a la perfección (¡muy pocos candidatos lo hacen!). 
 
##### Se trata, más bien, de responder mejor que otros candidatos.



# 1. Intro

Candidato exalumno: 

Tenía un promedio de 3.73 de la Universidad de Washington, una de las mejores escuelas de informática del mundo, y había trabajado extensamente en proyectos de código abierto.

Aunque era bastante inteligente, le costaba resolver los problemas de la entrevista. 

La mayoría de los candidatos exitosos podían responder la primera pregunta con facilidad, que era una variante de un problema conocido, pero él tuvo dificultades para desarrollar un algoritmo. 

##### Cuando ideó uno, no consideró soluciones optimizadas para otros escenarios.

Finalmente, cuando empezó a programar, repasó el código con una solución inicial, pero estaba plagada de errores que no logró detectar. 

Aunque no era el peor candidato que habíamos visto, estaba lejos de cumplir con el requisito: Rechazado.


Como muchos candidatos motivados, se había preparado a fondo. Había leído el clásico libro de C de K&R y había revisado el famoso libro de texto de algoritmos de CLRS.

Podía describir en detalle la infinidad de maneras de equilibrar un árbol, y podía hacer cosas en C que ningún programador en su sano juicio querría hacer jamás.


Tuve que decirle la triste verdad: esos libros no son suficientes. 

Los libros académicos te preparan para la investigación sofisticada, y probablemente te convertirán en un mejor ingeniero de software, pero no son suficientes para las entrevistas


Tus entrevistadores tampoco han visto árboles rojo-negros desde que estaban en la universidad.

##### Para tener éxito en la entrevista de programación, necesitas prepararte con preguntas de entrevista reales. 

##### Debes practicar con problemas reales y aprender sus patrones. 

##### Se trata de desarrollar un algoritmo nuevo, no de memorizar problemas existentes.


##### Este libro incluye 189 de las mejores preguntas de entrevista, seleccionadas entre miles de problemas potenciales.

El enfoque de Cracking the Coding Interview son preguntas sobre algoritmos, codificación y diseño.

Asimismo, aunque muchas empresas hacen preguntas triviales (por ejemplo, "¿Qué es una función virtual?"), las habilidades desarrolladas al practicar estas preguntas se limitan a conocimientos muy específicos.

El libro abordará brevemente algunas de estas preguntas para mostrarte cómo son, pero he decidido dedicar espacio a áreas donde hay más que aprender.

He visto sus errores y dificultades, y he desarrollado técnicas y estrategias para ayudarlos a superar esos mismos problemas. 



## 1.1 Proceso de entrevista 


En la mayoría de las principales empresas tecnológicas (y en muchas otras), los problemas de algoritmos y codificación constituyen el componente más importante del proceso de entrevista. 

Piensa en estas preguntas como si fueran para resolver problemas. El entrevistador busca evaluar tu capacidad para resolver problemas algorítmicos que no has visto antes.

A menudo, solo podrás responder una pregunta en una entrevista. 

Cuarenta y cinco minutos no es mucho tiempo, y es difícil responder varias preguntas diferentes en ese tiempo.

Debes esforzarte por hablar en voz alta durante la entrevista y explicar tu razonamiento. 

Tu entrevistador podría intervenir a veces para ayudarte; déjalo. 

Es normal y no significa que lo estés haciendo mal. 

(Dicho esto, por supuesto, no necesitar pistas es aún mejor).

Al final de la entrevista, el entrevistador se llevará una idea general de tu desempeño. Se podría asignar una puntuación numérica a tu desempeño, pero en realidad no es una evaluación cuantitativa. No hay una tabla que indique cuántos puntos se obtienen por diferentes cosas. Simplemente no funciona así.


Su entrevistador evaluará su desempeño, generalmente basándose en lo siguiente:

1. Habilidades analíticas: ¿Necesitó mucha ayuda para resolver el problema? ¿Qué tan óptima fue su solución? ¿Cuánto tiempo le llevó encontrar una solución? Si tuvo que diseñar/arquitecturar una nueva solución, ¿estructuró bien el problema y analizó las ventajas y desventajas de las diferentes decisiones?

2. Habilidades de programación: ¿Pudo traducir correctamente su algoritmo a un código razonable? ¿Era limpio y bien organizado? ¿Consideró los posibles errores? ¿Utilizó un buen estilo?

3. Conocimientos técnicos/Fundamentos de informática: ¿Tiene una sólida base en informática y las tecnologías relevantes?

4. Experiencia: ¿Ha tomado buenas decisiones técnicas en el pasado? ¿Ha desarrollado proyectos interesantes y desafiantes? ¿Ha demostrado empuje, iniciativa y otros factores importantes?

5. Encaje cultural/Habilidades de comunicación: ¿Su personalidad y valores encajan con los de la empresa y el equipo? ¿Se comunicó bien con su entrevistador? La ponderación de estas áreas variará según la pregunta, el entrevistador, el puesto, el equipo y la empresa.

En una pregunta de algoritmo estándar, podría ser casi exclusivamente las tres primeras.


Es aceptable que algunos buenos candidatos sean rechazados. La empresa se propone formar un excelente equipo de empleados. Pueden aceptar que se pierdan a algunas personas buenas.

Preferirían no hacerlo, por supuesto, ya que aumenta sus costos de contratación. Sin embargo, es una compensación aceptable, siempre que puedan contratar a suficientes personas buenas.

Les preocupan mucho más los falsos positivos: personas que tienen un buen desempeño en una entrevista, pero que en realidad no son muy buenas.


Las habilidades para resolver problemas son valiosas.

Si eres capaz de resolver varios problemas difíciles (quizás con algo de ayuda), probablemente seas bastante bueno desarrollando algoritmos óptimos. Eres inteligente.

Las personas inteligentes suelen hacer buenas cosas, y eso es valioso en una empresa. No es lo único que importa, por supuesto, pero es algo realmente positivo.


Conocimientos básicos de estructuras de datos y algoritmos son útiles.

Comprender árboles, gráficos, listas, ordenamiento y otros conocimientos surge periódicamente. 

##### Es difícil hacer preguntas de resolución de problemas que no los involucren. 

La gran mayoría de las preguntas de resolución de problemas involucran algunos de estos conceptos básicos. 

Cuando suficientes candidatos conocen estos conceptos básicos, es fácil acostumbrarse a hacerles preguntas.


Las pizarras te permiten concentrarte en lo importante.

Es cierto que escribir código perfecto en una pizarra te costaría. 

Por suerte, tu entrevistador no espera eso. 

Prácticamente todos tenemos errores o pequeños errores sintácticos.

##### Te permite concentrarte en el panorama general, en las partes interesantes y esenciales del código: la función de la que trata la pregunta. 

##### Esto no significa que debas escribir solo pseudocódigo o que la precisión no importe; no se conforman con el pseudocódigo, y cuantos menos errores, mejor.

Suelen animar a los candidatos a hablar más y explicar su razonamiento. 

Cuando a un candidato se le da una computadora, su comunicación disminuye considerablemente.


##### Las secciones anteriores pretenden ayudarte a comprender el proceso de pensamiento de la empresa.

##### Es un indicador razonable de las habilidades de resolución de problemas de una persona, ya que quienes lo hacen bien suelen ser bastante inteligentes.


##### En la gran mayoría de las empresas, no existen listas de preguntas que los entrevistadores deben formular. 

Cada entrevistador selecciona sus propias preguntas.

No difieren mucho entre años y entre empresas.


###### Algunas se centran en algoritmos (a menudo con algún diseño de sistema integrado), mientras que otras prefieren las preguntas basadas en el conocimiento. 

###### Los entrevistadores te evalúan en comparación con otros candidatos en la misma pregunta del mismo entrevistador.


Muy pocas empresas tienen la política de no responder a los candidatos que rechazan.

###### Si no has recibido respuesta de una empresa en un plazo de 3 a 5 días hábiles después de tu entrevista, comunícate (cortésmente) con tu reclutador.

¿Puedo volver a postularme a una empresa después de ser rechazado?

Casi siempre, pero normalmente hay que esperar un poco (de 6 meses a un año).



## 1.2 Bastidores

Cómo entrevistan las empresas y qué buscan.
 
Una vez que te seleccionan para una entrevista, sueles pasar por una entrevista de preselección. 

Esta suele realizarse por teléfono. 

Los candidatos universitarios que asisten a las mejores universidades pueden tener estas entrevistas en persona.

##### La entrevista de preselección suele incluir preguntas sobre programación y algoritmos, y el nivel de exigencia puede ser tan alto como en las entrevistas en persona

##### Si no estás seguro de si la entrevista será técnica, pregunta a tu coordinador de reclutamiento qué puesto ocupa el entrevistador (o qué podría abarcar la entrevista). 

##### Muchas empresas han aprovechado los editores de documentos sincronizados en línea, pero otras esperan que escribas el código en papel y lo leas por teléfono. 

##### Algunos entrevistadores pueden incluso darte "tarea" para resolver después de colgar el teléfono o simplemente pedirte que les envíes por correo electrónico el código que escribiste.

##### Normalmente, se realizan una o dos pruebas de selección antes de ir a la empresa.

##### En una ronda de entrevistas presenciales, se suelen tener de 3 a 6 entrevistas en persona. Una de ellas suele ser durante el almuerzo.

La entrevista del almuerzo no suele ser técnica, y es posible que el entrevistador ni siquiera envíe retroalimentación.

##### Es una buena persona con quien hablar de tus intereses y preguntar sobre la cultura de la empresa

##### Las demás entrevistas serán principalmente técnicas e incluirán una combinación de programación, algoritmos, diseño/arquitectura y preguntas de comportamiento/experiencia.


Después de la entrevista, los entrevistadores te proporcionarán retroalimentación de algún tipo. 

En algunas empresas, los entrevistadores se reúnen para hablar sobre tu desempeño y tomar una decisión.

En otras empresas, los entrevistadores presentan una recomendación a un gerente de contratación o a un comité de contratación para que tomen una decisión final

En algunas empresas, los entrevistadores ni siquiera toman la decisión; sus comentarios se envían a un comité de contratación para que tome una decisión.

La mayoría de las empresas responden después de aproximadamente una semana con los siguientes pasos (oferta, rechazo, nuevas entrevistas o simplemente una actualización sobre el proceso).

Algunas empresas responden mucho antes (¡a veces el mismo día!) y otras tardan mucho más.

Si has esperado más de una semana, deberías hacer un seguimiento con tu reclutador. 

Si tu reclutador no responde, esto no significa que hayas sido rechazado (al menos no en ninguna gran empresa tecnológica, ni en casi ninguna).

La intención es que todos los reclutadores informen a los candidatos una vez tomada la decisión final.


Prepárate:

##### "¿Por qué quieres trabajar en Microsoft?"

##### En esta pregunta, Microsoft quiere ver tu pasión por la tecnología.

Ej:

He usado software de Microsoft desde que tengo memoria, y estoy realmente impresionado por cómo Microsoft logra crear un producto universalmente excelente. Por ejemplo, últimamente he estado usando Visual Studio para aprender programación de juegos, y sus API son excelentes.


Amazon

Después, vuelas a Seattle (o a la oficina donde te entrevisten) para cuatro o cinco entrevistas con uno o dos equipos que te han seleccionado basándose en tu currículum y entrevistas telefónicas.

Tendrás que programar en una pizarra, y algunos entrevistadores enfatizarán otras habilidades.

A cada entrevistador se le asigna un área específica para explorar y pueden parecer muy diferentes entre sí.

El entrevistador "que eleva el listón" se encarga de mantener el listón alto en la entrevista. Asiste a una formación especial y entrevista a candidatos fuera de su grupo para equilibrar el grupo. 

Si una entrevista parece significativamente más difícil y diferente, probablemente sea el que eleva el listón.

Tu desempeño se juzga en relación con el de otros candidatos; no se evalúa simplemente por el porcentaje de aciertos.

Si no has tenido noticias de Amazon en una semana, te recomendamos un correo electrónico amistoso.


##### Amazon se preocupa mucho por la escalabilidad. Asegúrate de prepararte para las preguntas sobre escalabilidad.

##### No necesitas experiencia en sistemas distribuidos para responder a estas preguntas. Consulta nuestras recomendaciones en el capítulo "Diseño de Sistemas y Escalabilidad".

##### Además, Amazon suele hacer muchas preguntas sobre diseño orientado a objetos. Consulta el capítulo "Diseño Orientado a Objetos" para ver ejemplos de preguntas y sugerencias.

Características únicas:
El "Sube el listón" proviene de un equipo diferente para mantener el listón alto. Debes impresionar tanto a esta persona como al responsable de contratación.

Amazon tiende a experimentar más con su proceso de contratación que otras empresas. El proceso descrito aquí es la experiencia típica, pero debido a la experimentación de Amazon, no es necesariamente universal.


Google

##### Como empresa web, a Google le importa cómo diseñar un sistema escalable. Por lo tanto, asegúrate de prepararte para las preguntas de Diseño de Sistemas y Escalabilidad.

##### prioriza las habilidades analíticas (algoritmos), independientemente de tu experiencia. Debes estar muy bien preparado para estas preguntas, incluso si crees que tu experiencia previa debería ser más importante.


Facebook:

A cada entrevistador se le asigna un rol durante las entrevistas presenciales, lo que ayuda a garantizar que no haya preguntas repetitivas y a obtener una visión integral del candidato. Estos roles son:
Conductual ("Jedi"): Esta entrevista evalúa tu capacidad para tener éxito en el entorno de Facebook.
¿Encajarías bien con la cultura y los valores? ¿Qué te entusiasma? ¿Cómo afrontas los retos? Prepárate para hablar también sobre tu interés en Facebook. Facebook busca personas apasionadas.
También podrían hacerte algunas preguntas de programación en esta entrevista.
Codificación y Algoritmos ("Ninja"): Estas son las preguntas estándar sobre codificación y algoritmos, muy similares a las que encontrarás en este libro. Estas preguntas están diseñadas para ser desafiantes. Puedes usar cualquier lenguaje de programación que desees.
Diseño/Arquitectura ("Pirata"): Si eres ingeniero de software backend, es posible que te hagan preguntas de diseño de sistemas. Si eres ingeniero de frontend u otras especialidades, se te harán preguntas de diseño relacionadas con esa disciplina. Debes discutir abiertamente las diferentes soluciones y sus ventajas y desventajas.
Normalmente, se esperan dos entrevistas "ninja" y una "jedi". Los candidatos con experiencia también suelen tener una entrevista "pirata".

Saber PHP no es especialmente importante, sobre todo porque Facebook también realiza mucho trabajo de backend en C++, Python, Erlang y otros lenguajes.
Lo que lo hace único:
Facebook entrevista a desarrolladores para la empresa en general, no para un equipo específico. Si te contratan, participarás en un "bootcamp" de seis semanas que te ayudará a progresar en la enorme base de código. Recibirás mentoría de desarrolladores senior, aprenderás las mejores prácticas y, en definitiva, tendrás mayor flexibilidad para elegir un proyecto que si te asignaran uno en la entrevista.



## 1.3 Especial

Candidatos con experiencia

Si una empresa hace preguntas sobre algoritmos a candidatos sin experiencia, también suele hacérselas a los candidatos con experiencia.

##### Con razón o sin ella, consideran que las habilidades demostradas en estas preguntas son importantes para todos los desarrolladores.

Algunos entrevistadores podrían exigir un estándar algo más bajo a los candidatos con experiencia. Después de todo, han pasado años desde que estos candidatos tomaron una clase de algoritmos. No tienen práctica.

Sin embargo, otros exigen un estándar más alto a los candidatos con experiencia, argumentando que cuantos más años de experiencia un candidato ha visto muchos más tipos de problemas.

La excepción a esta regla son las preguntas sobre diseño y arquitectura de sistemas, así como las preguntas sobre el currículum.

Normalmente, los estudiantes no estudian mucha arquitectura de sistemas, por lo que la experiencia con tales desafíos solo se adquiere profesionalmente.

##### Tu desempeño en estas preguntas de entrevista se evaluará en función de tu nivel de experiencia. 

Sin embargo, a los estudiantes y recién graduados aún se les plantean estas preguntas y deben estar preparados para responderlas lo mejor posible.

##### Además, se espera que los candidatos con experiencia den una respuesta más profunda e impactante a preguntas como 

##### "¿Cuál ha sido el problema más difícil al que te has enfrentado?". 

Tienes más experiencia, y tu respuesta a estas preguntas debería demostrarlo.


Testers y SDET
Los SDET (ingenieros de diseño de software en pruebas) escriben código, pero para probar funciones en lugar de desarrollarlas. 

##### Por lo tanto, deben ser excelentes programadores y testers. ¡El doble de trabajo de preparación!

Si solicitas un puesto de SDET, sigue el siguiente enfoque:

##### Prepara los problemas centrales de prueba: Por ejemplo, ¿cómo probarías una bombilla? ¿Un bolígrafo? ¿Una caja registradora? ¿Microsoft Word? 

Practica las preguntas de codificación: El principal motivo por el que se rechaza a los SDET es la habilidad para programar.

Asegúrate de practicar resolviendo las mismas preguntas de codificación y algoritmos que un desarrollador normal recibiría.

##### Practica las preguntas de codificación: Un formato muy popular para las preguntas SDET es "Escribe el código para hacer X" seguido de "Bien, ahora pruébalo". 

Incluso cuando la pregunta no lo requiera específicamente, debes preguntarte: "¿Cómo probaría esto?". 
 
##### Recuerda: ¡cualquier problema puede ser un problema SDET! Tener buenas habilidades de comunicación también puede ser muy importante para los testers, ya que su trabajo requiere trabajar con personas muy diferentes. 

Asegúrate de mantener tus habilidades de programación y algoritmos al día si quieres dar el salto, e intenta cambiarte en uno o dos años. De lo contrario, podría resultarte muy difícil que te tomen en serio en una entrevista de desarrollo.

##### Nunca dejes que tus habilidades de programación se deterioren.


Gestión de Productos (y Programas)
Estos roles de "Gerente de Proyectos" varían enormemente entre empresas e incluso dentro de una misma empresa.

En Microsoft, por ejemplo, algunos Gerentes de Proyectos pueden ser esencialmente promotores del cliente, trabajando en un rol de cara al cliente que roza el marketing.

Otros Gerentes de Proyectos pueden pasar gran parte del día programando. 

Este último tipo de Gerentes de Proyectos probablemente sería evaluado en programación, ya que es una parte importante de su función laboral.


Buscan candidatos que demuestren habilidades en las siguientes áreas:

##### Manejo de la Ambigüedad: Esta no suele ser el área más crítica para una entrevista, pero debe tener en cuenta que los entrevistadores sí buscan habilidades en este aspecto.

##### Los entrevistadores quieren ver que, ante una situación ambigua, no se sienta abrumado ni se detenga.

Quieren ver que aborde el problema de frente: buscando nueva información, priorizando lo más importante y resolviéndolo de forma estructurada

##### Enfoque en el cliente (Actitud): Los entrevistadores quieren ver que su actitud está centrada en el cliente. 

##### ¿Asume que todos usarán el producto igual que usted? ¿O es el tipo de persona que se pone en el lugar del cliente e intenta comprender cómo quiere usar el producto?

##### Preguntas como "Diseñar un despertador para ciegos" son ideales para examinar este aspecto.

##### Cuando escuche una pregunta como esta, asegúrese de hacer muchas preguntas para comprender quién es el cliente y cómo usa el producto.

##### Enfoque en el cliente (Habilidades técnicas): Algunos equipos con productos más complejos necesitan asegurarse de que sus gerentes de proyecto tengan un sólido conocimiento del producto, ya que sería difícil adquirir este conocimiento en el trabajo.

robablemente no se requieran conocimientos técnicos profundos de teléfonos móviles para trabajar en los equipos de Android 

##### Comunicación multinivel: Los gerentes de proyecto deben ser capaces de comunicarse con personas de todos los niveles de la empresa, en diversos puestos y con diferentes habilidades técnicas.

##### Tu entrevistador querrá ver que posees esta flexibilidad en tu comunicación. Esto a menudo se examina directamente, mediante una pregunta como: "Explícale TCP/IP a tu abuela". 

Tus habilidades de comunicación también pueden evaluarse por cómo comentas tus proyectos anteriores.

##### Pasión por la tecnología: Los empleados felices son empleados productivos, por lo que una empresa quiere asegurarse de que disfrutes del trabajo y estés entusiasmado con él. 

##### La pasión por la tecnología, e idealmente, por la empresa o el equipo, debe reflejarse en tus respuestas. Es posible que te hagan una pregunta directa como: "¿Por qué te interesa Microsoft?". 

##### Trabajo en equipo/Liderazgo: Este puede ser el aspecto más importante de la entrevista y, como era de esperar, el puesto en sí.

##### El entrevistador busca ver que gestionas bien los conflictos, que tomas la iniciativa, que comprendes a las personas y que les gusta trabajar contigo. 
 
 
### Líderes de Desarrollo y Gerentes

Casi siempre se requieren sólidas habilidades de programación para puestos de líder de desarrollo y, a menudo, también para puestos gerenciales. 

Si vas a programar, asegúrate de tener un buen dominio de la programación y los algoritmos, al igual que un desarrollador.

Además, prepárate para evaluar tus habilidades en las siguientes áreas:


#### 1. Trabajo en Equipo | Liderazgo

Cualquier persona que ocupe un puesto gerencial debe ser capaz de liderar y trabajar con personas.
 
Se te evaluará implícita y explícitamente en estas áreas. 

##### La evaluación explícita consistirá en preguntarte cómo manejaste situaciones anteriores, como cuando no estuviste de acuerdo con un gerente.

##### La evaluación implícita se realiza observando cómo interactúas con ellos. 


#### 2. Priorización

Los gerentes a menudo se enfrentan a problemas complejos, como cómo asegurarse de que un equipo cumpla con una fecha límite estricta. 

Sus entrevistadores querrán ver que puede priorizar un proyecto adecuadamente, descartando los aspectos menos importantes.
 
##### Priorizar significa hacer las preguntas correctas para comprender qué es crítico y qué puede esperar lograr razonablemente. 


#### 3. Comunicación

Los gerentes necesitan comunicarse con sus superiores y subordinados, y potencialmente con clientes y otras personas con un nivel mucho menos técnico.
 
Los entrevistadores buscarán ver que puede comunicarse a diversos niveles y que lo hace de forma amigable y atractiva
 
Esto es, en cierto modo, una evaluación de su personalidad.
  

#### 4. "Lograr resultados"

Quizás lo más importante que puede hacer un gerente es ser una persona que "logre resultados"

##### Significa lograr el equilibrio adecuado entre la preparación de un proyecto y su implementación

##### Necesita comprender cómo estructurar un proyecto y cómo motivar a las personas para que puedan alcanzar los objetivos del equipo.

La mayoría de estas áreas se basan en tu experiencia previa y tu personalidad. Asegúrate de prepararte a fondo con la plantilla de preparación para entrevistas.


### Startups

##### El proceso de solicitud y entrevista para startups es muy variable.

Algunas pautas generales, pueden diferir. 


#### 1. Proceso de aplicación 

##### Muchas startups publican ofertas de trabajo, pero para las más prometedoras, la mejor manera de acceder es a través de una recomendación personal.

Esta referencia no tiene por qué ser necesariamente un amigo cercano o un compañero de trabajo. 

##### A menudo, con solo contactar y expresar tu interés, puedes conseguir que alguien revise tu currículum para ver si eres la persona adecuada.


#### 2. Visas y autorización de trabajo

Desafortunadamente, muchas startups pequeñas en EE. UU. no pueden patrocinar visas de trabajo. 

Detestan el sistema tanto como tú, pero de todas formas no podrás convencerlas de que te contraten.

Si necesitas una visa y deseas trabajar en una startup, lo mejor es contactar con un reclutador profesional que trabaje con muchas startups (y que tenga una mejor idea de qué startups trabajarán con problemas de visa), o centrar tu búsqueda en startups más grandes
 
 
#### 3. Factores de selección del currículum

##### Las startups suelen buscar ingenieros que no solo sean inteligentes y sepan programar, sino también personas que se desenvuelvan bien en un entorno emprendedor.

Idealmente, tu currículum debe mostrar iniciativa. ¿Qué tipo de proyectos has iniciado?

Poder empezar a trabajar desde el primer momento también es muy importante; buscan personas que ya dominen el lenguaje de la empresa.


#### 4. El proceso de entrevista

A diferencia de las grandes empresas, que suelen fijarse principalmente en tu aptitud general para el desarrollo de software, las startups suelen fijarse en tu personalidad, habilidades y experiencia previa.


#### 5. Personalidad

Se evalúa generalmente por cómo interactúas con el entrevistador.

##### Establecer una conversación amistosa y atractiva con los entrevistadores es tu clave para conseguir muchas ofertas de trabajo.


#### 6. Habilidades

Dado que las startups necesitan personas que puedan empezar a trabajar desde el primer momento, es probable que evalúen tus habilidades con lenguajes de programación específicos.

##### Si conoces un lenguaje con el que trabaja la startup, asegúrate de repasar los detalles.
 
 
#### 7. Experiencia

Es probable que las startups te hagan muchas preguntas sobre tu experiencia

Preste especial atención a la sección de Preguntas de Comportamiento.


### Adquisiciones y contrataciones

##### Durante el proceso de diligencia debida técnica de muchas adquisiciones, el comprador suele entrevistar a la mayoría o a la totalidad de los empleados de la startup.

Google, Yahoo, Facebook y muchas otras empresas lo tienen como parte estándar de muchas adquisiciones.

Consideran que tiene sentido evaluar sus habilidades.


##### Al fin y al cabo, esas adquisiciones suelen centrarse en la base de usuarios y la comunidad, y no tanto en los empleados o incluso en la tecnología. 

Sin embargo, no es tan simple como decir "las adquisiciones son entrevistadas, las adquisiciones tradicionales no". 

Existe una gran incertidumbre entre las adquisiciones (es decir, las adquisiciones de talento) y las adquisiciones de productos.

Muchas startups son adquiridas por el equipo y las ideas detrás de la tecnología.

El comprador podría descontinuar el producto, pero hacer que el equipo trabaje en algo muy similar.

##### Si su startup está pasando por este proceso, normalmente puede esperar que su equipo tenga entrevistas muy similares a las que experimentaría un candidato normal (y, por lo tanto, muy similares a lo que verá en este libro).


##### Estas entrevistas pueden ser de enorme importancia. Desempeñan tres funciones diferentes:

##### Pueden determinar el éxito o el fracaso de una adquisición.

A menudo, son la razón por la que una empresa no es adquirida.

##### Determinan qué empleados reciben ofertas para unirse a la empresa adquirente.

##### Pueden afectar el precio de adquisición (en parte, como consecuencia del número de empleados que se incorporan).

Estas entrevistas son mucho más que una simple "selección":


¿Qué empleados pasan por las entrevistas?

En las startups tecnológicas, normalmente todos los ingenieros pasan por el proceso de entrevistas, ya que son uno de los principales motivadores de la adquisición.

Además, los departamentos de ventas, atención al cliente, gerentes de producto y, en esencia, cualquier otro puesto también podrían tener que pasar por él.

##### El CEO suele ser asignado a una entrevista de gerente de producto o de desarrollo, ya que esta suele ser la que mejor se ajusta a sus responsabilidades actuales

Sin embargo, esto no es una regla absoluta. Depende de cuál sea el puesto actual del CEO y de sus intereses. 

En el caso de algunos de mis clientes, el CEO incluso ha optado por no presentarse a la entrevista y abandonar la empresa tras la adquisición.

##### Los empleados con un rendimiento inferior al esperado a menudo no recibirán ofertas para unirse a la empresa adquirente. (Si muchos empleados no tienen un buen rendimiento, es probable que la adquisición no se concrete).

##### En algunos casos, los empleados con bajo rendimiento en las entrevistas obtienen puestos contractuales con el fin de "transferir conocimientos".

##### Se trata de puestos temporales con la expectativa de que el empleado se retire al finalizar el contrato (a menudo seis meses), aunque a veces el empleado termina siendo retenido.

En otros casos, el bajo rendimiento se debe a una asignación incorrecta del empleado. Esto ocurre en dos situaciones comunes:

A veces, una startup etiqueta a alguien que no es un ingeniero de software "tradicional" como ingeniero de software.

##### Esto suele ocurrir con científicos de datos o ingenieros de bases de datos. Estas personas pueden tener un rendimiento inferior durante las entrevistas de ingeniero de software, ya que su puesto real implica otras habilidades.

En otros casos, un director ejecutivo "vende" a un ingeniero de software junior como si fuera más experimentado de lo que realmente es

Su rendimiento es inferior al de un ingeniero senior porque se le exige un estándar injustamente alto.
 
En cualquier caso, a veces el empleado será entrevistado de nuevo para un puesto más adecuado. (Otras veces, sin embargo, el empleado simplemente no tiene suerte).


En raras ocasiones, un director ejecutivo es capaz de anular la decisión de un empleado particularmente fuerte cuyo desempeño en la entrevista no reflejó esto.


Tus "mejores" (y peores) empleados podrían sorprenderte.

Las entrevistas de resolución de problemas/algoritmos realizadas en las principales empresas tecnológicas evalúan habilidades específicas,
que podrían no coincidir exactamente con lo que su gerente evalúa en sus empleados.

No descartes a nadie (ni lo incluyas) hasta que lo hayas evaluado de la misma manera que lo harán sus entrevistadores.

¿Se les exige a los empleados los mismos estándares que a los candidatos típicos?
Básicamente sí, aunque hay un poco más de margen.

Si alguien está indeciso, a menudo se inclinan por no contratarlo.
En el caso de una adquisición, los empleados "indecisos" pueden salir adelante gracias al buen desempeño del resto del equipo.


#### ¿Cómo suelen reaccionar los empleados ante la noticia de una ¿Adquisición/adquisición?
¿Se molestarán los empleados con este proceso?

Ciertamente, algunos empleados están molestos con el proceso. Puede que no les entusiasme unirse a una de las grandes empresas por diversas razones.


#### ¿Qué sucede con el equipo después de una adquisición?
Cada situación es diferente. Sin embargo, la mayoría de mis clientes se han mantenido unidos como equipo o posiblemente se han integrado en un equipo existente. 


#### ¿Cómo debería preparar a su equipo para las entrevistas de adquisición?
##### Es bastante similar a las entrevistas típicas en la empresa adquirente. 

##### Algunas startups con las que he trabajado suspenden su trabajo "real" y hacen que sus equipos dediquen las siguientes dos o tres semanas a la preparación de la entrevista.

Obviamente, no es una opción que todas las empresas puedan tomar, pero, desde la perspectiva de querer que la adquisición se concrete, eso mejora sustancialmente los resultados.

##### Su equipo debería estudiar individualmente, en equipos de dos o tres personas, o realizando simulacros de entrevistas entre ellos.
 
Algunas personas pueden estar menos preparadas que otras. Muchos desarrolladores de startups podrían haber oído hablar vagamente del tiempo Big O, el árbol de búsqueda binario, la búsqueda en amplitud y otros conceptos importantes. Necesitarán tiempo adicional para prepararse.
 
##### Las personas sin título en informática (o que lo obtuvieron hace mucho tiempo) deberían centrarse primero en aprender los conceptos fundamentales que se tratan en este libro, especialmente el tiempo Big O (que es uno de los más importantes).

##### Un buen primer ejercicio es implementar todas las estructuras de datos y algoritmos fundamentales desde cero.

Si la adquisición es importante para tu empresa, dales a estas personas el tiempo que necesitan para prepararse. Lo necesitarán.
No esperes hasta el último minuto.

Como startup, podrías estar acostumbrado a tomar las cosas como vienen sin mucha planificación. 

Las startups que hacen esto con las entrevistas de adquisición no suelen tener buenos resultados.


Las entrevistas de adquisición suelen surgir de repente. 

El comprador menciona la posibilidad de entrevistas en el futuro. De repente, aparece un mensaje que dice "ven a finales de esta semana". Si esperas hasta que se fije una fecha para las entrevistas, probablemente no tendrás más que un par de días para prepararte.

Quizás no sea tiempo suficiente para que tus ingenieros aprendan conceptos básicos de informática y practiquen las preguntas de la entrevista.


### Para entrevistadores 

Muchos entrevistadores utilizan CCI

#### 1. No hagas exactamente las preguntas que aparecen aquí

Estas preguntas se seleccionaron porque son útiles para la preparación de entrevistas.

Algunas preguntas que son útiles para la preparación de entrevistas no siempre lo son. 

este libro incluye acertijos porque a veces los entrevistadores hacen este tipo de preguntas.

Vale la pena que los candidatos las practiquen si se entrevistan en una empresa que las valora, aunque personalmente creo que son malas preguntas.

Segundo, tus candidatos también están leyendo este libro. No querrás hacer preguntas que ya hayan resuelto.

Puedes hacer preguntas similares, pero no las saques de aquí

##### Tu objetivo es evaluar sus habilidades para resolver problemas, no su capacidad de memorización.

##### Haz preguntas de dificultad media y difícil.

El objetivo de estas preguntas es evaluar la capacidad de resolución de problemas de alguien.

##### Cuando haces preguntas demasiado fáciles, el rendimiento se aglomera. Los problemas menores pueden reducir considerablemente el rendimiento de alguien. No es un indicador fiable.

##### Algunas preguntas te hacen pensar. Se basan en una idea concreta. Si el candidato no la capta, su rendimiento es bajo. Si la capta, de repente ha superado a muchos candidatos.

### Idealmente, busca una pregunta que tenga una serie de obstáculos, ideas o optimizaciones.

##### Aquí tienes una prueba: si puedes dar una pista o una orientación que marque una diferencia sustancial en el rendimiento de un candidato, probablemente no sea una buena pregunta de entrevista.

### Los conocimientos que espera que tengan los candidatos deben ser bastante sencillos en estructuras de datos y algoritmos

##### Es razonable esperar que un graduado en informática comprenda los fundamentos de la O y los árboles. La mayoría no recordará el algoritmo de Dijkstra ni los detalles del funcionamiento de los árboles AVL.

Si su pregunta de entrevista espera conocimientos poco claros, pregúntese: ¿es esta una habilidad realmente importante? 

##### ¿Es tan importante que me gustaría reducir el número de candidatos que contrato o reducir el enfoque en la resolución de problemas u otras habilidades?

Cada nueva habilidad o atributo que evalúa reduce el número de ofertas, a menos que contrarreste esto flexibilizando los requisitos para una habilidad diferente. 


Evite las preguntas que intimidan.
Algunas preguntas intimidan a los candidatos porque parecen requerir conocimientos especializados, aunque en realidad no sea así.

Matemáticas o probabilidad.
Conocimientos básicos (asignación de memoria, etc.).
Diseño o escalabilidad de sistemas.
Sistemas propietarios (Google Maps, etc.).

Por ejemplo, una pregunta que a veces hago es encontrar todas las soluciones de números enteros positivos menores de 1000 elevados a a₃ + b₃ = c₃ + d₃ 

Muchos candidatos al principio pensarán que tienen que hacer algún tipo de factorización sofisticada o matemáticas semi-avanzadas.

No es así. Necesitan comprender el concepto de exponentes, sumas e igualdad, y eso es todo. 


### Proceso de solución

Cuando hago esta pregunta, digo explícitamente: "Sé que esto parece un problema de matemáticas. No te preocupes. No lo es. Es una pregunta de algoritmo". Si empiezan a recurrir a la factorización, los detengo y les recuerdo que no es una pregunta de matemáticas.
 
Otras preguntas pueden implicar algo de probabilidad. Podrían ser cosas que un candidato seguramente sabría (por ejemplo, para elegir entre cinco opciones, elige un número aleatorio entre 1 y 5).

Si vas a hacer una pregunta que suene "aterradora", asegúrate de convencer a los candidatos de que no requiere los conocimientos que creen.

Ofrezca refuerzo positivo.
Algunos entrevistadores se centran tanto en la pregunta "correcta" que se olvidan de pensar en su propio comportamiento.

Muchos candidatos se sienten intimidados por la entrevista e intentan interpretar cada palabra del entrevistador. Pueden aferrarse a cualquier cosa que pueda sonar positiva o negativa.

Desea que los candidatos se sientan bien con la experiencia, con usted y con su desempeño. Quiere que se sientan cómodos. Un candidato nervioso tendrá un desempeño deficiente, y eso no significa que no sea bueno.

Además, un buen candidato que tiene una reacción negativa hacia usted o hacia la empresa es menos probable que acepte una oferta, e incluso podría disuadir a sus amigos de la entrevista o aceptarla.

"Exacto, claro":
"Excelente punto":
"Buen trabajo":
"Vale, qué enfoque tan interesante":
"Perfecto":

No importa lo mal que le vaya a un candidato, siempre hay algo que acierta. Busca la manera de infundir positividad en la entrevista.


### Profundiza en las preguntas de comportamiento.

##### Muchos candidatos no son capaces de expresar sus logros específicos.

Les preguntas sobre una situación desafiante y te cuentan una situación difícil que enfrentó su equipo.

Por lo que puedes ver, el candidato no hizo gran cosa.

Pero no te apresures. Un candidato podría no centrarse en sí mismo porque ha sido entrenado para celebrar los logros de su equipo y no para presumir. Esto es especialmente común en personas con roles de liderazgo y candidatas.

##### Pregúntale específicamente si puede decirte cuál fue su rol.

##### Pídele que detalla cómo pensó sobre el problema y las diferentes medidas que tomó. Pregúntale por qué tomó ciertas medidas


Capacita a tus candidatos.
Lee las secciones sobre cómo los candidatos pueden desarrollar buenos algoritmos. 

Muchos candidatos no usan un ejemplo para resolver una pregunta de entrevista (o no usan un buen ejemplo). Esto dificulta considerablemente el desarrollo de una solución, pero no significa necesariamente que no sean buenos solucionando problemas.

Si los candidatos no escriben un ejemplo ellos mismos, o si sin darse cuenta escriben un caso especial, guíalos.

Simplemente significa que no se dieron cuenta de que sería más eficiente analizar su código conceptualmente primero, o que un pequeño ejemplo funcionaría igual de bien. Guíalos.

##### Si se sumergen en el código antes de tener una solución óptima, retírelos y concéntrelos en el algoritmo (si eso es lo que desea ver).

Si se ponen nerviosos, se atascan y no saben qué hacer, sugiérales que revisen la solución de fuerza bruta y busquen áreas para optimizar.

##### Si no han dicho nada y hay una fuerza bruta bastante obvia, recuérdeles que pueden empezar con una fuerza bruta. Su primera solución no tiene que ser perfecta.

Sin embargo, ten cuidado. Si eres alguien que intimida a los candidatos, este coaching podría empeorar las cosas. Puede parecer que les estás diciendo a los candidatos que constantemente meten la pata al dar malos ejemplos, al no priorizar las pruebas correctamente, etc.


### Si quieren silencio, dales silencio.

Una de las preguntas más frecuentes que me hacen los candidatos es cómo lidiar con un entrevistador que insiste en hablar cuando solo necesitan un momento para pensar en silencio.

Si tu candidato lo necesita, dale este tiempo para pensar. Aprende a distinguir entre "Estoy atascado y no tengo ni idea de qué hacer" y "Estoy pensando en silencio".


### Define tu modo: control de cordura, calidad, especialista y representante. 

A un nivel muy alto, existen cuatro tipos de preguntas:


#### 1. Prueba de cordura:

Suelen ser preguntas sencillas de resolución de problemas o de diseño.

Evalúan un nivel mínimo de competencia en la resolución de problemas. 

No te dirán la diferencia entre "aceptable" y "excelente"; así que no las evalúes como tales.

Puedes usarlas al principio del proceso (para descartar a los peores candidatos) o cuando solo necesites un nivel mínimo de competencia.


#### 2. Control de calidad:

Estas son las preguntas más desafiantes, a menudo en resolución de problemas o diseño.
 
Están diseñadas para ser rigurosas y hacer reflexionar al candidato.
 
Úsalas cuando las habilidades algorítmicas o de resolución de problemas sean muy importantes. 
 

#### 3. Preguntas especializadas:

Estas preguntas evalúan el conocimiento de temas específicos, como Java o aprendizaje automático
 
Deben usarse cuando se trata de habilidades que un buen ingeniero no podría aprender rápidamente en el trabajo. 
 
Estas preguntas deben ser apropiadas para verdaderos especialistas. 
 

#### 4. Conocimiento indirecto:

Este conocimiento no es del todo especializado (de hecho, puede que ni siquiera lo necesite), pero que esperaría que un candidato de su nivel tuviera. 

Por ejemplo, puede que no le importe mucho que un candidato sepa CSS o HTML. 

##### Pero si un candidato ha trabajado a fondo con estas tecnologías y no puede explicar por qué las tablas son buenas o no, eso sugiere un problema. 

##### No está asimilando información esencial para su trabajo.


### Cuando las empresas se meten en problemas es cuando combinan estas características:

Hacen preguntas especializadas a personas que no lo son.

Contratan para puestos especializados cuando no los necesitan.

Necesitan especialistas, pero solo evalúan habilidades bastante básicas.

Hacen preguntas de verificación de cordura (fáciles), pero creen que son preguntas de control de calidad

##### Por lo tanto, interpretan una gran diferencia entre un rendimiento "aceptable" y "excelente"

Aunque un detalle muy pequeño podría haberlos separado. 

Tanto pequeñas como grandes, en sus procesos de contratación, he descubierto que la mayoría de las empresas están haciendo mal alguna de estas cosas.




## 1.4 Antes de la entrevista

##### El éxito en una entrevista empieza mucho antes de la entrevista misma; de hecho, años antes. 

### La siguiente cronología describe qué debes tener en cuenta.

Si empiezas tarde en este proceso, no te preocupes. Ponte al día lo máximo posible y luego concéntrate en la preparación. 


### 1. Conseguir la experiencia adecuada

Sin un buen currículum, no hay entrevista. 

Y sin gran experiencia, no hay buen currículum. 

Por lo tanto, el primer paso para conseguir una entrevista es adquirir una gran experiencia. 

Cuanto antes pienses en esto, mejor.

##### Para los estudiantes actuales, esto puede significar lo siguiente:


#### 1. Tomar las clases de grandes proyectos: 

Busca las clases con grandes proyectos de programación. 

Es una excelente manera de adquirir algo de experiencia práctica antes de tener experiencia laboral formal. 

Cuanto más relevante sea el proyecto para el mundo real, mejor.


#### 2. Conseguir una pasantía:

Haz todo lo posible por conseguir una pasantía al principio de la universidad. 
 
Esto allanará el camino para pasantías aún mejores antes de graduarte.
 
Muchas de las principales empresas tecnológicas tienen programas de pasantías diseñados especialmente para estudiantes de primer y segundo año. 

También puedes considerar startups, que pueden ser más flexibles.


#### 3. Emprender algo:

Desarrolla un proyecto en tu tiempo libre, participa en hackatones o contribuye a un proyecto de código abierto. 

No importa demasiado qué sea.

Lo importante es que estés programando.

Esto no solo desarrollará tus habilidades técnicas y experiencia práctica, sino que tu iniciativa impresionará a las empresas.

Por ejemplo, un desarrollador de Google probablemente ya tenga suficiente experiencia para pasarse a Facebook. 
 

#### Sin embargo, si intentas pasar de una empresa menos conocida a una de las grandes, o de pruebas/TI a un puesto de desarrollador, los siguientes consejos te serán útiles:

##### Cambia tus responsabilidades laborales hacia la programación:
 
Sin revelarle a tu jefe que estás pensando en dejar la empresa, puedes expresar tu entusiasmo por asumir retos de programación más ambiciosos.

En la medida de lo posible, intenta que estos proyectos sean de gran envergadura, utilicen tecnologías relevantes y se presten a una o dos viñetas en tu currículum. 

Idealmente, estos proyectos de programación constituirán la mayor parte de tu currículum.


#### Aprovecha tus noches y fines de semana:

Si tienes tiempo libre, dedícalo a desarrollar una aplicación móvil, una aplicación web o un software de escritorio.

Participar en este tipo de proyectos también es una excelente manera de adquirir experiencia con nuevas tecnologías, lo que te hará más relevante para las empresas actuales.

Este proyecto debería estar incluido en tu currículum; pocas cosas impresionan tanto a un entrevistador como un candidato que ha creado algo.

Todo esto se reduce a dos aspectos clave que las empresas buscan: que seas inteligente y que sepas programar. Si puedes demostrarlo, puedes conseguir una entrevista.

##### Además, debes pensar con antelación hacia dónde quieres dirigir tu carrera.

##### Si quieres ascender a la gerencia en el futuro, aunque actualmente busques un puesto de desarrollo, deberías buscar ahora maneras de desarrollar experiencia en liderazgo.


### 2. Escriben un buen resumen/cv

##### Los evaluadores de currículum buscan lo mismo que los entrevistadores. Quieren saber que eres inteligente y que sabes programar.

##### Por eso, debes preparar tu currículum para destacar ambas cosas. 

##### incluir líneas más técnicas


#### Extensión adecuada del currículum

##### En EE. UU., se recomienda encarecidamente que el currículum no supere una página si se tiene menos de diez años de experiencia.

De lo contrario, los candidatos con más experiencia suelen justificar entre 1,5 y 2 páginas.

##### Piénsalo dos veces antes de un currículum largo.

Los currículums cortos suelen ser más impactantes.

##### Los reclutadores solo dedican un tiempo fijo (unos 10 segundos) a revisar tu currículum.

##### Si limitas el contenido a los elementos más impactantes, el reclutador seguramente los verá.

##### Algunas personas simplemente se niegan a leer currículums largos

Si ahora mismo piensas que tienes demasiada experiencia y no puedes incluirla toda en una o dos páginas, créeme, puedes.


#### 2. Historial laboral

##### Tu currículum no incluye, ni debe incluir, un historial completo de todos los puestos que has desempeñado. Incluye solo los puestos relevantes: aquellos que te convierten en un candidato más convincente.

Redacción de viñetas concisas:

##### Para cada puesto, intenta describir tus logros con el siguiente enfoque: "Logré X implementando Y, lo que condujo a...". Aquí tienes un ejemplo:

###### "Reduje el tiempo de renderizado de objetos en un 75 % mediante la implementación de almacenamiento en caché distribuido, lo que resultó en una reducción del 10 % en el tiempo de inicio de sesión:

Aquí tienes otro ejemplo con una redacción alternativa:

###### "Aumenté la precisión de coincidencia promedio de 1,2 a 1,5 mediante la implementación de un nuevo algoritmo de comparación basado en Windiff:

##### No todo lo que hiciste encajará en este enfoque, pero el principio es el mismo: muestra lo que hiciste, cómo lo hiciste y cuáles fueron los resultados. 

##### Idealmente, deberías intentar que los resultados sean "medibles" de alguna manera.


#### 3. Proyectos

Desarrollar la sección de proyectos en tu currículum suele ser la mejor manera de presentarte como alguien con más experiencia.

Esto aplica especialmente a estudiantes universitarios o recién graduados.

##### Los proyectos deben incluir de 2 a 4 de tus proyectos más importantes. 

##### Indica de qué se trata y qué lenguajes o tecnologías se emplearon.

##### También puedes considerar incluir detalles como si el proyecto fue individual o de equipo, y si se realizó para un curso o de forma independiente. 

Estos detalles no son obligatorios, así que inclúyelos solo si te hacen quedar mejor. 

##### Generalmente, se prefieren los proyectos independientes a los de un curso, ya que demuestran iniciativa.


#### 4. Lenguajes de Programación y Software

Software: 

Sé conservador con el software que incluyas y entiende qué es apropiado para la empresa.

Software como Microsoft Office casi siempre se puede descartar. 

Software técnico como Visual Studio y Eclipse es algo más relevante, pero a muchas de las principales empresas tecnológicas ni siquiera les importa. Después de todo, ¿es realmente tan difícil aprender Visual Studio?

##### Por supuesto, no te hará daño enumerar todo este software. Simplemente ocupa espacio valioso. Debes evaluar las ventajas y desventajas.


Lenguajes: 

¿Deberías enumerar todo con lo que has trabajado o reducir la lista a solo aquellos con los que te sientes más cómodo?

Enumerar todo con lo que has trabajado es peligroso. 

Muchos entrevistadores consideran que cualquier cosa en tu currículum es válida para la entrevista.

Una alternativa es enumerar la mayoría de los lenguajes que has usado, pero añadir tu nivel de experiencia.

Este enfoque se muestra a continuación:

##### Idiomas: Java (experto), C++ (competente), JavaScript (experiencia previa).

##### Utilice la terminología ("experto", "fluido", etc.) que comunique eficazmente sus habilidades.

Algunas personas indican el número de años de experiencia que tienen con un lenguaje en particular, pero esto puede ser muy confuso. 

Si aprendió Java hace 10 años y lo ha usado ocasionalmente durante ese tiempo, ¿cuántos años de experiencia son?

Es mejor simplemente describir lo que quiere decir en un lenguaje sencillo.


#### 5. Consejos para hablantes no nativos de inglés e internacionales

Algunas empresas desecharán tu currículum solo por una errata tipográfica. Por favor, contrata a al menos un hablante nativo de inglés para que lo revise.

Además, para puestos en EE. UU., no incluya edad, estado civil ni nacionalidad. Este tipo de información personal no es bien recibida por las empresas, ya que les genera responsabilidad legal.


#### 6. Cuidado con el (Potencial) Estigma

Ciertos lenguajes tienen estigmas asociados. 

A veces, esto se debe al lenguaje en sí, pero a menudo se debe a los lugares donde se usan. 

No estoy defendiendo el estigma; solo te lo hago saber.

##### Algunos estigmas que debes conocer:

##### 1. Lenguajes empresariales:

Ciertos lenguajes tienen un estigma asociado, y esos suelen ser los que se utilizan para el desarrollo empresarial.

###### Visual Basic es un buen ejemplo de esto. Si demuestras ser un experto en VB, puede que la gente asuma que eres menos hábil. 

Muchas de estas mismas personas admitirán que, sí, VB.NET es perfectamente capaz de crear aplicaciones sofisticadas.

Pero aun así, las aplicaciones que se suelen crear con él no son muy sofisticadas. Es poco probable que veas a una gran empresa de Silicon Valley usando VB.

De hecho, el mismo argumento (aunque menos sólido) se aplica a toda la plataforma .NET. 

Si tu enfoque principal es .NET y no te postulas a puestos en .NET, 

tendrás que esforzarte más para demostrar tu solidez técnica que si tuvieras una formación diferente.


##### 2. Demasiado énfasis en el lenguaje: 

###### Cuando los reclutadores de algunas de las principales empresas tecnológicas ven currículums que incluyen todas las variantes de Java, hacen suposiciones negativas sobre el nivel del candidato. 

##### Existe la creencia generalizada de que los mejores ingenieros de software no se definen en torno a un lenguaje en particular.

##### Debes comprender qué valora esa empresa. Algunas empresas sí lo valoran.


##### 3. Certificaciones:

Las certificaciones para ingenieros de software pueden ser desde positivas hasta neutrales o negativas.

##### Esto va de la mano con un enfoque excesivo en los idiomas; las empresas que tienen prejuicios contra candidatos con una lista muy extensa de tecnologías también tienden a tener prejuicios contra las certificaciones.

##### Esto significa que, en algunos casos, deberías eliminar este tipo de experiencia de tu currículum.


##### 4. Dominio de solo uno o dos lenguajes: 

##### Cuanto más tiempo hayas dedicado a la programación, más cosas habrás creado y con más lenguajes habrás trabajado. 

##### Por lo tanto, cuando ven un currículum con un solo lenguaje, asumen que no has tenido muchos problemas. 

También suelen preocuparse. 

##### Los candidatos con solo uno o dos idiomas tendrán dificultades para aprender nuevas tecnologías (¿por qué no han aprendido más?) o simplemente se sentirán demasiado atados a una tecnología específica (posiblemente no estén usando el lenguaje más adecuado para la tarea).

Este consejo no solo te ayudará a mejorar tu currículum, sino también a desarrollar la experiencia adecuada.

Si tu experiencia es en C#.NET, intenta desarrollar proyectos en Python y JavaScript.
 
Si solo conoces uno o dos idiomas, crea aplicaciones en otro.

Siempre que sea posible, intenta diversificar tu oferta. Los lenguajes del grupo Python, Ruby y JavaScript son bastante similares entre sí.

##### Es mejor aprender lenguajes más diferentes, como Python, C++ y Java.


### 2. Preparación

##### Cómo abordar el proceso de preparación para la entrevista.

Una de las conclusiones clave es que no se trata solo de preguntas de entrevista.

También hay que realizar proyectos y programar

#### 1. Un año antes 

Desarrolla proyectos fuera de la escuela o el trabajo.

Aprende varios lenguajes de programación.

Amplía tu red de contactos.

Crea un sitio web o portafolio que muestre tu experiencia.

Estudiantes: buscan prácticas y toman clases con proyectos grandes.

Profesionales: enfóquense en proyectos de mayor envergadura.


#### 2. 3-12 meses 

Sigue trabajando en proyectos. Intenta añadir uno más.

Crea un borrador de currículum y envíalo para su revisión.

Haz una lista de empresas preferidas.

Aprende y domina el Big 0.

Implementa estructuras de datos y algoritmos desde cero.

Forma un grupo de entrevistas simuladas con amigos para entrevistarse entre sí.


#### 3. 1-3 meses

Realiza miniproyectos para consolidar la comprensión de los conceptos clave.

Realiza varios simulacros de entrevista.

Continúa practicando las preguntas de entrevista.

Crea una lista para registrar los errores que has cometido al resolver problemas.


#### 4. 4 meses

Crea una cuadrícula de preparación para la entrevista (pág. 32).

Revisa/actualiza el currículum.

Relee la introducción a CtCi, especialmente la sección de Tecnología y Comportamiento.

##### Empieza a postularte a empresas.

Sigue practicando las preguntas y escribiendo el código en papel.


#### 1 semana 

Entrevista telefónica: Localice los auriculares o la cámara de video.

Realice un simulacro final de entrevista.

Ensaye las historias de la cuadrícula de preparación para la entrevista (pág. 32).

Relea "Enfoques de algoritmos" (pág. 67).

Relea la sección "Gran O" (pág. 38).

Continúe practicando las preguntas de la entrevista.


#### Día antes

Ensaya cada historia de la cuadrícula de preparación para la entrevista una vez.

Continúa practicando las preguntas y revisa tu lista de errores.

Revisa la tabla de potencias de 2 (pág. 61). Imprímela para una prueba de teléfono.


#### Día de entrevista 

Despierta con tiempo suficiente para desayunar bien y ser puntual.

Ten confianza (¡no seas arrogante!).

##### Recuerda hablar en voz alta. Demuestra cómo piensas.

No lo olvides: ¡Tropezar y tener dificultades es normal!


#### Después

Escribe una nota de agradecimiento al reclutador.

Si no has tenido noticias del reclutador, contáctalo después de una semana.

Si no hay oferta, pregunta cuándo puedes volver a postularte. ¡No pierdas la esperanza!

¿Recibiste una oferta? ¡Celebra! ¡Tu esfuerzo dio sus frutos!


## 1.5 Preguntas de comportamiento

##### Las preguntas de comportamiento se realizan para conocer tu personalidad, comprender mejor tu currículum y, simplemente, para facilitarte la entrevista. 


### 1. Tabla de preparación para la entrevista

##### Revisa cada uno de los proyectos o componentes de tu currículum y asegúrate de poder hablar de ellos en detalle. 

Completar una tabla como esta puede ser útil:

Para cada uno de los proyectos: 

Preguntas frecuentes:

Desafíos
Errores/Fracasos
Disfrutado
Liderazgo
Conflictos

Qué harías diferente


En la parte superior, en columnas, debes enumerar todos los aspectos principales de tu currículum, incluyendo cada proyecto, puesto o actividad. 

En las filas laterales, debes enumerar las preguntas de comportamiento comunes.

Estudia esta cuadrícula antes de la entrevista. 

##### Reducir cada historia a un par de palabras clave puede facilitar el estudio y la memorización de la cuadrícula. 

También te resultará más fácil tenerla a mano durante la entrevista sin que te distraiga.

Además, asegúrate de tener de uno a tres proyectos que puedas detallar. 

Debes poder analizar los componentes técnicos en profundidad. 

Estos deben ser proyectos en los que hayas desempeñado un papel fundamental.


#### 1. ¿Cuáles son tus debilidades?

##### Cuando te pregunten sobre tus debilidades, ¡menciona una verdadera! 

##### Respuestas como "Mi mayor debilidad es que trabajo demasiado" le indican al entrevistador que eres arrogante o que no reconoces tus defectos.

Una buena respuesta transmite una debilidad real y legítima, pero enfatiza cómo te esfuerzas por superarla.

Por ejemplo:
"A veces no presto mucha atención a los detalles. 
Si bien eso es bueno porque me permite actuar con rapidez, también significa que a veces cometo errores por descuido. 
Por eso, siempre me aseguro de que alguien revise mi trabajo".


#### 2. ¿Qué preguntas deberías hacerle al entrevistador?

La mayoría de los entrevistadores te darán la oportunidad de hacerles preguntas. 

##### La calidad de tus preguntas será un factor, ya sea consciente o inconscientemente, en sus decisiones. 
 
##### Acude a la entrevista con algunas preguntas en mente.

Puedes pensar en tres tipos generales de preguntas:

##### 1. Preguntas genuinas:

###### Estas son las preguntas cuyas respuestas realmente quieres conocer. 

Aquí tienes algunas ideas de preguntas que son valiosas para muchos candidatos:

1. "¿Cuál es la proporción de testers, desarrolladores y gerentes de programa? 

¿Cómo es la interacción? 

¿Cómo se planifica el proyecto en el equipo?"


2. "¿Qué te trajo a esta empresa?

 ¿Qué ha sido lo más difícil para ti?"

##### Estas preguntas te darán una buena idea de cómo es el día a día en la empresa.


##### 2. Preguntas perspicaces

###### Estas preguntas demuestran tu conocimiento o comprensión de la tecnología.

1. "He notado que usas la tecnología X. 

¿Cómo gestionas el problema Y?"

2. "¿Por qué el producto eligió usar el protocolo X en lugar del protocolo Y? 

Sé que tiene beneficios como A, B, C, pero muchas empresas optan por no usarlo debido a problemas como:"

Hacer estas preguntas generalmente requiere una investigación previa sobre la empresa.


##### 3. Preguntas sobre Pasión

##### Estas preguntas están diseñadas para demostrar tu pasión por la tecnología. 

Demuestran que estás interesado en aprender y que contribuirás significativamente a la empresa.

1. "Me interesa mucho la escalabilidad y me encantaría aprender más sobre ella. 

¿Qué oportunidades hay en esta empresa para aprender sobre esto?"


2. "No estoy familiarizado con la tecnología X, pero parece una solución muy interesante. 

¿Podrías contarme un poco más sobre cómo funciona?"


### 3. Conoce tus proyectos técnicos

##### Como parte de tu preparación, deberías centrarte en dos o tres proyectos técnicos que domines a fondo. 

Selecciona proyectos que se ajusten idealmente a los siguientes criterios:

1. El proyecto tuvo componentes desafiantes (más allá de simplemente "aprender mucho").

2. Tuviste un papel central (idealmente en los componentes desafiantes).

3. Puedes hablar con profundidad técnica.

##### Para esos proyectos, y para todos los tuyos, sé capaz de hablar sobre los desafíos, errores, decisiones técnicas, opciones tecnológicas (y sus ventajas y desventajas) y lo que harías de forma diferente.

##### También puedes pensar en preguntas de seguimiento, como cómo escalarías la aplicación.


### 3. Respondiendo a Preguntas de Comportamiento

##### Las preguntas de comportamiento permiten al entrevistador conocerte mejor a ti y a tu experiencia previa. 

Recuerda los siguientes consejos al responder a las preguntas.


#### 1. Sé específico, no arrogante.

La arrogancia es una señal de alerta, pero aun así quieres impresionar. 

Entonces, ¿cómo lograr una buena impresión sin ser arrogante? ¡Siendo específico!

##### La especificidad significa presentar solo los hechos y dejar que el entrevistador deduzca su interpretación

##### Por ejemplo, en lugar de decir que "hiciste todo lo difícil", puedes describir las partes específicas que te resultaron desafiantes.


#### 2. Limita los detalles

##### Cuando un candidato habla sin parar sobre un problema, es difícil que un entrevistador sin un buen conocimiento del tema o proyecto lo entienda.

##### Sé breve en detalles y solo menciona los puntos clave. 

##### Cuando sea posible, intenta traducirlo o al menos explicar el impacto.

Siempre puedes ofrecer al entrevistador la oportunidad de profundizar en el tema.

Ej: 
##### Al examinar el comportamiento más común de los usuarios y aplicar el algoritmo Rabin-Karp, diseñé un nuevo algoritmo para reducir la búsqueda de O(n) a 0(log n) en el 90 % de los casos. 
Puedo dar más detalles si lo desea:


#### 3. Concéntrese en usted mismo, no en su equipo:

Desafortunadamente, al escuchar a muchos candidatos (especialmente a aquellos en puestos de liderazgo), sus respuestas se centran en "nosotros". y "el equipo": El entrevistador

El entrevistador se marcha sin tener ni idea de cuál fue el impacto real del candidato y podría concluir que hizo poco.


#### 4. Dar respuestas estructuradas

Hay dos maneras comunes de pensar en la estructuración de las respuestas a una pregunta de comportamiento: 

##### 1. La pepita de oro: significa comenzar tu respuesta con una "pepita de oro" que describa sucintamente de qué se tratará tu respuesta.

Por ejemplo:

Entrevistador: "Cuéntame sobre una vez que tuviste que persuadir a un grupo de personas para hacer un gran cambio".

Candidato: "Claro, déjame contarte sobre la vez que convencí a mi universidad para que permitiera a los estudiantes universitarios impartir sus propios cursos. Inicialmente, mi universidad tenía una regla donde..."

Esta técnica capta la atención del entrevistador y deja muy claro de qué tratará tu historia. También te ayuda a comunicarte con mayor precisión, ya que has dejado muy claro cuál es la esencia de tu respuesta.


##### 2. S.A.R. (Situación, Acción, Resultado): implica comenzar describiendo la situación, luego explicar las acciones que realizaste y, por último, describir el resultado.

Ejemplo: "Cuéntame sobre una interacción difícil con un compañero de equipo:"

1. Situación: En mi proyecto de sistemas operativos, me asignaron trabajar con otras tres personas. Si bien dos de ellas eran excelentes, el tercer miembro del equipo no contribuía mucho

Permanecía callado durante las reuniones, rara vez intervenía en las discusiones por correo electrónico y le costaba completar sus componentes. Esto era un problema no solo porque nos asignaba más trabajo, sino también porque no sabíamos si podíamos contar con él. 

2. Acción: No quería descartarlo por completo todavía, así que intenté resolver la situación. Hice tres cosas.

Primero, quería entender por qué actuaba así. ¿Era pereza? ¿Estaba ocupado con otra cosa? Entablé una conversación con él y luego le hice preguntas abiertas sobre cómo creía que iba. Curiosamente, prácticamente de la nada, dijo que quería encargarse de la redacción, que es una de las partes que más tiempo requiere. Esto me demostró que no era pereza; era que no se sentía lo suficientemente bueno para escribir código.

Segundo, ahora que entendía la causa, intenté dejarle claro que no debía tener miedo de equivocarse. Le conté algunos de los errores más grandes que cometí y admití que yo tampoco tenía claros muchos aspectos del proyecto.

Tercero y finalmente, le pedí que me ayudara a desglosar algunos de los componentes del proyecto. Nos sentamos juntos y diseñamos una especificación completa para uno de los componentes principales, con mucho más detalle que antes. Una vez que pudo ver todas las piezas, le ayudó a ver que el proyecto no era tan complicado como había supuesto.

3. Resultado: Con más confianza, se ofreció a encargarse de gran parte del trabajo de codificación más pequeño y, finalmente, de algunas de las partes más importantes. Terminó todo su trabajo a tiempo y contribuyó más en las discusiones. Estuvimos encantados de trabajar con él en un futuro proyecto


#### Plantilla para SAR (Situación, Acción y Resultado):

##### La situación y el resultado deben ser concisos. El entrevistador generalmente no necesita muchos detalles para comprender lo sucedido y, de hecho, podría confundirse con ellos.

##### Al utilizar el modelo S.A.R. con situaciones, acciones y resultados claros, el entrevistador podrá identificar fácilmente cómo tuviste un impacto y por qué fue importante.

Para cada historia, completar:

1. Pepita

2. Situación

3. Acción(es): 1, 2, 3

4. Resultado

lo que dice


##### 1. Explora la acción

En casi todos los casos, la "acción" es la parte más importante de la historia. Desafortunadamente, mucha gente

habla sin parar sobre la situación, pero luego simplemente pasa por alto la acción.

En lugar de eso, sumérgete en la acción. Siempre que sea posible, divídela en varias partes. Por ejemplo: "Hice

tres cosas. Primero, !...". Esto fomentará la profundidad suficiente.


##### 2. Piensa en lo que dice

Relee la historia de la página 35. 

¿Qué atributos de personalidad ha demostrado el candidato?


1. Iniciativa/Liderazgo: El candidato intentó resolver la situación abordándola directamente.

2. Empatía: El candidato intentó comprender lo que le estaba sucediendo a la persona. También mostró empatía al saber qué resolvería la inseguridad de su compañero.

3. Compasión: Aunque su compañero perjudicaba al equipo, el candidato no estaba enojado con él. Su empatía lo llevó a la compasión.

4. Humildad: El candidato fue capaz de admitir sus propios defectos (no solo ante su compañero, sino también ante el entrevistador).

5. Trabajo en equipo/Atención: El candidato trabajó con su compañero para dividir el proyecto en partes manejables.


##### Deberías pensar en tus historias desde esta perspectiva. Analiza las acciones que realizaste y cómo reaccionaste. ¿Qué atributos de personalidad demuestra tu reacción?

En muchos casos, la respuesta es "ninguno". Eso suele significar que necesitas reescribir tu forma de comunicar la historia para que el atributo sea más claro. 

##### No quieres decir explícitamente: "Hice X porque tengo empatía", pero puedes ir un paso más allá.

Por ejemplo:

Atributo menos claro: "Llamé al cliente y le conté lo sucedido".

Atributo más claro (empatía y valentía): "Me aseguré de llamar al cliente yo mismo, porque sabía que agradecería escucharlo directamente de mí".

Si aún no logras que los atributos de personalidad sean claros, quizás tengas que inventar una historia completamente nueva.


### 4. Cuéntame sobre ti...

Muchos entrevistadores comienzan la sesión pidiéndote que les cuentes un poco sobre ti o que revises tu currículum.

##### Esto es básicamente una "presentación". Es la primera impresión que el entrevistador tiene de ti, así que asegúrate de que sea perfecta.


#### 1. Estructura 

Una estructura típica que funciona bien para muchas personas es esencialmente cronológica, con la primera oración describiendo su trabajo actual y la conclusión hablando de sus aficiones relevantes e interesantes fuera del trabajo (si las hay).

1. Puesto actual `[Solo título]`: "Soy ingeniero de software en Microworks, donde he liderado el equipo de Android durante los últimos cinco años".

2. Universidad: Mi formación es en informática. Estudié mi licenciatura en Berkeley y pasé algunos veranos trabajando en startups, incluyendo uno en el que intenté lanzar mi propio negocio.

3. Posgrado y en adelante: Después de la universidad, quería conocer a grandes corporaciones, así que me uní a Amazon como desarrollador. Fue una gran experiencia. Aprendí muchísimo sobre diseño de grandes sistemas y pude impulsar el lanzamiento de una parte clave de AWS. Eso me demostró que realmente quería estar en un entorno empresarial.

4. Rol actual `[Detalles]`: Una de mis antiguas gerentes de Amazon me reclutó para unirme a su startup, lo que me llevó a Microworks. Allí, diseñé la arquitectura inicial del sistema, que ha escalado bastante bien con nuestro rápido crecimiento. Después, aproveché la oportunidad de liderar el equipo de Android. Dirijo un equipo de tres personas, pero mi función principal es la de liderazgo técnico: arquitectura, programación, etc.

5. Fuera del trabajo: Fuera del trabajo, he participado en algunos hackatones, principalmente desarrollando iOS, para profundizar en el tema. También soy moderador activo en foros en línea sobre desarrollo de Android.

6. Resumen: Ahora estoy buscando algo nuevo y su empresa me llamó la atención. Siempre me ha gustado la conexión con el usuario y también quiero volver a un entorno más pequeño.

Esta estructura funciona bien para aproximadamente el 95 % de los candidatos. Para candidatos con más experiencia, podrías condensar parte de ella. Dentro de diez años, las declaraciones iniciales del candidato podrían ser simplemente: "Después de mi licenciatura en Ciencias de la Computación en Berkeley, pasé unos años en Amazon y luego me uní a una startup donde dirigí el equipo de Android".


#### 2. Hobbies 

Probablemente puedas omitirlo.

##### Sin embargo, a veces los pasatiempos pueden ser útiles. Esto suele ocurrir cuando:

El pasatiempo es extremadamente único (por ejemplo, escupir fuego). Puede generar un poco de conversación y comenzar la entrevista de forma más amistosa.

El pasatiempo es técnico. Esto no solo potencia tus habilidades, sino que también demuestra pasión por la tecnología.

El pasatiempo demuestra un atributo positivo de la personalidad.

Un pasatiempo como "remodelar tu casa tú mismo"

muestra un deseo de aprender cosas nuevas, arriesgarse y ponerte manos a la obra (literal y figurativamente).


Piensa en la mejor manera de presentar tu pasatiempo. 

¿Tienes algún éxito o trabajo específico que puedas demostrar (por ejemplo, haber conseguido un papel en una obra de teatro)? ¿Hay algún atributo de personalidad que demuestre esta afición?


#### 3. Destaca tus éxitos 

En la presentación anterior, el candidato ha mencionado algunos aspectos destacados de su trayectoria profesional.

Mencionó específicamente que su antiguo jefe lo contrató en Microworks, lo que demuestra su éxito en Amazon.

También menciona su deseo de trabajar en un entorno más pequeño, lo que demuestra cierta afinidad cultural (suponiendo que se trate de una startup).

Menciona algunos éxitos, como el lanzamiento de una parte clave de AWS y la arquitectura de un sistema escalable.

Menciona sus aficiones, ambas demostrando un gran interés por aprender.

Al preparar tu presentación, piensa en qué dicen de ti diferentes aspectos de tu trayectoria.

¿Puedes mencionar tus éxitos (premios, ascensos, contratación por parte de alguien con quien trabajaste, lanzamientos, etc.)? ¿Qué quieres comunicar sobre ti?


## 1.6 Big O 

##### El tiempo Big O es el lenguaje y la métrica que usamos para describir la eficiencia de los algoritmos. 

##### Domina este concepto, sino te costará determinar cuándo tu algoritmo se está volviendo más rápido o más lento.


### 1. Analogía 

Imagina la siguiente situación: Tienes un archivo en un disco duro y necesitas enviárselo a un amigo que vive al otro lado del país. Necesitas que se lo envíes lo antes posible. ¿Cómo deberías enviarlo?

La mayoría de la gente pensaría primero en correo electrónico, FTP u otro medio de transferencia electrónica. Es una idea razonable, pero solo a medias correcta.


Si es un archivo pequeño, sin duda tienes razón. Tardarías entre 5 y 10 horas en llegar al aeropuerto, tomar un vuelo y entregárselo a tu amigo.

Pero ¿y si el archivo fuera realmente grande? ¿Es posible que sea más rápido enviarlo físicamente por avión?

Sí, de hecho lo es. Un archivo de un terabyte (1 TB) podría tardar más de un día en transferirse electrónicamente. 


### 2. Complejidad temporal

##### Esto es lo que significa el concepto de tiempo de ejecución asintótico o Big O time


Podríamos describir el tiempo de ejecución del "algoritmo" de transferencia de datos como:

1. Transferencia electrónica: 0(s), donde s es el tamaño del archivo. 

##### Esto significa que el tiempo de transferencia del archivo aumenta linealmente con el tamaño del archivo. 

(Sí, esto es una simplificación, pero no tiene importancia para estos fines).


2. Transferencia aérea: 0(1) con respecto al tamaño del archivo. 

##### A medida que aumenta el tamaño del archivo, no tardará más en llegarle a su amigo. 

##### El tiempo es constante.


##### No importa cuán grande sea la constante y cuán lento sea el aumento lineal, en algún momento lo lineal superará a lo constante.

Lineal: O(s) /

Constante: O(1) --


Hay muchos más tiempos de ejecución. 

Algunos de los más comunes son O(log N), O(N log N), O(N), O(N^2) y O(2^N). 

Sin embargo, no hay una lista fija de posibles tiempos de ejecución.


##### También puedes tener múltiples variables en tu tiempo de ejecución.

Por ejemplo, el tiempo para pintar una valla de w metros de ancho y h metros de alto podría describirse como O(wh).

Si necesitas p capas de pintura, podrías decir que el tiempo es O(whp).


#### 1. Big 0, Big Theta y Big Omega

Si nunca has tratado el Big O en un entorno académico, probablemente puedas omitir esta subsección. Podría confundirte más de lo que te ayuda. Este "FYI" está aquí principalmente para aclarar la ambigüedad en la redacción para quienes ya han aprendido el Big O, para que no digan: "Pero pensé que Big O significaba...".

1. Big O:

##### En el ámbito académico, describe un límite superior en el tiempo. 

Un algoritmo que imprime todos los valores de un array podría describirse como O(N), pero también podría describirse como O(N²), O(N³) o 0(2^N) (o muchos otros tiempos 

El algoritmo es al menos tan rápido como cada uno de estos; por lo tanto, son límites superiores en el tiempo de ejecución.

Esto es similar a una relación de menor o igual a.

Si Bob tiene X años (supongo que nadie vive más allá de los 130), entonces se podría decir X <= 130. 

También sería correcto decir que X <= 1000 o X <= 1 000 000. 

Técnicamente es cierto (aunque no muy útil). 

De igual manera, un algoritmo simple para imprimir los valores en un array es O(N), así como O(N³) o cualquier tiempo de ejecución mayor que O(N).


2. Big Omega:  

##### Es el concepto equivalente, pero para el límite inferior. 

Imprimir los valores en un array es omega(N), así como omega(log N) y omega(1). 


3. Big Theta: 

##### En el ámbito académico, Big Theta significa tanto Big O como Big Omega. 

Es decir, un algoritmo es Big Theta(N) si es tanto Big O(N) como Big Omega(N). 

##### Big Theta proporciona un límite estricto para el tiempo de ejecución.
 

##### En la industria (y, por lo tanto, en las entrevistas), parece que se han fusionado Big Theta y Big O.

##### El significado de Big O en la industria se acerca más a lo que los academicos se Big Theta.

##### Ya que se consideraría incorrecto describir la impresión de una matriz como O(N^2).

En la industria simplemente diría que es O(N).


##### En el libro se usa Big O como se hace en la industria, intentando siempre ofrecer la descripción más precisa del tiempo de ejecución.


#### 2. Mejor caso, peor caso y caso esperado

##### Podemos describir el tiempo de ejecución de un algoritmo de tres maneras diferentes.

Veámoslo desde la perspectiva del algoritmo Quicksort. 

Este ordenamiento selecciona un elemento aleatorio como "pivote" y luego intercambia valores en el array de forma que los elementos menores que el pivote aparezcan antes que los mayores.

Esto produce una "ordenación parcial"

Luego, ordena recursivamente los lados izquierdo y derecho mediante un proceso similar.

1. Best: 

Si todos los elementos son iguales, quicksort, en promedio, solo recorrerá el array una vez.

Esto es O(N). (De hecho, esto depende ligeramente de la implementación de la ordenación rápida. Sin embargo, existen implementaciones que se ejecutan muy rápidamente en un array ordenado).


2. Worst: 

¿Qué pasa si tenemos muy mala suerte y el pivote es repetidamente el elemento más grande del array?

(De hecho, esto puede suceder fácilmente. Si se elige el pivote como el primer elemento del subarreglo y este se ordena en orden inverso, tendremos esta situación). 

En este caso, nuestra recursión no divide el array por la mitad ni recurre en cada mitad.
 
Simplemente reduce el subarreglo en un elemento. 

Esto degenerará en un tiempo de ejecución O(N^2).


3. Expected: 

##### Por lo general, estas situaciones, maravillosas o terribles, no ocurren. 

Claro, A veces, el pivote será muy bajo o muy alto, pero no se repetirá una y otra vez.

Podemos esperar un tiempo de ejecución de O(N log N).


##### Rara vez hablamos de la complejidad temporal en el mejor caso, porque no es un concepto muy útil. 

Después de todo, podríamos tomar prácticamente cualquier algoritmo, aplicar una entrada a un caso especial y obtener un tiempo 0(1) en el mejor caso.

Para muchos algoritmos (probablemente la mayoría), el peor caso y el caso esperado son iguales. 

Sin embargo, a veces son diferentes, y necesitamos describir ambos tiempos de ejecución.


¿Cuál es la relación entre el mejor/peor caso/esperado y big o/theta/omega?

Es fácil confundir estos conceptos (probablemente porque ambos tienen conceptos de "superior", "inferior" y "exactamente correcto"), pero no existe una relación específica entre ellos.


Los casos mejor, peor y esperado describen el tiempo big o/big theta para entradas o escenarios específicos.

##### Big O, Omega y Theta describen los límites superior, inferior y estrecho del tiempo de ejecución.


### 3. Complejidad Espacial

El tiempo no es lo único que importa en un algoritmo. 

##### También nos puede interesar la cantidad de memoria o espacio que requiere.

Es un concepto paralelo a la complejidad temporal.

##### Si necesitamos crear un array de tamaño n, esto requerirá O(n) de espacio

##### Si necesitamos un array bidimensional de tamaño nxn, esto requerirá O(n^2) de espacio.

El espacio de pila (stack space) en las llamadas recursivas también cuenta. 

Por ejemplo, un código como este ocuparía O(n) de tiempo y O(n) de espacio.

```
int sum(int n) {/*Ex 1.*/
  if (n <= 0) {
    return 0;
  }
  return n + sum(n-1);
}

```

```
sum(4)
   -> sum(3)
     -> sum(2)
       -> sum(l)
         -> sum(0)
```

Cada una de estas llamadas se añade a la pila de llamadas y ocupa memoria real


Sin embargo, que tenga n llamadas en total no significa que ocupe O(n) de espacio. 

Considere la siguiente función, que añade elementos adyacentes entre O y n:

```
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
  
```

Habrá aproximadamente O(n) llamadas a pairSum. 

##### Sin embargo, esas llamadas no existen simultáneamente en la pila de llamadas, por lo que solo necesita O(1) de espacio.


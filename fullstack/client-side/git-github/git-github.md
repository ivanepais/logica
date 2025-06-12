# Control de Version

Las herramientas de control de versiones son una parte esencial de los flujos de trabajo modernos, para realizar copias de seguridad y colaborar en bases de código.


Los VCS son esenciales para el desarrollo de software:

Es raro que trabajes en un proyecto completamente solo, y tan pronto como empiezas a trabajar con otras personas, empiezas a correr el riesgo de entrar en conflicto con el trabajo de cada uno; esto es cuando ambos intentan actualizar la misma pieza de código al mismo tiempo.

Es necesario contar con algún tipo de mecanismo para gestionar los sucesos y ayudar a evitar la pérdida de trabajo como resultado.


Cuando trabaje en un proyecto por su cuenta o con otras personas, querrá poder hacer una copia de seguridad del código en un lugar central, para que no se pierda si su computadora falla.

También querrá poder volver a versiones anteriores si más adelante se descubre un problema.

Es posible que hayas comenzado a hacer esto en tu propio trabajo creando diferentes versiones del mismo archivo, p. myCode.js, myCode_v2.js, myCode_v3.js, myCode_final.js, myCode_really_really_final.js, etc., pero esto es realmente propenso a errores y poco confiable.

Los diferentes miembros del equipo normalmente querrán crear sus propias versiones separadas del código (llamadas ramas en Git), trabajar en una nueva característica en esa versión y luego fusionarla de manera controlada (en GitHub usamos solicitudes de extracción) con el versión maestra cuando hayan terminado con ella.


Los VCS proporcionan herramientas para satisfacer las necesidades anteriores.

Git es un ejemplo de VCS, y GitHub es un sitio web + infraestructura que proporciona un servidor Git además de una serie de herramientas realmente útiles para trabajar con repositorios git individualmente o en equipos, como informar problemas con el código, revisar herramientas y gestionar proyectos.

Características como asignación de tareas y estados de tareas, y más.


Nota: 

Git es en realidad un sistema de control de versiones distribuido, lo que significa que se realiza una copia completa del repositorio que contiene el código base en su computadora (y en la de todos los demás).

Usted realiza cambios en su propia copia y luego envía esos cambios nuevamente al servidor, donde un administrador decidirá si desea fusionar sus cambios con la copia maestra.


Hay otras alternativas como GitLab que puedes probar, y también puedes intentar configurar tu propio servidor Git y usarlo en lugar de GitHub.


## 








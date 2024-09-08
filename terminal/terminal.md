Terminal: 

	bash, git, vim, python, js/ts, node, java/angular, c. 


|| bash

	archivos y directorios:
	mkdir,cd, rm, cp, mv, ls

	texto: 
	cat, less, nano, vim

	Búsqueda: 
	grep, sed, awk

	whoami
	pwd
	ls

	cd /home/usuario/documentos (dir especifico)
	cd .. (dir padre)
	cd ./carpeta1 (dir hijo)
	cd ~/archivos (dir que sigue de user)
	podemos ir uniendo los dir

	mkdir 
	mkdir documentos/proyectos
	mkdir -p vacaciones/2023/fotos

	touch
	touch mi_archivo.txt
	touch documentos/notas.txt

	rmdir (vacios)
	rmdir mi_carpeta
	rmdir documentos/fotos

	rm (contenido)
	rm archivo
	rm -r doc/carpeta1

	xdg-open
	xdg-open archivo / url

	mv origen destino / dir actual/destino
	mv documento.txt /home/usuario/documentos
	mv archivo_viejo.txt archivo_nuevo.txt (renombrar archivo)

	cp origen destino / -r o -R / -i (confirmación)
	cp documento.txt /home/usuario/documentos 
	cp archivo.txt copia.txt (copia y cambia nombre mismo dir)
	cp -r proyecto respaldo/


	ls ver contenido dir
	cd ./carpeta-a-visitar
	cd ../ volver a la anterior
	mkdir nombre-carpeta-nueva
	touch nano/vim/nvim crear archivo. 
	head (lineas texto archivo)
	tail 
	date


	redirigir la salida estandar: 

	cat (mostrar contenido salida standar)
	cat archivo.txt (completo)

	less archivo (visualización y navegación)

	echo (mostrar o redirigir en salida)

	pipi (salida de un comando para otro)

	diff archivo 1 archivo 2

	find (Buscar archivos y directorios segun criterio)
	find . -name archivo.txt 

	grep (busca patrones en archivos o salida estandar)
	grep "patron" archivo.txt
	grep "patron" archivo1.txt archivo2.txt.

	awk (extrae datos)


	red: 
	who (info usuarios conectados al sistema)
	who -q (cantidad usuarios)
	netstat (info conex red)
	netstat -tuln (conexiones activas)



|| git

	git init

	git status

	git add nombre_archivo

	git log

	git diff

	ls

	git add . (mete todos los cambios de todos los archivos)

	(untracked) no git add, no figura en el repo/direc/proyect 
	(cambios locales de prueba, descarte, para nosotros, para no incluir, ignorar.)

	git commit

	git commit -m

	revertir commit para incluir cambios olvidados: 
	git add archivo
	git commit --amend

	stage:
	git checkout -- archivo (antes git add, untracked)

	despues de git add:
	git reset HEAD nombre_de_archivo
	(saca los cambios de stage)
	git checkout -- archivo 

	git log --oneline

	git log --oneline | cat

	7 números del hash

	git reset codigo_commit

	git reset --hard 7numero_commit

	git reset --soft 7numero_commit

	git revert

	git diff numero_commit1 numero_commit2

	git log --onelne --decorate

	git diff HEAD~1 (un commit antes)
	git diff HEAD~2 (dos commit antes)

	git diff HEAD~1 HEAD 

	git revert numero_commit

	git revert HEAD

	git revert --no commit HEAD

	git revert --no commit HEAD~1

	git revert --continue

	(mensaje sobre cuales commits quitamos)

	git log --oneline

	git log --oneline --graph
	(commits anterior-sucesor)

	git log --oneline --graph --decorate (punteros/rama)

	git branch (lista ramas)

	git branch nombre_rama

	git branch/git status (muestra ramas)

	git checkout nombre_rama (cambio rama)

	git checkout -b nombre_rama (nueva rama y cambiar directo)

	git branch -m nombre_rama nuevo_nombre_rama
			
	git branch -d nombre_rama, eliminamos la rama

	git branch -h (lista comandos para branch)


	git merge: 

	git add archivo // git add . 
	git commit
	(mensaje)
	git log --oneline --decorate 

	git checkout feature
	o
	git checkout -b feature

	git add archivo
	git commit

	git checkout master 

	git merge feature

	git checkout -b new-feature (desde master)

	git add archivo

	git commit 

	(mensaje)

	git log --oneline --decorate --all --graph

	1) fusionamos donde esta head
	fast foward

	2) fusionamos rama intermedia 
	recursividad, nuevo commit 

	3) creamos dos ramas desde master para realizar cambios 
	dejamos intacto master
	eliminamos las marcas de git y dejamos el contenido correcto. 

	git add archivo

	git commit 

	(mensaje) 


	escenarios:  
	1) master/main destino limpio
	fast foward

	2) origen y destino con commits
	recursividad

	3)conflicto cuando dos personas modifiquen. 
	En ramas distintas la misma linea del mismo archivo. 
	abrir archivo y eliminar contendio
	 
	4) misma linea y contenido
	llegamos a una solucion comun (elegimos un commit, u otro, o uno que incluya los dos)
	o git merge --abort
	y se quedara con el ultimo merge master y ramaXyz

	siempre comunicado con el equipo. 


	git alias

	tags


	git stash

	modificaciones
			
	git add archivo
			
	git status (opcional)
			
	git stash 
			
	git status


	modificaciones

	git stash save "mensaje"


	remote workflow: 

	crear repo en servicio alojamiento

	git remote add origin https-dir

	modificaciones

	git add archivo / git add . 

	git commit 

	git push origin master 


	git clone https-dir 

	(modificaciones)

	git add archivo / git add . 
			
	git commit 
			
	(mensaje)
			
	git push origin master 


	git pull origin master

	va a hacer dos operaciones fetch y merge


	o podemos hacer: 
	git fetch siempre antes de hacer commits 
	git fetch origin master
	git merge origin master


	o podemo hacer: 
	git pull --rebase




|| vim

	entrar a vim: desde terminal nvim o vim
	salir de vim: :q (necesitamos guardar), :q!(cerrar sin guardar)

	volver al archivo: fg
	esto despues de apretar ctrl + z

	modo normal: pantalla inicio
	modo inserción: i, empezar a escribir 
	salir insersión: escape (sale de cualquier modo) o ctrl + c; :q o !q no funciona

	navegacion: hjkl

	el flujo de trabajo sería: i/a, escribir, escape/ctrl+c, editar/movernos hjkl y i/a

	0: va al principio de la linea
	$: va al final de la linea. 
	^(alt gr+{): lleva al primer caracter que no tiene espacio en blanco en una linea. va a ir al comienzo sin caracter en blanco, otra forma de ir al principio linea. 

	0: va al principio de la linea
	$: va al final de la linea. 
	^(alt gr+{): lleva al primer caracter que no tiene espacio en blanco en una linea. va a ir al comienzo sin caracter en blanco, otra forma de ir al principio linea. 


	de izquierda a derecha, palabra por palabra: 
	w: 
	fuera de inserción, palabra a la derecha; deja el cursor al principio
	e: avanzar al final de la palabra, lleva el cursor ahí. a la derecha

	b: ir al principio de la palabra, hacia la izq. 
	ge: ir al ultimo caracter, hacia la izq. 

	g: movimiento compuesto


	Repetir movimientos:  
	con un numero y una combinacion motion nos movemos esa cantidad
	ej: 7h


	guardar archivo: 
	:w salvar 
	:wq salvar y salir 



|| python


|| js/ts


|| node


|| react


|| java/angular


|| c








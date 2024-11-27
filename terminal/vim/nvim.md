# Install

	backup folders:
	required
	```
	mv ~/.config/nvim{,.bak}
	
	```
	
	optional but recommended
	
	```
	mv ~/.local/share/nvim{,.bak}
	mv ~/.local/state/nvim{,.bak}
	mv ~/.cache/nvim{,.bak}
	
	```

	delete folders:
	Linux / MacOS (unix)
	
	```
	rm -rf ~/.config/nvim
	rm -rf ~/.local/state/nvim
	rm -rf ~/.local/share/nvim
	
	```
	
	delete git folder:
	Remove the .git folder, so you can add it to your own repo later
	
	```
	rm -rf ~/.config/nvim/.git
	
	```



# Documentación 
	
	1. Base46: 
	ui plugin con 68 temas

	usos:
	highlight groups are lazyloaded i.e. 
	you load them when needed
	example : dofile(vim.g.base46_cache .. "cmp")

	you can see that the chadrc file's (user config)
	UI related options reload on the fly

	2. Theme switcher: 
	base46 plugin + plenary.nvim 

	3. Statusline

	4. tabufline
	vim buffers from all tabs will be shown in
	 every tab!
	like workspaces in linux/windows

	5. term
	run commands in Neovim terminal
	Each window can have its own 
	cmd/size/cmd/ highlight group
	Using it with our telescope picker 
	( :Telescope terms ) to unhide terminal buffers 
	leader + pt .

	ui plugin docs
	/nvchad_ui

	6. dash
	run Nvdash
	disabled on startup, check the nvconfig.lua
	for its syntax and override it from chadrc.

	7. NvCheatsheet
	Auto-generated mappings cheatsheet module
	NvCheatsheet
	mapping leader + ch

	8. colorify: 

	9. Lsp Signature:
	uses vim.lsp.buf.signature_help
	autocmds.

	10. lsp variable renamer:
	renaming var 

	11. Nvim-cmp styling
	nvim-cmp 
	completion plugin for Neovim coded in Lua

	12. Automating Mason installation
	MasonInstallAll ahora capturará todas las 
	herramientas Mason de su configuración
	Los complementos compatibles son
	lspconfig, nvim-lint, conform.nvim

	Entonces, por ejemplo, si tienes lspconfig como
	require("lspconfig").html.setup{}
	require("lspconfig").clangd.setup{}

	ejecutar MasonInstallAll instalará 
	ambos paquetes de Mason
	consulte :h nvui.mason para más info. 


	General Neovim plugins:
	complementos no están relacionados con nvchad
	modificamos un poco y asignamos un tema 
	a los relacionados con la interfaz de usuario

	1. Telescope.nvim
	fuzzy finder de listas

	2. Nvim-tree.lua
	is a file explorer tree for Neovim written in Lua.

	es solo el aspecto cmp en el tema everblush, 
	¡hay más 57 temas! ¡Puede ocultar iconos de cmp,
	cmpkind txt, etc. desde la configuración 
	de usuario (chadrc)!

	3. Auto-completion & LSP
	nvim-lspconfig se usa junto con cmp
	para completition 

	and luasnip + friendly-snippets for snippet
	 completion

	4. Other plugins

	lazy.nvim - A modern plugin manager for Neovim
	whichkey.nvim - Create key bindings that stick
	nvim-colorizer.lua - Fastest Neovim colorizer, hex colors, hsl codes and much more.
	nvim-treesitter - Nvim Treesitter configurations and abstraction layer, we use it for syntax highlighting & auto-indenting
	blankline - Indent guides for Neovim i.e indentline plugin
	gitsigns.nvim - Git integration for buffers
	nvim-autopairs
	mason.nvim - Portable package manager for Neovim that runs everywhere Neovim runs
	Easily install and manage LSP servers, DAP servers, linters, and formatters.
	conform.nvim - Lightweight yet powerful formatter plugin for Neovim

	preguntas frecuentes: 
	Syntax highlighting not working
	Make sure you have installed the treesitter 
	parser for the language i.e TSInstall lua.

	CursorLine not showing
	We set it to only number by default, 
	to have cursorline highlight shown, add:
	vim.o.cursorlineopt = "both"

# Plugins 

	Nvchad: 
	main repo dev
	contains all the plugins, options, mappings, autocmds
	all modules in /nvchad

	Config nvchad como plugin/complemento
	se utiliza como base  
	importar modulos con: require("nvchad.options")

	configure ui & base46 plugin
	structure of nvconfig.lua
	config's /lua folder

	2. Chadrc.lua:
	file configure ui & base46 plugin
	contiene la estructura nvconfig.lua

	3. lazy loading 
	lazy.nvim plugin specs

	4. adm plugins 
	default plugins is lazy = true 
	leer lazy doc 

	plugins/anyname.lua 

	5. lsp server
	lsp config reposotory 
	nvim-lspconfig 

	config.md para ver si el lsp del lenguaje
	está presente

	Plugin table
	configs/lspconfig.lua

	6. mason 
	despues de instalar los binarios 
	configurarlos con LSP 
	conform.nvim, nvim-lint, nvim-dap

	7. mapping: 
	uses vim.keymap.set by default, 
	check :h vim.keymap.set for detailed docs.

	8. Luasnip
	plugin for handling snippets
	extend or add your own snippets so read 
	luasnip docs

	9. ui plugins 
	:h nvui

	10. themes
	:h nvui.base46 



# Configuración 
	
	.git
	.github
	.lua:
	 core: principal/poco modificable
	  Tiene subcarpeta: 
	   bootstrap.lua
	   default_config.lua
	   init.lua: 
		ej: opt.relativenumbers = true
	   mapping.lua
	   utils.lua
	 
	 custom: para añadir servers con mason
	  tiene subcarpeta.
	   configs
		lspconfig.lua: aquí añadimos los servers 
		con :mason opcion numero 2 podemos instalar 
		uno a uno los server 
		Pero en este archivo podemos configuarar varios 
		Los nombres los sacamos de 
		nvim-lspconfig/doc/server_configurations.md
		
		Despues vamos a plugins/configs/mason.lua 
		(carpeta princial)
		en la linea local_options = {ensure_installed}
		
		despues con MasonInstallAll los instalamos 
		
		Con mason tambien podemos instalar formatter 
		pero lo debemos configurar. 

		en lua/plugin/config/treesitter (manejador formato)
		tambien tiene la linea local_options = {ensure_installed}
	  

	   chadrc.lua
	   mapping.lua
	   plugins.lua
	 plugins:
	  configs: tiene carpeta de los plugin.lua
	   cada uno con su carpeta especifica 
	  
	  lspconfig.lua: 
	  
	  mason:
	   con lspcongfig y mason configuramos los servers, 
	   formatters, etc. 
	  
	  init.lu
	.gitignore
	.styleua.toml
	init.lua


NvChad keys: 
	
	:checkhealth
	
	n (normal), i(insert), v(visual)

	<C> -> Ctrl
	<leader> -> Space
	<A> -> alt
	<S> -> shift

	Tab nos movemos por pestaña archivo
	
	Terminal: espacio + h
	
	
	:h nvui
	
	nvconfig.lua | /lua
	 
	lazy.nvim | default plugins 
	lazy.nvim plugins specs
	lazy doc 
	plugins/name.lua
	 
	nvim-lspconfig
	configs.md (list of lsp)
	Plugin table
	configs/lspconfig.lua
	 
	mappings.lua
	vim.keymap.set | :h vim.keymap.set
	 
	luasnip | friendly-snippets
	luasnip docs
	 
	ui plugins
	:h nvui
	 
	theming
	:h nvui.base46
	 
	:Nvdash 
	:NvCheatsheet o space+ch 
	
	Lsp Signature
	Lsp Variable Renamer
	Nvim-cmp styling
	
	Mason
	lspconfig, nvim-lint, conform.nvim
	h nvui.mason for
	
	Telescope.nvim
	Nvim-tree.lua
	
	Auto-completion & LSP
	nvim-lspconfig 
	luasnip + friendly-snippets 
	
	nvim-treesitter
	Nvim Treesitter configurations and abstraction layer,
	we use it for syntax highlighting & auto-indenting.
	
	gitsigns.nvim - Git integration for buffers
	nvim-autopairs
	conform.nvim - Lightweight yet powerful formatter plugin for Neovim
	
	
# Lua Syntax
	
	// intro 
	
	```
	-- comment
	print("Hi") -- comment

	--[[
	 multi-line 
	 comment
	]]
	
	```

	// vars 
	
	```
	local x = 10 -- number
	local name = "sid" -- string
	local isAlive = true -- boolean
	local a = nil --no value or invalid value

	-- increment in numbers
	local n = 1
	n = n + 1
	print(n) -- 2
	
	-- strings
	-- Concatenate strings
	local phrase = "I am"
	local name = "Sid"

	print(phrase .. " " .. name) -- I am Sid
	print("I am " .. "Sid")
	
	```

	// Comparison Operators
	
	 == equal
	 < less than
	 > greater than
	 <= less than or equal to
	 >= greater than or equal to
	 ~= not equal


	// Conditional Statements
	
	```
	-- Number comparisons
	local age = 10

	if age > 18 then
	  print("over 18") -- this will not be executed
	end

	-- elseif and else
	age = 20

	if age > 18 then
	  print("over 18")
	elseif age == 18 then
	  print("18 huh")
	else
	  print("kiddo")
	end

	-- Boolean comparison
	local isAlive = true

	if isAlive then
		print("Be grateful!")
	end

	-- String comparisons
	local name = "sid"

	if name ~= "sid" then
	  print("not sid")
	end
	
	```


	// Combining Statements
	
	```
	local age = 22

	if age == 10 and x > 0 then -- both should be true
	  print("kiddo!")
	elseif x == 18 or x > 18 then -- 1 or more are true
	  print("over 18")
	end

	-- result: over 18
	
	```
	
	
	// Invert value 
	
	```
	local isAlive = true

	if not isAlive then
	  print(" ye ded!")
	end
	
	```

	// Functions 
	
	```
	local function print_num(a)
	  print(a)
	end

	-- or

	local print_num = function(a)
	  print(a)
	end

	print_num(5) -- prints 5 

	-- multiple parameters
	function sum(a, b)
	  return a + b
	end
	
	```
	
	// Scope
	Variables have different scopes. 
	Once the end of the scope is reached, 
	the values in that scope are no longer accessible
	
	```
	function foo()
	  local n = 10
	end

	print(n) -- nil , n isn't accessible outside foo()
	
	```
	
	
	// Loops
	Different ways to make a loop
	
	```
	while:
	local i = 1

	while i <= 3 do
	   print("hi")
	   i = i + 1
	end

	for: 
	for i = 1, 3 do
	   print("hi")
	end
	-- Both print "hi" 3 times
	
	```
	
	
	//Tables
	Tables can be used to store complex data.
	Types of tables: arrays (lists) and dicts (key,value)

	Arrays:
	Items within these can be accessed by "index".
	
	```
	local colors = { "red", "green", "blue" }

	print(colors[1]) -- red

	-- Different ways to loop through lists
	-- #colors is the length of the table, #tablename is the syntax

	for i = 1, #colors do
	  print(colors[i])
	end

	-- ipairs 
	for index, value in ipairs(colors) do
	   print(colors[index])
	   -- or
	   print(value)
	end

	-- If you dont use index or value here then you can replace it with _ 
	for _, value in ipairs(colors) do
	   print(value)
	end
	
	```
	
	
	//Dictionaries
	These contain keys and values:
	
	```
	local info = { 
	   name = "sid",
	   age = 20,
	   isAlive = true
	}

	-- both print sid
	print(info["name"])
	print(info.name)

	-- Loop by pairs
	for key, value in pairs(info) do
	   print(key .. " " .. tostring(value))
	end

	-- prints name sid, age 20 etc

	// Nested tables
	-- Nested lists
	local data = {
		{ "sid", 20 },
		{ "tim", 90 },
	}

	for i = 1, #data do
	  print(data[i][1] .. " is " .. data[i][2] .. " years old")
	end

	-- Nested dictionaries
	local data = {
		sid = { age = 20 },
		tim = { age = 90 },
	}
	
	```


	// Modules
	
	```
	Import code from other files
	require("path")

	-- for example in ~/.config/nvim/lua , all dirs and files are accessable via require
	-- Do note that all files in that lua folder are in path!
	-- ~/.config/nvim/lua/abc.lua 
	-- ~/.config/nvim/lua/abc/init.lua

	 require "abc"

	-- both do the same thing
	
	```
	
	
	// vim.tbl_deep_extend
	función neovim que se utiliza para fusionar tablas
	y sus valores de forma recursiva.

	La mayoría de los complementos lo usan para 
	fusionar tablas de configuración.
	
	```
	-- table 1
	local person = {
		name = "joe",
		age = 19,
		skills = {"python", "html"},
	}

	-- table 2
	local someone = {
		name = "siduck",
		skills = {"js", "lua"},
	}

	-- "force" will overwrite equal values from the someone table over the person table
	local result = vim.tbl_deep_extend("force", person, someone)

	-- result : 
	{
		name = "siduck",
		age = 19,
		skills = {"js", "lua"},
	}

	-- The list tables wont merge cuz they dont have keys 
	
	```
	

# Nvim 

	Guía: 
	
		1. commands, options, mapping, autocommands. 

		2. plugins, dependencies, keymaps, lsp, lsp keymap,
		lsp keybinds,  lua lsp, lsp formatting
		autocomplete, completion engines
		MiniEnvm, Minisurround, treesitter, 

		3. lua config, colorschemes, autopairs automati
		comments, gitsings, buffers, ToggleTerm

		4. debuggers, unit testing, automati uni test
		 
	
	Modos de operación: 
		
		Como Vim, Nvim tiene varios modos:

		Modo Normal: 
			
			Para navegación y comandos (presiona Esc para entrar).
			
			Es el modo por defecto y sirve para navegar y realizar comandos de edición. 
			
			Aquí, no se puede escribir directamente en el texto, sino que se utilizan teclas para mover el cursor y manipular texto (borrar, copiar, pegar, etc.).

			Ejemplo: dd borra una línea en Modo Normal.
			
			
		Modo de Inserción: 
		
			Para escribir texto (presiona i en Modo Normal).
			
		
		Modo Visual: 
			
			Para seleccionar texto (presiona v en Modo Normal).
			
			Hay sub-modos como Visual en Línea (V) y Visual por Bloques (Ctrl + v) para selecciones más específicas.

			Ejemplo: Presiona v y mueve el cursor para seleccionar texto.
	
	
	Comandos: 
		
		Modo de Comando: 
		
			Se accede presionando : desde el Modo Normal. Aquí puedes ejecutar comandos específicos, como guardar (:w), salir (:q), o buscar y reemplazar.		
		
		:q – Salir.
		
		:w – Guardar.
		
		:wq o :x – Guardar y salir.
		
		u – Deshacer.
		
		Ctrl + r – Rehacer.
		
	
	Movimiento: 
		
		Moverse entre líneas: 
			
			k (arriba), j (abajo), h (izquierda), l (derecha).
		
		Saltar palabras: 
			
			w para avanzar una palabra, b para retroceder.
		
		Inicio y fin de línea: 
			
			0 (inicio), $ (fin).
		
		Buscar: 
			
			/palabra para buscar hacia abajo y ?palabra hacia arriba. Usa n para el siguiente resultado
	
	
	Comandos:
		
		:sp <archivo>
			
			Abre un archivo en una ventana dividida horizontalmente.
		
		:vsp <archivo>
			
			Abre un archivo en una ventana dividida verticalmente.
		
		Ctrl + w seguido de h, j, k, l
			
			Moverse entre divisiones.
		
	Avanzados:

		gg: 
			
			para ir al inicio del archivo 
		
		G:
		
			para ir al final.
		
		
		ciw, diw, yiw:
			
			para cambiar, borrar y copiar palabras.


		{ y }
			
			Saltar entre párrafos o bloques de código.
	
	
	Edición:
		
		Copiar, Cortar y Pegar:
			
			y (yank) copia, d (delete) corta y p pega.
			
			Ejemplos: yy copia una línea, dd borra una línea, p pega después del cursor.
			
			
		Cambios en texto:
			
			cw
				
				Cambia una palabra (borrar y entrar en Modo de Inserción).
			
			ci"
				
				Cambia el contenido dentro de comillas.
			
			
			Deshacer y Rehacer: 
				
				u deshace, y Ctrl + r rehace.
		
				
	Buffers, Ventanas y Pestañas:
		
		Nvim trabaja con estos tres elementos en lugar de "archivos abiertos" como en otros editores
		
		
		Buffers: 
			
			Cada archivo abierto se carga en un "buffer". 
			
			Puedes cambiar entre buffers sin cerrar los archivos.
			
			Comandos:
				
				:ls para ver los buffers
				
				:b <número> para cambiar a un buffer específico.
				
		
		Ventanas: 
		
			Son divisiones en la pantalla que muestran diferentes buffers o vistas del mismo buffer
			
			Comandos:
					
				:sp para dividir en horizontal
				
				:vsp para dividir en vertical.
				
		
		Pestañas:	
		
			Puedes abrir diferentes pestañas que contengan varias ventanas y buffers, lo que es útil para organizar proyectos grandes.
			
			Comandos:
				
				:tabnew <archivo> para abrir un nuevo archivo en una pestaña
				
				:tabnext para moverte entre pestañas.
	
	
	Buscar y Reemplazar:
			
		Buscar:
			
			/ para buscar hacia abajo
			
			? para buscar hacia arriba en el archivo
			
			n te lleva al siguiente resultado
			
			N al anterior
		
			
		Reemplazar:
			
			Para reemplazos rápidos :s/antiguo/nuevo/
			
			en todo el archivo :%s/antiguo/nuevo/g
			
			
	Macros y Atajos de Teclado:
		
		Macros: 
		
			Permiten grabar secuencias de comandos para repetirlas
		
			Graba con q <registro>
		
			Ejecuta la macro con @<registro>
		
		
		Mapeos personalizados:
			
			Puedes asignar combinaciones de teclas personalizadas en tu configuración para atajos de uso frecuente.
		
		
	Configuración y Plugins:	
		
		La configuración de Neovim se guarda en el archivo init.vim
		
		Permite modificar opciones y cargar plugins para mejorar la experiencia.
		
		
		Básica:
			
			set number para mostrar números de línea
			
			set relativenumber para mostrar números relativos.
			
			
		Plugins:
				
			Usando un gestor como vim-plug
			
			Instalar plugins que expanden las funciones de Neovim
			
			Como la navegación de archivos (NERDTree) o la búsqueda avanzada (Telescope).


	Options: 
		
		Son configuraciones que permiten ajustar el comportamiento del editor para adaptarlo a tus preferencias
		
		Puedes definir estas opciones de forma temporal en la sesión actual, o de manera permanente en el archivo de configuración init.vim.
		
		
		Opciones Booleanas: 
			
			Se activan o desactivan (por ejemplo, set number para mostrar números de línea). 
			
			No requieren valor, solo se activan o desactivan.
		
		
		Opciones de Cadena: 
			
			Permiten asignar texto o rutas (por ejemplo, set guifont=FiraCode para cambiar la fuente en GUI).
	
	
		Opciones Numéricas: 
			
			Configuran un valor numérico (por ejemplo, set shiftwidth=4 para definir el tamaño de la sangría).
	
	
		Opciones Comunes:
			
			Interfaz y Apariencia:
				
				number / nonumber: Muestra (number) o esconde (nonumber) los números de línea. Ejemplo:
					
					```
					set number
					
					```
				
				relativenumber: Muestra números relativos, lo que facilita saber cuántas líneas hay entre el cursor y una línea específica. Esto es útil para navegar rápidamente.
					
					```
					set relativenumber
					
					```
				
				cursorline: Resalta la línea donde está el cursor. Ayuda a localizar la posición del cursor rápidamente
					
					```
					set cursorline
					
					```
				
				wrap / nowrap: Controla si el texto se ajusta automáticamente al ancho de la ventana (wrap) o si se desplaza horizontalmente (nowrap).
				
					```
					set nowrap
					
					```
			
			Espaciado y Sangría

				tabstop: Define el número de espacios que representa una tabulación. Afecta a cómo se muestra un tabulador, pero no necesariamente a cómo se inserta en el archivo
				
					```
					set tabstop=4
				
					```
				
				shiftwidth: Controla la cantidad de espacios para sangrías automáticas, como al usar >> o al presionar Enter después de una línea de código.
					
					```
					set shiftwidth=4
					
					```
				
				expandtab: Convierte el tabulador en espacios. Muy útil en proyectos donde prefieren espacios en lugar de tabulaciones.
				
					```
					set expandtab
					
					```	
				
				autoindent: Copia la sangría de la línea anterior para una nueva línea. Esto ayuda a mantener una estructura de código coherente.
					
					```
					set autoindent
					
					```
				
	Leader: 
	
	
	Dependencias: 
	
	
	Keymaps:
	
	
	Autocommands:
		
		Son reglas automáticas que permiten ejecutar comandos específicos en respuesta a ciertos eventos
		
		Por ejemplo, puedes configurar autocomandos para que Neovim realice tareas automáticamente al abrir un archivo, cambiar de buffer o guardar cambios.
		
		Esto es especialmente útil para automatizar configuraciones, personalizar el comportamiento de Neovim y mejorar la productividad.
		
		
		Los autocommands ejecutan comandos en función de eventos específicos, como cuando:

			Abres un archivo (BufRead)
			
			Guardas un archivo (BufWritePost)
			
			Sales de Neovim (VimLeave)
			
			Cambias entre ventanas (WinEnter)
    
    
		Grupos de Autocomandos:
			
			Los grupos de autocomandos (augroup) permiten agrupar varios autocomandos relacionados y gestionarlos de manera conjunta.
			
			Puedes crear un grupo con augroup nombre_del_grupo y cerrarlo con augroup END.
			
			Esto es útil para desactivar o modificar conjuntos de autocomandos sin afectar otros autocomandos
			
			```
			augroup MiGrupo
			  autocmd!
			  autocmd BufRead,BufNewFile *.py setlocal tabstop=4 shiftwidth=4 expandtab
			augroup END

			```
			
			En este ejemplo, el grupo MiGrupo aplica configuraciones específicas al abrir archivos .py (Python).
			
			
		Sintaxis:
		
			En Vimscript
			
			```
			autocmd Evento Patron Comando

			```
			
			Evento: 
				
				El evento que desencadena el autocomando (como BufRead, BufWrite, VimEnter, etc.).
			
			Patrón: 
				
				Define el tipo de archivo o situación en la que el autocomando se activa (como *.py para archivos Python).
			
			Comando: 
				
				El comando que se ejecuta cuando el evento ocurre y el patrón coincide.

			
			```
			autocmd BufWritePost *.html !prettier --write %

			```
			
			Este autocomando aplica prettier automáticamente cada vez que guardas un archivo HTML.	
		
		
		Los autocomandos en Neovim son una poderosa herramienta para automatizar tareas repetitivas y personalizar el comportamiento del editor en diferentes situaciones. 
		
		Al configurar autocomandos en Vimscript o Lua, puedes adaptar Neovim a tus necesidades específicas, mejorando la eficiencia y la experiencia de edición.
		
		
	Buffers: 
	
		Es una representación en memoria de un archivo abierto, un texto sin guardar o cualquier contenido que estés editando
		
		Permiten trabajar con varios archivos a la vez sin necesidad de abrir múltiples ventanas del editor. Entender cómo funcionan es clave para aprovechar el poder de Neovim en un entorno de edición avanzado.
		
	
		Neovim es esencialmente una copia de un archivo (o contenido temporal) que estás editando en el editor. 
		
		Cuando abres un archivo, Neovim crea un buffer para ese archivo.
		
		Puedes tener múltiples buffers abiertos a la vez, pero solo uno estará activo en tu ventana actual.
		
		
		Buffer Abierto: 	
		
			Es un archivo cargado en la memoria que puede estar visible en una ventana.
		
		
		Buffer Oculto: 
			
			Es un buffer abierto en Neovim, pero que no se muestra en una ventana. 
			
			Esto permite mantener el contenido de varios archivos en memoria sin que todos estén visibles.
		
		
		Buffer Modificado:
			
			Un buffer en el que has hecho cambios sin guardar.
		
		
		Buffer Sin Modificar:
			
			Un buffer que no ha cambiado desde la última vez que se guardó.

		
		Comandos Básicos:	
			
			Abrir un Nuevo Buffer: 
			
				Puedes abrir un archivo en un nuevo buffer usando 
				
				```
				:e nombre_del_archivo.
				
				```
			
			Listar Buffers Activos: 
				
				Usa :ls o :buffers para ver todos los buffers actualmente abiertos y sus IDs.
			
			
			Navegar entre Buffers:

				:bnext (:bn): Mueve al siguiente buffer en la lista.
				
				:bprevious (:bp): Mueve al buffer anterior en la lista.
				
				:buffer [n] (:b [n]): Cambia al buffer con el ID [n] (por ejemplo, :b 2).
				
    
			Cerrar un Buffer:

				:bd (:bdelete): Cierra el buffer actual sin cerrar Neovim. Esto no borra el archivo del disco, solo lo quita de la memoria.
				
				:bwipeout: Borra el buffer y sus datos asociados. Úsalo si quieres asegurarte de liberar la memoria por completo.
		

		Config buffers: 
			
			Puedes agregar configuraciones personalizadas en tu archivo de configuración init.vim o init.lua para gestionar cómo Neovim maneja los buffers.
			
			```
			-- Mantener los buffers ocultos cuando cambias de archivo
			vim.o.hidden = true

			```
		
		Ventanas y Buffers: 
			
			Un Buffer es el contenido de un archivo en memoria.
			
			Una Ventana es una vista de un buffer. Puedes tener múltiples ventanas abiertas con vistas al mismo buffer o a buffers diferentes.
			
			Ejemplo: Si tienes dos ventanas abiertas y ambas muestran el mismo archivo, estás viendo el mismo buffer desde dos ventanas distintas
			
		
		Uso Avanzado de Buffers con Plugins:
				
			Plugins como Telescope, fzf.vim, o barbar.nvim pueden ayudarte a manejar y navegar entre buffers de forma más visual e intuitiva.
			
			Telescope: Permite buscar y seleccionar buffers fácilmente.
			
			```
			require('telescope.builtin').buffers()
			
			```
			
			Esto abre una ventana de búsqueda interactiva que muestra todos los buffers abiertos.
			
			
			barbar.nvim: 
				
				Añade una barra de pestañas para mostrar y navegar entre buffers visualmente.
		
	
	Combinaciones Modo Normal: 
		
		Navegación Básica:

			h, j, k, l: Mover el cursor a la izquierda, abajo, arriba y derecha respectivamente.
			0 o ^: Ir al inicio de la línea.
			$: Ir al final de la línea.
			w: Mover al inicio de la siguiente palabra.
			b: Mover al inicio de la palabra anterior.
			e: Mover al final de la palabra actual.
			gg: Ir al inicio del archivo.
			G: Ir al final del archivo.
			:n: Ir a la línea número n (:10 lleva a la línea 10).
			%: Ir al par de un paréntesis, corchete o llave.
		
		
		Edición de Texto: 
			
			x: Eliminar el carácter actual.
			dd: Eliminar la línea actual.
			yy: Copiar (yankear) la línea actual.
			p: Pegar el contenido copiado después del cursor.
			P: Pegar el contenido copiado antes del cursor.
			u: Deshacer la última acción.
			Ctrl + r: Rehacer la última acción deshecha.
			~: Cambiar la capitalización del carácter bajo el cursor.

		
		Seleccionar y Modificar Texto:

			v: Entrar en Modo Visual (selección de texto).
			V: Selección de línea completa en Modo Visual.
			y: Yank (copiar) el texto seleccionado.
			d: Borrar el texto seleccionado.
			c: Cambiar el texto seleccionado (borrar e iniciar en modo de inserción).
			> y <: Aumentar o disminuir la sangría en la selección visual.
			gw o gq: Reajustar el ancho del párrafo seleccionado
		
		
		Búsqueda y Reemplazo

			/texto: Buscar texto hacia adelante en el archivo.
			?texto: Buscar texto hacia atrás en el archivo.
			n: Ir al siguiente resultado de búsqueda.
			N: Ir al resultado anterior de búsqueda.
			*: Buscar la palabra bajo el cursor hacia adelante.
			#: Buscar la palabra bajo el cursor hacia atrás.
			:%s/texto/reemplazo/g: Reemplazar todas las ocurrencias de texto con reemplazo en el archivo actual.
    
		
		Divisiones de Ventana y Navegación entre Ellas

			:split o :sp: Dividir la ventana horizontalmente.
			:vsplit o :vsp: Dividir la ventana verticalmente.
			Ctrl + w h: Moverse a la ventana izquierda.
			Ctrl + w l: Moverse a la ventana derecha.
			Ctrl + w j: Moverse a la ventana de abajo.
			Ctrl + w k: Moverse a la ventana de arriba.
			Ctrl + w c: Cerrar la ventana actual.
			Ctrl + w o: Cerrar todas las ventanas excepto la actual
		
		
		Manejo de Buffers (Archivos en Memoria)

			:e nombre_archivo: Abrir un archivo en un nuevo buffer.
			:bnext (:bn): Cambiar al siguiente buffer.
			:bprevious (:bp): Cambiar al buffer anterior.
			:bdelete (:bd): Cerrar el buffer actual.
			:ls: Listar todos los buffers abiertos.
			:buffer [n]: Cambiar al buffer con el número [n] (obtenido en :ls).
			
		
		Comandos Relacionados con Pestañas

			:tabnew nombre_archivo: Abrir un archivo en una nueva pestaña.
			:tabnext (:tn): Cambiar a la siguiente pestaña.
			:tabprevious (:tp): Cambiar a la pestaña anterior.
			:tabclose: Cerrar la pestaña actual.
			:tabmove [n]: Mover la pestaña actual a la posición [n].
		
	
		Otros Comandos Útiles

			:w: Guardar el archivo actual.
			:q: Cerrar el archivo actual.
			:wq: Guardar y salir del archivo actual.
			:qa: Salir de todos los archivos.
			ZZ: Guardar y salir rápidamente del archivo actual.
			ZQ: Salir sin guardar.
			:noh: Limpiar los resaltados de búsqueda.
			:!comando: Ejecutar un comando del sistema operativo desde Neovim (:!ls, :!python script.py, etc.).


		Combinaciones Avanzadas para Edición Rápida

			ciw: Cambiar la palabra bajo el cursor.
			diw: Eliminar la palabra bajo el cursor.
			ci( o ci[: Cambiar el texto dentro de paréntesis o corchetes.
			c$: Cambiar desde el cursor hasta el final de la línea.
			d0: Eliminar desde el cursor hasta el inicio de la línea.
			gg=G: Auto-indentado de todo el archivo.
			yyp: Duplica la línea actual
			
	
		Entrar en Modo Insertar

			i: Entrar en Modo Insertar antes del cursor.
			I: Entrar en Modo Insertar al inicio de la línea.
			a: Entrar en Modo Insertar después del cursor.
			A: Entrar en Modo Insertar al final de la línea.
			o: Abrir una nueva línea debajo de la actual y entrar en Modo Insertar.
			O: Abrir una nueva línea arriba de la actual y entrar en Modo Insertar.


		Salir del Modo Insertar

			Esc: Salir del Modo Insertar y volver al Modo Normal.
			Ctrl + [: Otra opción para salir del Modo Insertar (equivalente a Esc).
			Ctrl + c: También funciona para salir rápidamente del Modo Insertar.


		Comandos de Edición Rápida en Modo Insertar

			Ctrl + h: Eliminar el carácter a la izquierda del cursor (como Backspace).
			Ctrl + w: Eliminar la palabra a la izquierda del cursor.
			Ctrl + u: Eliminar desde el cursor hasta el inicio de la línea.
			Ctrl + t: Aumentar la sangría en una tabulación.
			Ctrl + d: Disminuir la sangría en una tabulación.


		Comandos de Movimiento en Modo Insertar

			Aunque el Modo Normal es mejor para la navegación, algunos comandos de movimiento funcionan en el Modo Insertar:

			Ctrl + o: Ejecuta un solo comando en Modo Normal y vuelve automáticamente al Modo Insertar después.
				Ejemplo: Ctrl + o A mueve el cursor al final de la línea sin salir completamente del Modo Insertar.
			Ctrl + a: Mueve el cursor al inicio de la línea.
			Ctrl + e: Mueve el cursor al final de la línea.


		Control de Mayúsculas y Autocompletado

			Ctrl + n: Sugerencia de autocompletado con la palabra siguiente en el archivo.
			Ctrl + p: Sugerencia de autocompletado con la palabra anterior en el archivo.
			Ctrl + x Ctrl + l: Completa con una línea del archivo.
			Ctrl + x Ctrl + f: Completa con nombres de archivo (útil cuando escribes rutas).
			Ctrl + x Ctrl + k: Completa con palabras de un diccionario.
			Ctrl + x Ctrl + o: Autocompletado con opciones de un servidor LSP (si está configurado).


		Manejo de Texto y Palabras en Modo Insertar

			Ctrl + y: Insertar el carácter debajo del cursor sin moverse de posición (útil cuando copias contenido visual).
			Ctrl + g u: Iniciar una "unidad de deshacer". Esto marca una sección de texto que puede ser deshecha como una sola unidad.
			Ctrl + v: Introducir caracteres especiales o de control (como caracteres unicode o tab, newline, etc.).


		Macros y Grabaciones Rápidas

			Aunque normalmente se graban macros en el Modo Normal, puedes usar Ctrl + o en el Modo Insertar para grabar acciones específicas y volver al modo de escritura inmediatamente.
			Usa Ctrl + o seguido de un comando de Modo Normal (como q para grabar una macro), y el control regresará al Modo Insert
				
	
	
	Combinaciones en Modo Visual:		
	
		Tipos de Selección en el Modo Visual

			v: Entrar en Modo Visual (selecciona texto carácter por carácter).
			V: Entrar en Modo Visual de Línea (selecciona texto línea por línea).
			Ctrl + v: Entrar en Modo Visual en Bloque o Visual Block (selecciona bloques de texto en columnas).


		Moverse Dentro del Modo Visual

			h, j, k, l: Moverse izquierda, abajo, arriba y derecha respectivamente.
			0: Mover el cursor al inicio de la línea actual.
			$: Mover el cursor al final de la línea actual.
			w: Saltar a la siguiente palabra.
			e: Mover el cursor al final de la palabra actual.
			b: Mover el cursor al inicio de la palabra actual.
			gg: Mover el cursor al inicio del archivo.
			G: Mover el cursor al final del archivo.
			%: Moverse al par correspondiente de un paréntesis, corchete o llave.


		Comandos Básicos de Edición en Modo Visual

			y: Yank (copiar) el texto seleccionado.
			d: Borrar el texto seleccionado.
			c: Cambiar el texto seleccionado (borra la selección e inicia en Modo Insertar).
			~: Alternar entre mayúsculas y minúsculas del texto seleccionado.
			=: Autoindentar el texto seleccionado.
			> y <: Aumentar o disminuir la sangría del texto seleccionado.
			u: Convertir el texto seleccionado a minúsculas.
			U: Convertir el texto seleccionado a mayúsculas.
			r<char>: Reemplazar la selección completa con un carácter específico (por ejemplo, r- para reemplazar con guiones).


		Usar Modo Visual Bloque (Ctrl + v)

			El Modo Visual en Bloque es muy útil para seleccionar columnas o áreas específicas de texto en varios renglones, ideal para trabajar con código o tablas.

			Ctrl + v, selecciona el bloque y luego usa:
				I para insertar texto al inicio de cada línea seleccionada (útil para comentarios).
				A para añadir texto al final de cada línea seleccionada.
				d para borrar el bloque.
				c para cambiar el bloque (ingresar en Modo Insertar)
			
					
		Copiar y Pegar en Modo Visual

			y: Copiar la selección.

			p: Pegar el contenido copiado después de la selección actual.

			P: Pegar el contenido copiado antes de la selección actual.

			"+y: Copiar la selección al portapapeles del sistema (si está configurado).

			"+p: Pegar desde el portapapeles del sistema.


		Buscar y Reemplazar en Modo Visual

			Para realizar reemplazos solo en el texto seleccionado:

				Selecciona el texto, luego usa :s/patrón/reemplazo/g.
				Ejemplo:
					Selecciona el bloque de texto.
					:s/foo/bar/g: Reemplaza todas las apariciones de "foo" con "bar" en la selección.

		Repetir Acciones en el Modo Visual

			.: Repite la última acción realizada en Modo Visual. Esto es útil para aplicar la misma acción en diferentes áreas del texto seleccionando y presionando . después de cada selección.


		Saltar a Marcas en el Modo Visual

			m<letra>: Crear una marca en el punto de inicio de la selección.
			'<letra>: Volver a la marca creada.
			Útil para marcar puntos de interés y luego volver rápidamente a esos puntos.


		Otros Comandos Útiles en el Modo Visual

			o: Cambiar el extremo de la selección, moviendo el cursor al inicio o final de la selección.
			gv: Reseleccionar el último bloque de texto seleccionado.
			aw: Seleccionar una palabra entera (útil para combinaciones como daw para borrar una palabra entera).
			ap: Seleccionar un párrafo completo.
			ib y ab: Seleccionar dentro de paréntesis (ib) o incluyendo paréntesis (ab).
			it y at: Seleccionar dentro de etiquetas HTML/XML (it) o incluyendo etiquetas (at).
			
		
# Deep Vim 

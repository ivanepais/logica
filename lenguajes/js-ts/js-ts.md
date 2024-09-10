TypeScript: 

	Se dice que TypeScript es un superconjunto de JavaScript. 

	Dado que agrega muchas funcionalidades que el anterior carece, además de los tipos. 

	La nuevas funcionalidades estan apuntadas a aumentar la eficiencia del programador. 

	Ofrece mejor depuración, menor tendencia a errores y más seguridad. 

	Los tipos agregan robustez al desarrollo en TypeScript. 

	Al declarar de que tipo son las cosas, se evitan errores a la hora de manipular las funcionalidades internas de la app. 

	Cuando no se usan cosas del tipo que espera una funcionalidad, el compilador dará aviso de que se está usando un tipo, valor, objeto que no es el correcto. 

	Otra de sus grandes funcionalidades es su transpilador que convierte el código TypeScript en JavaScript y lo hace compatible con las diferentes versiones de JavaScript. 



|| Instalación

	node: 

		node --version

	npm: 

		npm --version

	typescript: 

		global install: 

			npm i -g typescript

			Asume que la persona que use el proyecto, lo tenga instalado. 

			Le estamos dando permiso de super usuario a npm 

		local/proyec: 

			TypeScrip puede funcionar desde la carpeta del proyecto. 

			Se instala como dependencia y fijarla en el packaje.json. 

			npm init 

			Creará un proyecto. 

			instalarlo como dependencia. 

			npm i --save-dev typescript 


			Tendremos un packaje.json 

			Que tiene en sus dependencias a typescript

			En node .bin tendremos tcs que es el compilador de TypeScript. 

			Podemos ejecutarlo

			Con esto comprobamos que podemos correr de forma local typescript. 


		Comandos: 

			tsc 

			Abre el compilador, comprueba que typescript funcionará.  



|| Código JS y TS

	Podemos pasar todo el código js a un archivo .ts y funcionará. 


	Compilar: 

		tsc archivo.ts


	desde npm: 

		En package.json 

			"build": "tsc archivo.ts" 

			"scripts": {
    			"build": "tsc 1.ts"
    		}

    		npm run build


    Desde la web: 

    	TypeScript Playground



    	
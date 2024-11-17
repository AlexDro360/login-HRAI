# Explicación de la practica.

Esta practica consiste en una pagina web de un login, en donde se tenia que consumir una api para poder autenticar los usuarios, la api consumida fue https://api.escuelajs.co/api/v1/users el cual es una api que contiene usuarios y permite realizar todas las peticiones de forma gratuita y sin limites, ademas se hizo uso de material designe para el diseño de las vistas.

## User service

Este se servivio fue creado para gestionar la auteticacion del usuario. 
La variable piUrl contiene la direccion url del api y token almacena el token devuelto por la api para la autentificación.

De acuerdo a la documentación de la api (https://fakeapi.platzi.com/en/rest/auth-jwt/) para logear a un usuario se debe enviar una petición POST al api eb la siguiente URL https://api.escuelajs.co/api/v1/auth/login y se le debe pasar un JSON con el email y la contraseña que se quiere autentificar de la siguiente manera: 
![{47F532A1-4DE8-4125-89DD-1C75147C1194}](https://github.com/user-attachments/assets/4c84039a-7907-48d9-92e9-0611232b7ce6) 
esta devolvera un access.token y un refresh_token en donde el acces token sirve para consultar la informacuión del usuario y el refresh_token para generar un nuevo token y no perder la sesión.

![{4F64CF25-07B1-43BC-8846-7909CC08AA26}](https://github.com/user-attachments/assets/9fe2e69b-d31e-4d69-a0f3-3dffd38abc22)
Este metodo hace lo que se explico anteriormente, recibe un correo y una petición POST al API a la cual se le pasa un JSON con el email y password, despues de acuerdo a la respuesta el API con la que se verifica que eziste el access_token si es asi se manda a llamar el metodo setToken al cual se le pasa el token.

![{E17142A2-2E32-4C26-A9E8-142563A02815}](https://github.com/user-attachments/assets/79e129a5-78c9-49f2-ab18-cf6e2413a582)
Este metodo recibe un token y lo que hace es guardarlo en el almacenamiento local para de esta forma poder consultar posteriormente los datos del usuaio activo si es que se desea.


![{33E2F72A-CD33-4C27-8E1E-5FD9FA7B8C5F}](https://github.com/user-attachments/assets/9a025714-852e-45dc-ac05-4f434db127fe)
Este metodo lo que hace es eliminar el token del almacenamiento local y redirijar al usuario a la vista del login, funciona para el cierre de sesión.

## Componente Login

Este componente contiene todo lo relacionado con el login, el html consiste en un mat-card que contiene el titulo seguido de un logo, en el contenido (mat-card-content) esta un formulario con el correo y la contraseña la cual se puede visualizar con un boton, asi tambien esta un botón para ingresar y un mensaje de error de contraseña o correo que solo se muestra cuando la variable loginError esta en true.


![{37DC8E9C-C853-4F64-9984-3CFAF9C08B26}](https://github.com/user-attachments/assets/05409a4e-7cc2-4899-aa4a-e376a6fb4091)
En el typeScript estan declaradas las variables email, que contiene el valor ingresado del correo, password que contiene la contraseña ingresada y loginError que contiene un booleno que establece si se muestra o no el error de inicio de sesión.

![{382E2A17-9C46-422C-9929-F88C27A83E32}](https://github.com/user-attachments/assets/5ccd0a38-d481-470b-9f79-57c75a3e78a3)
Este es una función que se ejecuta cuando se presiona el botón de mostra contraseña y la oculta o la muestra segun sea el caso.

![{8D00FA8F-6F13-4076-B0BE-612B641F4D68}](https://github.com/user-attachments/assets/7a1dded3-7a4c-447a-90de-bc1eacd55258)
Esta funcion es la que se encarga de validar la informacion del usuario, recibe un email y un password los cuales los toma de las variables declaradas ahi mismo, despues llama al metodo login que esta en el servicio userservice y le pasa el password y el email, posteriormente recibe la respuesta de este (de la peticion de la api declarada en el metodo login) y si fue una respuesta exitosa (next) redirige al usuario a la vista de home, si ocurrio un error (error) imprime el error en consola, y se pone en true la variable loginError para que nuestre el mensaje de error, despues markForCheck lo que hace es revisar la vista para ver si hubo un cambio y muestre el mensaje.

## Componente barra_lateral
Este componente contiene la barra lateral o menú lateral que se muestra en el home (dashboard), esta compuesto por un mat-list que contiene una foto, el nombre del usuario, y varios botones para las opciones del menú lateral separados por un mat-divider, el boton cerrar sesión ejecuta el metodo del mismo nombre del typescript.

![![{9E5476F8-64C0-42A6-8733-4B9AF87DC01B}](https://github.com/user-attachments/assets/625c627b-0c30-41b7-a71f-6b7e3b1e561c)
El metodo cerrarSesion solo manda a llamar al metodo cerrarSesion que se encuentra en el servicio userService para de esta forma terminar la sesión.

## Componente home
Este componente contiene un menu superior e incluye al componente de la barra lateral, es la pagina de inicio de la aplicación. Consta de una barra con el logo y nombre de la aplicacion y varios menús mat-menu con varias opciones cada uno (mat-menu-item). En el HTML tambien se incluyó un sidenav el cual es un componente de material y sirve para desplegar algo al presionar un botón, en este caso cuando se presiona el icono de menú se despliega o se esconde el componente de barra_lateral (dashboard).





# LoginHRAI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

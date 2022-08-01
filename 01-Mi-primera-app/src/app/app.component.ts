import { Component } from '@angular/core';

/**
 * Decorador de la clase indicando que es un componente, el cual
 * está importado directamente del core de angular
 * Dentro de este están descritos todos los atributos de ese componentes
 */
@Component({
  selector: 'app-root', //Nombre del componente
  templateUrl: './app.component.html', //Plantilla a utilizar
  styleUrls: ['./app.component.css'] //Estilos a aplicar
})

/**
 * Exposición de la clase
 */
export class AppComponent { //Clase de Typescrpt
  title = 'Mi-primera-app'; //Actua como el atributo de la clase como variable
  saludo = 'Saludos desde Angular'; //Declaración de nueva Variable como propiedad
}

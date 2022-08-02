import { Component } from "@angular/core";

/**
 * Importando decorador de component
 */  
@Component({
    selector: 'app-personas',//Nombre del componente
    template: `<h1>Listado de personas </h1>
    <app-persona></app-persona>
    <app-persona></app-persona>`
})
/**
 * Definiendo y exportando clase como
 * export class PersonasComponent
 */
export class PersonasComponent{

}
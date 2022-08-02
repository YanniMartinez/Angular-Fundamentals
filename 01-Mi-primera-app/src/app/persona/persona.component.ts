import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
/**
 * Notamos que implementa la interface de OnInit, la cual nos
 * obliga a implementar 1 método, en este caso el ngOnInit
 * Sin embargo, no es necesario implementarlo por lo que no es necesario
 * incluirla y podemos eliminar el método
 */
export class PersonaComponent {

  constructor() { }

}

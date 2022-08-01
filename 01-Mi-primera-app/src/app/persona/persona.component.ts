import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
/**
 * Notamos que implementa la interface de OnInit, la cual nos
 * obliga a implementar 1 método, en este caso el ngOnInit
 */
export class PersonaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';

/**
 * A esta sección se le conoce como decorador
 */
@NgModule({
  declarations: [ //Aquí iran todos los componentes de la app
    AppComponent, PersonasComponent, PersonaComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Indica la forma de levantar la app, en este caso lanza el componente
})

//A la sig. Linea se le conoce como definición de la clase
export class AppModule { } //Nombre de la clase que es importada en main.ts

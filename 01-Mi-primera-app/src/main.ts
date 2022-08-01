import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; //Aquí encontramos AppModule
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/**
 * Indica el levantamiento de un módulo llamado
 * AppModule, es un módulo por defecto con el cual levantamos nuestra app de Angular
 * Para encontrar, haga referencia a la línea 4. Es decir, hacemos referencia a la clase
 * llamada AppModule del archivo: ./app/app.module
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

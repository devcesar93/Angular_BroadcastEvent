import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponenteOrigemComponent } from './componente-origem/componente-origem.component';
import { ComponenteDestinoComponent } from './componente-destino/componente-destino.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteOrigemComponent,
    ComponenteDestinoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

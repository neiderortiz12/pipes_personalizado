import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MiComponente } from './mi_componete/mi_componente.component';
import { HelloComponent } from './hello/hello.componet';
import { UpperCapitalPipe } from './hello/upper-capital.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    HelloComponent,
    UpperCapitalPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

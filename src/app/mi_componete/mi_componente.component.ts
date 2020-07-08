import { Component } from '@angular/core';

@Component({
    selector: 'mi_componente',
    templateUrl: './mi_componente.component.html'
})
 export class MiComponente{
     constructor(){
         console.log("mi componente cargado");
     }
 }

 
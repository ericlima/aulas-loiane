import { Component } from '@angular/core';
import { CursosComponent } from './cursos/cursos.component';
import { FrutasComponent } from './frutas/frutas.component';
import { DataBindComponent } from './data-bind/data-bind.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'hello.html',
    directives: [CursosComponent, FrutasComponent, DataBindComponent]
    
})
export class AppComponent { }

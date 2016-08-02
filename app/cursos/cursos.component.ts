import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
    moduleId: module.id,
    selector: 'cursos',
    templateUrl: 'cursos.html',
    providers: [CursosService] 
})
export class CursosComponent {
    tituloCursos = "eric.training";

    cursos: string[];

    constructor(cursosService: CursosService) {
        this.cursos = cursosService.getCursos();
    }

}
import { Component } from '@angular/core';
import { FrutasService } from './frutas.service';

@Component({
    moduleId: module.id,
    selector: 'frutas',
    templateUrl: 'frutas.component.html',
    providers: [FrutasService] 
})
export class FrutasComponent {

    frutas: string[];

    constructor(frutasService: FrutasService) {
        this.frutas = frutasService.getFrutas();
     }

}
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'data-bind',
    templateUrl: 'data-bind.component.html',
    styleUrls: [ 'data-bind.component.css' ],    
})
export class DataBindComponent  {
    constructor() { }

    url = 'www.ericlima.com';

    urlImage: string = 'http://lorempixel.com/output/nature-q-c-640-480-8.jpg';

    conteudo: string = '';
    conteudoSalvo: string = '';
    isMouseOver: boolean = false;

    onClick() {
        alert('me clicou');
    }

    onKeyUp(event:any) {
        console.log(event);
        this.conteudo = event.target.value;
    }

    onSave(texto:string) {
        this.conteudoSalvo = texto;
    }

    onMouse() {
        this.isMouseOver = !this.isMouseOver;
    }

}
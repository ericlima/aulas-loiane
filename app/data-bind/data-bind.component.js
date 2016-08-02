"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DataBindComponent = (function () {
    function DataBindComponent() {
        this.url = 'www.ericlima.com';
        this.urlImage = 'http://lorempixel.com/output/nature-q-c-640-480-8.jpg';
        this.conteudo = '';
        this.conteudoSalvo = '';
        this.isMouseOver = false;
    }
    DataBindComponent.prototype.onClick = function () {
        alert('me clicou');
    };
    DataBindComponent.prototype.onKeyUp = function (event) {
        console.log(event);
        this.conteudo = event.target.value;
    };
    DataBindComponent.prototype.onSave = function (texto) {
        this.conteudoSalvo = texto;
    };
    DataBindComponent.prototype.onMouse = function () {
        this.isMouseOver = !this.isMouseOver;
    };
    DataBindComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'data-bind',
            templateUrl: 'data-bind.component.html',
            styleUrls: ['data-bind.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], DataBindComponent);
    return DataBindComponent;
}());
exports.DataBindComponent = DataBindComponent;
//# sourceMappingURL=data-bind.component.js.map
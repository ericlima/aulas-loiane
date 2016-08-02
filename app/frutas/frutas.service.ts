import { Injectable } from '@angular/core';

@Injectable()
export class FrutasService {

    constructor() { }

    getFrutas() {
        return ['laranja','limao','abacaxi','melao','melancia'];
    }

}
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent{
    @Output() displayFlagEmitter = new EventEmitter<string>();

    constructor() { }

    selectComponent(selectionType: string){
        this.displayFlagEmitter.emit(selectionType);
    }

}
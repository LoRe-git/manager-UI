import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent{
    @Output() displayFlagEmitter = new EventEmitter<string>();

    constructor(private render2: Renderer2) { }

    selectComponent(selectionType: string){
        this.displayFlagEmitter.emit(selectionType);
    }

    mouseEnter(){
        this.render2.selectRootElement('#search').focus();  
    }

    mouseLeaved(){
        this.render2.selectRootElement('#search').blur();
        setTimeout(
            () => {
                this.render2.selectRootElement('#search').value = '';
            }, 3000
        );
    }

}
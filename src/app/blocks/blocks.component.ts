import { Component } from '@angular/core';

@Component({
    selector: 'app-blocks',
    templateUrl: './blocks.component.html',
    styleUrls: ['./blocks.component.css']
})
export class BlocksComponent{
    // graphComponentFlag: boolean = true;

    // onNavigate(){
    //     this.graphComponentFlag = false;
    // }

    cmpSelectionType: string = 'none';

    constructor() { }
    ngOnInit() {
    }
    onSelected(arg: string){
        this.cmpSelectionType = arg;
        console.log(arg);
    }
}
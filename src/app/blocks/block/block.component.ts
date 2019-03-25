import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit{
    displayAllFlag: boolean = false;

    constructor() { }
    ngOnInit() {
    }
    displayAll(arg: string){
        if(arg === 'true'){
            this.displayAllFlag = true;
        }
    }

}
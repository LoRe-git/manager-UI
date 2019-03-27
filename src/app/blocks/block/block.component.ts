import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit{
    cmpSelectionType: string = 'none';

    constructor() { }
    ngOnInit() {
    }
    onSelected(arg: string){
        this.cmpSelectionType = arg;
        console.log(arg);
    }

}
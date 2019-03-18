import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Block } from '../block.model';

@Component({
    selector: 'app-block-navigation',
    templateUrl: './block-navigation.component.html',
    styleUrls: ['./block-navigation.component.css']
})
export class BlockNavigationComponent implements OnInit{
    blocks: Block[] = [
        new Block('Block 1', 5),
        new Block('Block 2', 3)
    ]
    @Output() blockClickEmitter = new EventEmitter<string>();
    

    constructor() { }

    ngOnInit() {

    }

    onClick(arg: string){
        this.blockClickEmitter.emit(arg);
    }
}
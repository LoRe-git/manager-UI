import { Component, OnInit } from '@angular/core';
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

    constructor() { }
    ngOnInit() {

    }
}
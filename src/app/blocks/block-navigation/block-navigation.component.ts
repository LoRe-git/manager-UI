import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Block } from '../../shared/block.model';
import { BlockSelectionService } from '../../shared/blockselection.service';

@Component({
    selector: 'app-block-navigation',
    templateUrl: './block-navigation.component.html',
    styleUrls: ['./block-navigation.component.css']
})
export class BlockNavigationComponent implements OnInit{
    blocks: Block[] = [
        new Block('Block 1', 5, 1),
        new Block('Block 2', 3, 2)
    ]
    @Output() blockClickEmitter = new EventEmitter<number>();
    

    constructor(private blockSelectionService: BlockSelectionService) { }

    ngOnInit() {

    }

    onClick(arg: number){
        this.blockClickEmitter.emit(arg);
        this.blockSelectionService.setSelectedBlock(arg);
    }
}
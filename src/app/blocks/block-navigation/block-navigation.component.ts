import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Block } from '../../shared/model/block.model';
import { BlockSelectionService } from '../../shared/service/blockselection.service';
import { Branch } from 'src/app/shared/model/branch.model';
import { HttpService } from 'src/app/shared/service/http.service';

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
    branches: Branch[] = this.blockSelectionService.branches;
    showSpinner: boolean = true;

    @Output() blockClickEmitter = new EventEmitter<number>();
    

    constructor(private blockSelectionService: BlockSelectionService, private httpService: HttpService) {
        // this.branches = this.blockSelectionService.getBranchesByHid('pmh');

     }

    ngOnInit() {
        if(!(typeof this.blockSelectionService.branches !== 'undefined' && this.blockSelectionService.branches.length > 0)){
            this.httpService.getBranches('pmh').subscribe((resposeData: Branch[]) => {
                console.log(resposeData);
                this.branches = resposeData;
                this.blockSelectionService.branches = this.branches;
                this.showSpinner = false;
            },
            error => {
                console.log(error);
            });
        } else {
            this.branches = this.blockSelectionService.branches;
            this.showSpinner = false;
        }


    }

    onClick(arg: string){
        // this.blockClickEmitter.emit(arg);
        // this.blockSelectionService.setSelectedBlock(arg);
        console.log(arg);
    }
}
import { Component } from '@angular/core';
import { Branch } from '../shared/model/branch.model';
import { BlockSelectionService } from '../shared/service/blockselection.service';

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
    branches: Branch[];
    cmpSelectionType: string = 'none';

    constructor(private blockSelectionService: BlockSelectionService) {
     }
    ngOnInit() {
    }
    onSelected(arg: string){
        this.cmpSelectionType = arg;
        console.log(arg);
    }
}
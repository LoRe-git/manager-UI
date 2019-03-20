import { Component, OnInit } from '@angular/core';

import { Person } from '../shared/person.model';
import { BlockSelectionService } from '../shared/blockselection.service';

@Component({
    selector: 'app-persons-list',
    templateUrl: './persons-list.component.html',
    styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit{
    selectedBlockId:number;
    persons: Person[] = [
        new Person('Name1', 'Hyd', 9876543321, 1),
        new Person('Name2', 'Hyd', 9876543321, 2),
        new Person('Name3', 'Hyd', 9876543321, 1)
    ];
    constructor(private blockSelectionService:BlockSelectionService){ }

    ngOnInit(){
        this.selectedBlockId = this.blockSelectionService.selectedBLockId;
    }
}
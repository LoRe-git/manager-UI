import { Component, OnInit } from '@angular/core';

import { Person } from '../../shared/person.model';

@Component({
    selector: 'app-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit{
    persons: Person[] = [
        new Person('Name1', 'Hyd', 9876543321),
        new Person('Name2', 'Hyd', 9876543321),
        new Person('Name3', 'Hyd', 9876543321)
    ];

    constructor() { }
    ngOnInit() {

    }
}
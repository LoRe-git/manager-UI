import { Component } from '@angular/core';

import { Person } from '../shared/person.model';

@Component({
    selector: 'app-persons-list',
    templateUrl: './persons-list.component.html',
    styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent {
    persons: Person[] = [
        new Person('Name1', 'Hyd', 9876543321),
        new Person('Name2', 'Hyd', 9876543321),
        new Person('Name3', 'Hyd', 9876543321)
    ];
}
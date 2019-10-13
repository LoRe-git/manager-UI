import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TenantService } from '../shared/service/tenant.service';
import { HttpService } from '../shared/service/http.service';

@Component({
    selector:'app-checklist',
    templateUrl:'./checklist.component.html',
    styleUrls:['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
    checklistForm: FormGroup;

    constructor(private tenantService: TenantService, private httpService: HttpService){}

    ngOnInit(){
     this.checklistForm = new FormGroup({
         'checklist_id': new FormControl(''),
         'bid': new FormControl(''),
         'checklist_date': new FormControl(''),
         'incharge_name': new FormControl(''),
         'opening_balance': new FormControl(''),
         'admissions': new FormControl(''),
         'vacancies': new FormControl(''),
         'notice_periods': new FormControl(''),
         'complaints': new FormControl(''),
         'collections_cash': new FormControl(''),
         'collections_ac': new FormControl(''),
         'collections_pending': new FormControl(''),
         'closing_balance': new FormControl(''),
         'water_tankers': new FormControl(''),
         'misc': new FormControl('')
     })   
     this.checklistForm.patchValue({
        'checklist_id': 0,
        'bid': 'pmhb2'
     });
    }

    onSubmit(){
        console.log(this.checklistForm);
        // this.tenantService.saveChecklist(this.tenantService.checklistForm2Model(this.checklistForm.value));
        this.httpService.saveChecklist(this.tenantService.checklistForm2Model(this.checklistForm.value)).subscribe(
            (response) => {
                console.log(response.toString());
              },
              (error) => {
                console.log(error);
              }
        );
        this.checklistForm.reset();
    }
}
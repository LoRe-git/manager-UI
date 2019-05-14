import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TenantService } from 'src/app/shared/service/tenant.service';
import { Tenant } from 'src/app/shared/model/tenant.model';

@Component({
  selector: 'app-tenant-new',
  templateUrl: './tenant-new.component.html',
  styleUrls: ['./tenant-new.component.css']
})
export class TenantNewComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private tenantService: TenantService) { 
    //FormBuilder to gould form:another way to build form
  }

  ngOnInit() {
      this.signUpForm = new FormGroup({
        'fullname': new FormControl(null, Validators.required),
        'id': new FormControl(''),
        'address': new FormControl(''),
        'phone': new FormControl(''),
        'roomno': new FormControl(''),
        'govid': new FormControl(''),
        'amount': new FormControl(''),
        'email': new FormControl(''),
        'dob': new FormControl(''),
        'doj': new FormControl(''),
        'blockid': new FormControl('')
      });

    this.signUpForm.patchValue({
      fullname:'Loki'
    });
  }

  onSubmit(){
    // this.signUpForm.get.fullname;
    const newTenant = this.signUpForm.value;
    console.log(this.signUpForm);
    this.tenantService.addTenant(new Tenant(+newTenant.id, newTenant.fullname, newTenant.address, +newTenant.phone, newTenant.roomno, newTenant.govid, +newTenant.amount, newTenant.email, new Date('02-12-2019'), new Date('06-16-2019'), +newTenant.blockid));
    this.signUpForm.reset();
  }

}

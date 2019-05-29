import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TenantService } from '../../shared/service/tenant.service';
import { Router } from '@angular/router';

import { Tenant } from '../../shared/model/tenant.model';
import { Tenant2 } from 'src/app/shared/model/tenant2.model';

@Component({
  selector: 'app-tenant-update',
  templateUrl: '../tenant-new/tenant-new.component.html',
  styleUrls: ['./tenant-update.component.css']
})
export class TenantUpdateComponent implements OnInit {

  signUpForm: FormGroup;
  // private tenantID: string;
  private tenantID: number;
  // private updateTenant: Tenant;
  private updateTenant: Tenant2;

  constructor(private tenantService: TenantService, private router: Router) {
    // FormBuilder to gould form:another way to build form

    // For array model tenants
    // this.tenantID = this.router.getCurrentNavigation().extras.state.tenantId;
    // this.updateTenant = this.tenantService.getTenantWithId(+this.tenantID);
    // console.log('Tenant need to update: ' + this.updateTenant);

    this.tenantID = +this.router.getCurrentNavigation().extras.state.tenantId;
    this.updateTenant = this.tenantService.getTenantWithId(+this.tenantID);
    console.log('Tenant need to update: ' + this.updateTenant);
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
        fullname: this.updateTenant.name,
        id: this.updateTenant.id,
        address: this.updateTenant.address,
        phone: this.updateTenant.mobile,
        roomno: this.updateTenant.room,
        govid: this.updateTenant.gov_id,
        amount: this.updateTenant.amount,
        email: this.updateTenant.email,
        // dob: this.updateTenant.dob,
        doj: this.updateTenant.doj,
        blockid: this.updateTenant.bId
      });
  }

  // onSubmit() {
  //   console.log(this.signUpForm);
  //   this.tenantService.updateTenant(this.tenantService.tenantFormToModel(this.signUpForm.value));
  //   console.log('Tenant updated...');
  //   this.signUpForm.reset();
  // }


  onSubmit() {
    console.log(this.signUpForm);
    this.tenantService.updateTenant(this.tenantService.tenant2FormToModel(this.signUpForm.value));
    console.log('Tenant updated...');
    this.signUpForm.reset();
  }

}

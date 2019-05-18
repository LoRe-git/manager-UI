import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TenantService } from '../../shared/service/tenant.service';
import { Router } from '@angular/router';

import { Tenant } from '../../shared/model/tenant.model';

@Component({
  selector: 'app-tenant-update',
  templateUrl: '../tenant-new/tenant-new.component.html',
  styleUrls: ['./tenant-update.component.css']
})
export class TenantUpdateComponent implements OnInit {

  signUpForm: FormGroup;
  private tenantID: string;
  private updateTenant: Tenant;

  constructor(private tenantService: TenantService, private router: Router) {
    // FormBuilder to gould form:another way to build form
    this.tenantID = this.router.getCurrentNavigation().extras.state.tenantId;
    this.updateTenant = this.tenantService.getTenantWithId(+this.tenantID);
    console.log('Tenant nedd to update: ' + this.updateTenant);
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
        fullname: this.updateTenant.t_name,
        id: this.updateTenant.t_id,
        address: this.updateTenant.t_address,
        phone: this.updateTenant.t_phone,
        roomno: this.updateTenant.t_roomno,
        govid: this.updateTenant.t_govId,
        amount: this.updateTenant.t_amount,
        email: this.updateTenant.t_email,
        dob: this.updateTenant.t_dob,
        doj: this.updateTenant.t_doj,
        blockid: this.updateTenant.block_id
      });
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.tenantService.updateTenant(this.tenantService.tenantFormToModel(this.signUpForm.value));
    console.log('Tenant updated...');
    this.signUpForm.reset();
  }
}

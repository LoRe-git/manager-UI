import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TenantService } from 'src/app/shared/service/tenant.service';
import { Tenant } from 'src/app/shared/model/tenant.model';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-tenant-new',
  templateUrl: './tenant-new.component.html',
  styleUrls: ['./tenant-new.component.css']
})
export class TenantNewComponent implements OnInit {

  signUpForm: FormGroup;
  enableUpdateBtn = false;
  constructor(private httpService: HttpService, private tenantService: TenantService) { 
    // FormBuilder to gould form:another way to build form
  }

  ngOnInit() {
      this.signUpForm = new FormGroup({
        'fullname': new FormControl(null, [Validators.required]),
        'id': new FormControl(''),
        'address': new FormControl('',Validators.required),
        'phone': new FormControl('',Validators.pattern('^[0-9]*$')),
        'roomno': new FormControl(''),
        'govid': new FormControl(''),
        'amount': new FormControl('', Validators.pattern('^[0-9]*$')),
        'email': new FormControl('',Validators.email),
        'dob': new FormControl('',Validators.required),
        'doj': new FormControl(''),
        'blockid': new FormControl('',Validators.required)
      });

      this.signUpForm.patchValue({
        fullname: 'Loki'
      });
  }

  onSubmit(){
    // this.signUpForm.get.fullname;
    const newTenant = this.signUpForm.value;
    console.log(this.signUpForm);
    // this.tenantService.addTenant(new Tenant(+newTenant.id, newTenant.fullname, newTenant.address, +newTenant.phone, newTenant.roomno, newTenant.govid, +newTenant.amount, newTenant.email, new Date('02/12/2019'), new Date('06/16/2019'), +newTenant.blockid));
    this.tenantService.addTenant(this.tenantService.tenantFormToModel(newTenant));
    if(this.signUpForm.valid){
    // Save to Database
    this.httpService.saveTenant(this.tenantService.tenant2FormToModel(newTenant)).subscribe(
      (response) => {
        console.log(response.toString());
      },
      (error) => {
        console.log(error);
      }
      );

      this.signUpForm.reset();
    }
  }

  // isOnlyAlphabets(val:any):{[key:string]:boolean} | null{
  //     const stringVal = val.toString;
  //     if(stringVal !== undefined && ('^[a-b][A-B]*$'.test(stringVal))){
  //       return {'isString': true};
  //     }
  //   return null;
  // }

}

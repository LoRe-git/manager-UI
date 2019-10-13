import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TenantService } from 'src/app/shared/service/tenant.service';
import { Tenant } from 'src/app/shared/model/tenant.model';
import { HttpService } from 'src/app/shared/service/http.service';
import { BlockSelectionService } from 'src/app/shared/service/blockselection.service';
import { Branch } from 'src/app/shared/model/branch.model';
import { Observable } from 'rxjs';
import { Room } from 'src/app/shared/model/room.model';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-tenant-new',
  templateUrl: './tenant-new.component.html',
  styleUrls: ['./tenant-new.component.css']
})
export class TenantNewComponent implements OnInit {

  signUpForm: FormGroup;
  enableUpdateBtn = false;
  branches: Branch[];
  rooms: Room[];
  selectedBranch: string;
  isBlockChanged: boolean = false;
  constructor(private httpService: HttpService, private tenantService: TenantService, private blockSelectionService: BlockSelectionService) { 
    // FormBuilder to gould form:another way to build form
  }

  ngOnInit() {

    this.httpService.getBranches(this.tenantService.hid).subscribe((resposeData: Branch[]) => {
      console.log(resposeData);
      this.branches = resposeData;
      this.blockSelectionService.branches = this.branches;
      // this.showSpinner = false;
  },
  error => {
      console.log(error);
  });

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

  changeBranch(args){ 
    const branchID = args.target.value;
    console.log('branch: ', branchID);
    this.signUpForm.patchValue({
      blockid: branchID
    });
    this.getRooms(branchID);

  }

  getRooms(branchId: string){
    this.isBlockChanged = true;
    this.signUpForm.get('roomno').disable();
    console.log('room(): ',branchId);
    this.httpService.getRoomsByBid(branchId).subscribe(
      (responseData: Room[]) => {
        console.log(responseData);
        this.rooms = responseData;
        this.isBlockChanged = false;
        this.signUpForm.get('roomno').enable();
    },
    error => {
        console.log(error);
    }
    );
  }

  selectRoom(e){
    const roomID =  (<HTMLSelectElement>e.target).value;
    this.signUpForm.patchValue({
      roomno: roomID
    });
  }

  // isOnlyAlphabets(val:any):{[key:string]:boolean} | null{
  //     const stringVal = val.toString;
  //     if(stringVal !== undefined && ('^[a-b][A-B]*$'.test(stringVal))){
  //       return {'isString': true};
  //     }
  //   return null;
  // }

}

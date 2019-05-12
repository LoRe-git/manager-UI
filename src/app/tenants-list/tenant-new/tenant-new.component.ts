import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tenant-new',
  templateUrl: './tenant-new.component.html',
  styleUrls: ['./tenant-new.component.css']
})
export class TenantNewComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
     this.registrationForm = new FormGroup({
       'name': new FormControl(null, Validators.required),
       id: new FormControl(''),
       address: new FormControl(''),
       phone: new FormControl(''),
       roomno: new FormControl(''),
       govid: new FormControl(''),
       amount: new FormControl(''),
       email: new FormControl(''),
       dob: new FormControl(''),
       doj: new FormControl(''),
       blockid: new FormControl('')
     });

    // this.registrationForm = this.fb.group({
    //   name: ['', [Validators.required]],
    //   id: '',
    //   address: '',
    //   phone: '',
    //   roomno: '',
    //   govid: '',
    //   amount: '',
    //   email: '',
    //   dob: '',
    //   doj: '',
    //   blockid: ''
    // });

    this.registrationForm.patchValue({
      'name':'Loki'
    });
  }

  onSubmit(regForm: FormGroup){
    console.log(this.registrationForm);
    console.log(regForm);
    this.registrationForm.reset();
  }

}

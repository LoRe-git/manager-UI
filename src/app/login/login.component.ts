import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{
    
    constructor(private authService: AuthService, private router: Router){}

    onSubmit(form: NgForm){
        console.log(form);
       localStorage.setItem('loggedin','true');
        form.reset();
        this.router.navigate(['/']);
    }
}
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css'],
})
export class HeaderComponent implements OnInit{
    public isLoggedin: boolean = false;
    ngOnInit(){
        this.isLoggedin = this.authService.isAuthenticated();
    }
    constructor(private authService: AuthService, private router: Router){ }
    onLogout() {
        localStorage.removeItem('loggedin');
        this.router.navigate(['/login']);
    }
}
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    public isLoggedin: boolean = false;

    public isAuthenticated(): boolean {
        console.log(`localstorage:${localStorage.getItem('loggedin')}`);
        var locl = localStorage.getItem('loggedin');
        if(locl == null){
            this.isLoggedin = false;
            return false;
        }else {
            this.isLoggedin = true;
            return true;
        }
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tenant2 } from '../model/tenant2.model';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    dbTenants: Tenant2[];

    constructor(private httpClient: HttpClient) {}
    apiURL: string = 'http://localhost:8080/api/v1/tenants/';
    saveTenant(newTenant: Tenant2){
       return this.httpClient.post(this.apiURL,newTenant);
    }

    getTenants() {
        return this.httpClient.get<Tenant2[]>(this.apiURL);
    }
}
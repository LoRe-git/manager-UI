import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tenant } from '../model/tenant.model';
import { Tenant2 } from '../model/tenant2.model';

@Injectable()
export class HttpService {
    constructor(private httpClient: HttpClient) {}

    saveTenant(newTenant: Tenant2){
       return this.httpClient.post('http://localhost:8080/api/v1/tenants/',newTenant);
    }
}
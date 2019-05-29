import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tenant2 } from '../model/tenant2.model';

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

    deleteTenant(tenantID: number){
        // this.httpClient.delete(this.apiURL+tenantID);
        const fullURL = this.apiURL+tenantID;
        console.log(fullURL);

        this.httpClient.request('DELETE', fullURL).subscribe(
            respose => {
                console.log(respose.toString);
            },
            error => {
                console.log(error.toString);
            }
        );
    }   

    updateTenant(updatedTenant: Tenant2){
        this.httpClient.put(this.apiURL, updatedTenant).subscribe(
            respose => {
                console.log(respose.toString);
            },
            error => {
                console.log(error.toString);
            }
        );
    }
}
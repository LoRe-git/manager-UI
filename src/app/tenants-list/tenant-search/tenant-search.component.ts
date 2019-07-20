import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/service/http.service';
import { Tenant2 } from 'src/app/shared/model/tenant2.model';

@Component({
  selector: 'app-tenant-search',
  templateUrl: './tenant-search.component.html',
  styleUrls: ['./tenant-search.component.css']
})
export class TenantSearchComponent implements OnInit {

  searchTxt: string;
  tenants: Tenant2[];
  showSpinner:boolean = true;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  getTenantResults(ev:any){
    console.log(this.searchTxt);
    this.httpService.searchTenants(this.searchTxt).subscribe(
      (response: Tenant2[]) => {
        this.tenants = response;
        this.showSpinner = false;
      }
    );
  }

  onDelete(tenant: Tenant2){

  }

  onEdit(id: number){

  }
}

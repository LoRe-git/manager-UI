import { Component, OnInit } from '@angular/core';
import { Tenant } from '../shared/model/tenant.model';
import { BlockSelectionService } from '../shared/service/blockselection.service';
import { TenantService } from '../shared/service/tenant.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Tenant2 } from '../shared/model/tenant2.model';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.css']
})
export class TenantsListComponent implements OnInit{
  selectedBlockId: number;
  tenants: Tenant[];
  tenants2: Tenant2[];
  showSpinner: boolean = true;

  constructor(
    private blockSelectionService: BlockSelectionService,
    private tenantService: TenantService,
    private router: Router,
    private route: ActivatedRoute) { 
    }

  ngOnInit() {
      this.selectedBlockId = this.blockSelectionService.selectedBLockId;
      // this.tenants = this.tenantService.getAllTenants();
      // this.tenants2 = this.tenantService.getAllTenants();
      // this.tenantService.tenantChangedEvent.subscribe(
      //   (latestTenants: Tenant2[]) => {
      //     this.tenants2 = latestTenants;
      //   }
      // );

      // fetching tenants data
      this.fetchTenantsData();
  }

  onDelete(deletedTenant: Tenant2){
    // this.tenantService.deleteTenant(deletedTenant);
    console.log(deletedTenant);

    this.showSpinner = true;

    this.tenantService.deleteTenant(deletedTenant.id);

    // refreshing tenants data
    this.fetchTenantsData();
  }

  onEdit(id: string) {
    const navigationExtras: NavigationExtras = {
      state : { tenantId: id }
    };
    this.router.navigate(['tenants/update'], navigationExtras);
  }

  fetchTenantsData(){
    this.tenantService.getAllTenants().subscribe( (responseData: Tenant2[]) => {
      this.tenants2 = responseData;

      //assigning tenants to allTenants2 of service for Edit tenant purpose
      this.tenantService.allTenants2 = responseData; 
      
      this.showSpinner = false;
    });
  }
}
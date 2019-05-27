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
      this.tenantService.getAllTenants().subscribe( (responseData: Tenant2[]) => {
        this.tenants2 = responseData;
      });
  }

  onDelete(deletedTenant: Tenant){
    this.tenantService.deleteTenant(deletedTenant);
  }

  onEdit(id: string) {
    const navigationExtras: NavigationExtras = {
      state : { tenantId: id }
    };
    this.router.navigate(['tenants/update'], navigationExtras);
  }
}
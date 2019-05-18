import { Component, OnInit } from '@angular/core';
import { Tenant } from '../shared/model/tenant.model';
import { BlockSelectionService } from '../shared/service/blockselection.service';
import { TenantService } from '../shared/service/tenant.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.css']
})
export class TenantsListComponent implements OnInit{
  selectedBlockId: number;
  tenants: Tenant[];

  constructor(
    private blockSelectionService: BlockSelectionService,
    private tenantService: TenantService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.selectedBlockId = this.blockSelectionService.selectedBLockId;
      this.tenants = this.tenantService.getAllTenants();
      this.tenantService.tenantChangedEvent.subscribe(
        (latestTenants: Tenant[]) => {
          this.tenants = latestTenants;
        }
      );
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
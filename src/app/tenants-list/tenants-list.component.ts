import { Component, OnInit } from '@angular/core';
import { Tenant } from '../shared/model/tenant.model';
import { BlockSelectionService } from '../shared/service/blockselection.service';
import { TenantService } from '../shared/service/tenant.service';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.css'],
  providers: [TenantService]
})
export class TenantsListComponent implements OnInit{
  selectedBlockId: number;
  tenants: Tenant[];

  constructor(private blockSelectionService: BlockSelectionService, private tenantService: TenantService){ }

  ngOnInit(){
      this.selectedBlockId = this.blockSelectionService.selectedBLockId;
      this.tenants = this.tenantService.allTenants;
  }

  onDelete(deletedTenant: Tenant){
    this.tenantService.deleteTenant(deletedTenant);
  }
}
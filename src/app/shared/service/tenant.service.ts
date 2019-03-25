import { EventEmitter } from '@angular/core';

import { Tenant } from '../model/tenant.model';

export class TenantService{
    tenantChangedEvent = new EventEmitter<Tenant[]>();

    private allTenants: Tenant[] = [
        new Tenant(1, 'Name1', 'Hyd', 9876543321, 1),
        new Tenant(2, 'Name2', 'Hyd', 9876543321, 2),
        new Tenant(3, 'Name3', 'Hyd', 9876543321, 1)
    ];

    getAllTenants(){
        return this.allTenants.slice();
    }

    addTenant(newTenant: Tenant){
        this.allTenants.push(newTenant);
        this.tenantChangedEvent.emit(this.allTenants.slice());
        console.log(this.allTenants);
    }
    updateTenant(latestTenant: Tenant){
        let updateItemIndex = this.getIndex(latestTenant);
        this.allTenants[updateItemIndex] = latestTenant;
        this.tenantChangedEvent.emit(this.allTenants.slice());
        console.log(this.allTenants);
    }
    
    deleteTenant(deletedTenant: Tenant){
        let updateItemIndex = this.getIndex(deletedTenant);
        console.log('deleting tenant index: '+updateItemIndex);
        this.allTenants.splice(updateItemIndex, 1);
        this.tenantChangedEvent.emit(this.allTenants.slice());
        console.log(this.allTenants);
    }

    getIndex(updatedTenant: Tenant){
        return this.allTenants.findIndex(tempTenant => tempTenant.t_id === updatedTenant.t_id);
    }
}
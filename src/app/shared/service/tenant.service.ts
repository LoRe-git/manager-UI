import { Tenant } from '../model/tenant.model';

export class TenantService{
    allTenants: Tenant[] = [
        new Tenant(1, 'Name1', 'Hyd', 9876543321, 1),
        new Tenant(2, 'Name2', 'Hyd', 9876543321, 2),
        new Tenant(3, 'Name3', 'Hyd', 9876543321, 1)
    ];

    addTenant(newTenant: Tenant){
        this.allTenants.push(newTenant);
        console.log(this.allTenants);
    }
    updateTenant(latestTenant: Tenant){
        console.log(this.allTenants);
        let updateItemIndex = this.getIndex(latestTenant);
        this.allTenants[updateItemIndex] = latestTenant;
        console.log(this.allTenants);
    }
    
    deleteTenant(deletedTenant: Tenant){
        let updateItemIndex = this.getIndex(deletedTenant);
        console.log('deleting tenant index: '+updateItemIndex);
        this.allTenants.splice(updateItemIndex, 1);
        console.log(this.allTenants);
    }

    getIndex(updatedTenant: Tenant){
        return this.allTenants.findIndex(tempTenant => tempTenant.t_id === updatedTenant.t_id);
    }
}
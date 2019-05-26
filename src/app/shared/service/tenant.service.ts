import { EventEmitter } from '@angular/core';

import { Tenant } from '../model/tenant.model';
import { Tenant2 } from '../model/tenant2.model';

export class TenantService {
    tenantChangedEvent = new EventEmitter<Tenant[]>();

    private allTenants: Tenant[] = [
        new Tenant(1, 'Name1', 'Hyd', 9876543321, 'RM1', 'AADHAR12345', 2000, 'loki@gmail.com', new Date("1993-05-10"), new Date("2018-12-01"), 1),
        new Tenant(2, 'Name2', 'Knl', 9876543321, 'RM2', 'AADHAR23456', 2000, 'reddy@gmail.com', new Date("1990-03-05"), new Date("2019-04-03"), 2),
        new Tenant(3, 'Name3', 'Bnglr', 9876543321, 'RM3', 'AADHAR34567', 2000, 'posam@gmail.com', new Date("1995-02-20"), new Date("2018-05-20"), 1)
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
        const updateItemIndex = this.getIndex(latestTenant);
        this.allTenants[updateItemIndex] = latestTenant;
        this.tenantChangedEvent.emit(this.allTenants.slice());
        console.log(this.allTenants);
    }

    deleteTenant(deletedTenant: Tenant){
        const updateItemIndex = this.getIndex(deletedTenant);
        console.log('deleting tenant index: ' + updateItemIndex);
        this.allTenants.splice(updateItemIndex, 1);
        this.tenantChangedEvent.emit(this.allTenants.slice());
        console.log(this.allTenants);
    }

    getIndex(updatedTenant: Tenant){
        return this.allTenants.findIndex(tempTenant => tempTenant.t_id === updatedTenant.t_id);
    }

    getTenantWithId(tenantId: number): Tenant{
        return this.allTenants.find(tmpTenant => tmpTenant.t_id == tenantId);
    }

    tenantFormToModel(tenantForm): Tenant {
        return new Tenant(+tenantForm.id, tenantForm.fullname, tenantForm.address, +tenantForm.phone, tenantForm.roomno, tenantForm.govid, +tenantForm.amount, tenantForm.email, new Date(tenantForm.dob), new Date(tenantForm.doj), +tenantForm.blockid);
    }

    tenant2FormToModel(tenantForm): Tenant2 {
        return new Tenant2(+tenantForm.id, tenantForm.phone, tenantForm.fullname, tenantForm.govid, new Date(tenantForm.doj), tenantForm.address, tenantForm.roomno, +tenantForm.amount, tenantForm.email, tenantForm.blockid);
    }

}
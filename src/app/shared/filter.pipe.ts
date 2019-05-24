import { Pipe, PipeTransform } from '@angular/core';
import { Tenant } from './model/tenant.model';

@Pipe({
    name: 'filter'
})
export class CustomFilterPipe implements PipeTransform{
    transform(tenants: Tenant[], searchTxt: string): any[] {
        if(!tenants) return [];
        if(!searchTxt) return tenants;
        searchTxt = searchTxt.toLowerCase();
        return tenants.filter(tenant => {
            return tenant.t_name.toLowerCase().includes(searchTxt) 
                    // || tenant.t_amount.toString().includes(searchTxt)
                    // || tenant.t_dob.toLocaleString().split(',')[0].includes(searchTxt)
                    // || tenant.t_doj.toLocaleString().split(',')[0].includes(searchTxt)
                    // || tenant.t_email.toLowerCase().includes(searchTxt)
                    // || tenant.t_govId.toLowerCase().includes(searchTxt)
                    || tenant.t_phone.toString().includes(searchTxt)
                    // || tenant.t_roomno.toLowerCase().includes(searchTxt)
                    || tenant.t_address.toLowerCase().includes(searchTxt)
                    || tenant.block_id.toString().toLowerCase().includes(searchTxt) ;
        })
    }
    
}
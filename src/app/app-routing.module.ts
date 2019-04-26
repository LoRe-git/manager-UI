import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockComponent } from './blocks/block/block.component';
import { GraphsComponent } from './graphs/graphs.component';
import { TenantsListComponent } from './tenants-list/tenants-list.component';
import { TenantNewComponent } from './tenants-list/tenant-new/tenant-new.component';
import { TenantUpdateComponent } from './tenants-list/tenant-update/tenant-update.component';
import { TenantDeleteComponent } from './tenants-list/tenant-delete/tenant-delete.component';
import { TenantSearchComponent } from './tenants-list/tenant-search/tenant-search.component';

const routes: Routes = [
  {path:'', component:GraphsComponent},
  {path:':id', component:BlockComponent, children:[
    {path:'tenants_list', component:TenantsListComponent},
    {path:'tenant_new', component:TenantNewComponent},
    {path:'tenant_update', component:TenantUpdateComponent},
    {path:'tenant_delete', component:TenantDeleteComponent},
    {path:'tenant_search', component:TenantSearchComponent},
  ]},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

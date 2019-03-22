import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlocksComponent } from './blocks/blocks.component';
import { BlockComponent } from './blocks/block/block.component';
import { BlockNavigationComponent } from './blocks/block-navigation/block-navigation.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { GraphsComponent } from './graphs/graphs.component';
import { BlockSelectionService } from './shared/service/blockselection.service';
import { TenantsListComponent } from './tenants-list/tenants-list.component';
import { TenantUpdateComponent } from './tenants-list/tenant-update/tenant-update.component';
import { TenantDeleteComponent } from './tenants-list/tenant-delete/tenant-delete.component';
import { TenantNewComponent } from './tenants-list/tenant-new/tenant-new.component';
import { TenantService } from './shared/service/tenant.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlocksComponent,
    BlockComponent,
    BlockNavigationComponent,
    FooterComponent,
    LoginComponent,
    MenuComponent,
    GraphsComponent,
    TenantsListComponent,
    TenantUpdateComponent,
    TenantDeleteComponent,
    TenantNewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // HttpModule
  ],
  providers: [BlockSelectionService, TenantService],
  bootstrap: [AppComponent]
})
export class AppModule { }

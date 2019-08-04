import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { TenantSearchComponent } from './tenants-list/tenant-search/tenant-search.component';
import { CustomFilterPipe } from './shared/filter.pipe';
import { HttpService } from './shared/service/http.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { AuthService } from './login/auth.service';

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
    TenantNewComponent,
    TenantSearchComponent,
    CustomFilterPipe,
    SpinnerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [BlockSelectionService, TenantService, HttpService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonUpdateComponent } from './persons-list/person-update/person-update.component';
import { PersonDeleteComponent } from './persons-list/person-delete/person-delete.componen';
import { PersonNewComponent } from './persons-list/person-new/person-new.component';
import { PersonEditComponent } from './persons-list/person-edit/person-edit.component';
import { BlockSelectionService } from './shared/blockselection.service';

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
    PersonsListComponent,
    PersonUpdateComponent,
    PersonDeleteComponent,
    PersonNewComponent,
    PersonEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // HttpModule
  ],
  providers: [BlockSelectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

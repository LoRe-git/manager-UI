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
    GraphsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

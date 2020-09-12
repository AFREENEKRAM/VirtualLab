import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OutletComponent } from './outlet/outlet.component';
import { FirstPageModule } from './Modules/first-page/first-page.module'
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OutletComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FirstPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

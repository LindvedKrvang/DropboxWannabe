import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './home/home.module';
import {UserModule} from './user/user.module';
import {RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {MatListModule, MatSidenavModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HomeModule,
    UserModule,
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

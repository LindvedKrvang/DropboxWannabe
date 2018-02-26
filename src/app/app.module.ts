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
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';


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
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

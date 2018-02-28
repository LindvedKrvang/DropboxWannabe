import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {FileSystemComponent} from './home/file-system/file-system.component';
import {ProfileComponent} from './user/profile/profile.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginGuard} from './shared/guards/login.guard';
import {AlreadyLoggedGuard} from './shared/guards/already-logged.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AlreadyLoggedGuard] },
  { path: 'files', component: FileSystemComponent, canActivate: [LoginGuard]},
  { path: 'profile', component: ProfileComponent},
  {path: '', component: LoginComponent},


  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

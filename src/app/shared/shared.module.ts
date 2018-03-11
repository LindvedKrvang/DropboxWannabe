import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoginGuard} from './guards/login.guard';
import {AlreadyLoggedGuard} from './guards/already-logged.guard';
import { UploadDirective } from './directives/upload.directive';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [ToolbarComponent, MarginIconComponent, UploadDirective],
  exports: [ToolbarComponent, MarginIconComponent, UploadDirective],
  providers: [LoginGuard, AlreadyLoggedGuard]
})
export class SharedModule { }

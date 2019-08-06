import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationService } from './authentication/authentication.service';

@NgModule({
  providers: [
    AuthenticationService
  ],
  declarations: [
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }

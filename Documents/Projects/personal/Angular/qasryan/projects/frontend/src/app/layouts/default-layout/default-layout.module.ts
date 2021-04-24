import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { DefaultLayoutComponent } from './default-layout.component';
import { DefaultNavbarComponent } from './components/default-navbar/default-navbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { KidnappedListComponent } from './pages/kidnapped-list/kidnapped-list.component';
import { DefaultFooterComponent } from './components/default-footer/default-footer.component';
import { ReportKidnappedComponent } from './pages/report-kidnapped/report-kidnapped.component';
import { KidnappedComponent } from './pages/kidnapped/kidnapped.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    DefaultNavbarComponent,
    LandingComponent,
    KidnappedListComponent,
    DefaultFooterComponent,
    ReportKidnappedComponent,
    KidnappedComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DefaultLayoutRoutingModule,
    GoogleChartsModule,

  ],
  exports: []
})
export class DefaultLayoutModule { }

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { KidnappedComponent } from './pages/kidnapped/kidnapped.component';
import { ReportKidnappedComponent } from './pages/report-kidnapped/report-kidnapped.component';
import { KidnappedListComponent } from './pages/kidnapped-list/kidnapped-list.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './default-layout.component';

const routes: Routes = [
  { path: '', component: DefaultLayoutComponent, children: [
    { path: '', component: LandingComponent, data: { state: 'LAND' } },
    { path: 'kidnapped-list', component: KidnappedListComponent, data: { state: 'LIST' }},
    { path: 'report-kidnapped', component: ReportKidnappedComponent, data: { state: 'REPORT' }},
    { path: 'kidnapped/:id', component: KidnappedComponent, data: { state: 'KIDNAP' }},
    { path: 'login', component: LoginComponent, data: { state: 'LOGIN' }},
    { path: 'register', component: RegisterComponent, data: { state: 'REGISTER' }},
    { path: '**', redirectTo: '' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultLayoutRoutingModule { }

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
  }, {
    path: 'vendors',
    loadChildren: './vendors/vendors.module#VendorsModule',
  }, {
    path: 'activities',
    loadChildren: './activities/activities.module#ActivitiesModule',
  }, {
    path: 'process-payment',
    loadChildren: './process-payment/process-payment.module#ProcessPaymentModule',
  },  {
    path: 'banners',
    loadChildren: './banners/banners.module#BannersModule',
  }, {
    path: 'send-mail',
    loadChildren: './send-mail/send-mail.module#SendMailModule',
  },  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

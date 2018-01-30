import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';
import { AccountInfoComponent } from './account-info/account-info.component';



const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: 'create-account',
    component: CreateAccountComponent,
  },{
      path: 'manage-accounts',
      component: ManageAccountsComponent,
  },{
      path: '?',
      component: AccountInfoComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule { }

export const routedComponents = [
    AdminComponent,
    CreateAccountComponent,
    ManageAccountsComponent,
    AccountInfoComponent
];

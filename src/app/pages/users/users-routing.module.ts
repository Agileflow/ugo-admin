import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { DeactivatedUsersComponent } from './deactivated-users/deactivated-users.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [{
    path: 'active-users',
    component: ActiveUsersComponent,
  },{
      path: 'deactivated-users',
      component: DeactivatedUsersComponent,
  },{
      path: '?',
      component: UserInfoComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }

export const routedComponents = [
    UsersComponent,
    ActiveUsersComponent,
    DeactivatedUsersComponent,
    UserInfoComponent
];

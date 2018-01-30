import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannersComponent } from './banners.component';
import { ManageBannersComponent } from './manage-banners/manage-banners.component';




const routes: Routes = [{
  path: '',
  component: BannersComponent,
  children: [{
    path: 'manage-app-banners',
    component: ManageBannersComponent
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BannersRoutingModule { }

export const routedComponents = [
    BannersComponent,
    ManageBannersComponent
];

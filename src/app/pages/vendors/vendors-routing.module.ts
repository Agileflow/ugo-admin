import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorsComponent } from './vendors.component';
import { BikersComponent } from './bikers/bikers.component';
import { DriversComponent } from './drivers/drivers.component';
import { ServicersComponent } from './servicers/servicers.component';

const routes: Routes = [{
  path: '',
  component: VendorsComponent,
  children: [{
    path: 'bikers',
    component: BikersComponent,
  },{
      path: 'drivers',
      component: DriversComponent,
  },{
      path: 'servicers',
      component: ServicersComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorsRoutingModule { }

export const routedComponents = [
    VendorsComponent,
    BikersComponent,
    DriversComponent,
    ServicersComponent
];

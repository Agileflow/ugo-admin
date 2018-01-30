import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessPaymentComponent } from './process-payment.component';
import { GenerateCsvComponent } from './generate-csv/generate-csv.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [{
  path: '',
  component: ProcessPaymentComponent,
  children: [{
    path: 'generate-csv',
    component: GenerateCsvComponent,
  },{
      path: 'other',
      component: OtherComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessPaymentRoutingModule { }

export const routedComponents = [
    ProcessPaymentComponent,
    GenerateCsvComponent,
    OtherComponent
];

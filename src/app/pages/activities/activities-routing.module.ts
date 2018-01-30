import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesComponent } from './activities.component';
import {CompletedComponent } from './completed/completed.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { CancelledComponent } from './cancelled/cancelled.component';
import { UnsatisfiedComponent } from './unsatisfied/unsatisfied.component';


const routes: Routes = [{
  path: '',
  component: ActivitiesComponent,
  children: [{
    path: 'completed',
    component: CompletedComponent,
  },{
      path: 'in-progress',
      component: InProgressComponent,
  },{
      path: 'cancelled',
      component: CancelledComponent,
  }, {
      path: 'unsatisfied',
      component: UnsatisfiedComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesRoutingModule { }

export const routedComponents = [
    ActivitiesComponent,
    CompletedComponent,
    InProgressComponent,
    CancelledComponent,
    UnsatisfiedComponent
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendMailComponent } from './send-mail.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';


const routes: Routes = [{
  path: '',
  component: SendMailComponent,
  children: [{
    path: 'mailing-list',
    component: MailingListComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendMailRoutingModule { }

export const routedComponents = [
    SendMailComponent,
    MailingListComponent,
];

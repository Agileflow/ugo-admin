import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { SendMailRoutingModule, routedComponents  } from './send-mail-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    SendMailRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [

  ],
})

export class SendMailModule{ }
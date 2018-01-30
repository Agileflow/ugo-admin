import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { BannersRoutingModule, routedComponents } from './banners-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    BannersRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [

  ],
})

export class BannersModule { }

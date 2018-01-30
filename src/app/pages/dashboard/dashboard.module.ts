import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { EchartsAreaStackComponent } from './charts/echarts-area-stack.component';
import { EchartsPieComponent } from './charts/echarts-pie.component';



@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    EchartsAreaStackComponent,
    EchartsPieComponent,
  ],

})
export class DashboardModule { }

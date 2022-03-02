import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
 
const materialComponent=[ CommonModule,
  MatIconModule,
  MatSliderModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatBadgeModule,
  MatTabsModule,
  MatTableModule,
  MatStepperModule,
];

@NgModule({
  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialsModule { }

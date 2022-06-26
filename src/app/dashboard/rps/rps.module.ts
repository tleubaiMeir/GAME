import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RPSComponent } from './rps.component';

const route: Routes = [
    {
        path: '',
        component: RPSComponent
    }
];

@NgModule({
  declarations: [RPSComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(route)
  ]
})
export class RPSModule { }

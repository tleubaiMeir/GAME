import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TwoThousandComponent } from './two-thousand.component';

const route: Routes = [
    {
        path: '',
        component: TwoThousandComponent
    }
];

@NgModule({
  declarations: [TwoThousandComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(route)
  ]
})
export class TwoThousandModule { }

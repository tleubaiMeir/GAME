import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MeComponent } from './me.component';

const route: Routes = [
    {
        path: '',
        component: MeComponent
    }
];

@NgModule({
  declarations: [MeComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(route)
  ]
})
export class MeModule { }

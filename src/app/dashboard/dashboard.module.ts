import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'chess',
                loadChildren: () => import('./chess/chess.module').then(m => m.ChessModule)
            },
            {
                path: 'tictactoe',
                loadChildren: () => import('./tictactoe/tictactoe.module').then(m => m.TictactoeModule)
            },
            {
                path: 'RPS',
                loadChildren: () => import('./rps/rps.module').then(m => m.RPSModule)
            },
            {
                path: 'TwoThousand',
                loadChildren: () => import('./two-thousand/two-thousand.module').then(m => m.TwoThousandModule)
            },
            {
                path: 'snake',
                loadChildren: () => import('./snake/snake.module').then(m => m.SnakeModule)
            },
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'me',
                loadChildren: () => import('./me/me.module').then(m => m.MeModule)
            }
        ]
    }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { AppComponent } from './app.component';
import { ActionsComponent } from './components/actions/actions.component';
import { MovesComponent } from './components/moves/moves.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }
];

@NgModule({
    declarations: [AppComponent, ActionsComponent, MovesComponent],
    imports: [BrowserModule, FormsModule, NgxChessBoardModule.forRoot(), BrowserAnimationsModule, RouterModule.forRoot(routes)],
    bootstrap: [AppComponent],
})
export class AppModule {}

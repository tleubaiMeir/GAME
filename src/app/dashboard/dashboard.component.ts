import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public routes = [
        {
          path: 'home',
          viewvalue: 'home'
        },
        {
            path: 'chess',
            viewvalue: 'chess'
        },
        {
            path: 'tictactoe',
            viewvalue: 'tic-tac-toe'
        },
        {
            path: 'RPS',
            viewvalue: 'rock-paper-scissors'
        },
        {
            path: 'TwoThousand',
            viewvalue: '2048'
        },
        {
            path: 'snake',
            viewvalue: 'Snake'
        },
        {
            path: 'me',
            viewvalue: 'About me'
        }
    ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
    public navigateTo(path: string): void {
        this.router.navigate(['dashboard', path]);
    }

}

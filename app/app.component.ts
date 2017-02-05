import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'root-view',
    template: `
    <h1>{{title}}</h1>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
}
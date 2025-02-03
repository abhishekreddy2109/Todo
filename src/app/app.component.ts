import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  showCard: boolean = true;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showCard = !this.router.url.includes('/budgetplanner');
    });
  }


  goToBudgetPlanner() {
    this.router.navigate(['/budgetplanner']);
  }
}

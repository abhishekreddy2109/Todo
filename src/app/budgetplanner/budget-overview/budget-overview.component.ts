import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-budget-overview',
  templateUrl: './budget-overview.component.html',
  styleUrls: ['./budget-overview.component.css']
})
export class BudgetOverviewComponent {
  @Input() income: { category: string, amount: number }[] = [];
  @Input() expenses: { category: string, amount: number }[] = [];

  getTotalIncome(): number {
    return this.income.reduce((total, item) => total + item.amount, 0);
  }

  getTotalExpenses(): number {
    return this.expenses.reduce((total, item) => total + item.amount, 0);
  }

  getBalance(): number {
    return this.getTotalIncome() - this.getTotalExpenses();
  }
}

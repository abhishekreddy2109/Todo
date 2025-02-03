
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './budgetplanner.component.html',
  styleUrls: ['./budgetplanner.component.css']
})
export class BudgetplannerComponent {
  title = 'budget';


  // Mock Data for Income
  income = [
    { category: 'Salary', amount: 3000 },
    { category: 'Freelance', amount: 500 },
  ];

  // Mock Data for Expenses
  expenses = [
    { category: 'Rent', amount: 1000 },
    { category: 'Groceries', amount: 200 },
    { category: 'Utilities', amount: 150 },
    { category: 'Entertainment', amount: 100 },
  ];

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

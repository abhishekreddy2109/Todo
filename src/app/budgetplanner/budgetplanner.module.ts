import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetplannerComponent } from './budgetplanner.component';
import { BudgetOverviewComponent } from './budget-overview/budget-overview.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { BudgetplannerRoutingModule } from './budgetplanner-routing.module';

@NgModule({
  declarations: [
    BudgetplannerComponent,
    BudgetOverviewComponent,
    IncomeComponent,
    ExpenseComponent,
    AddEntryComponent
  ],
  imports: [
    CommonModule,
    BudgetplannerRoutingModule
  ]
})
export class BudgetplannerModule { }

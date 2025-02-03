import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetplannerComponent } from './budgetplanner.component';

const routes: Routes = [
    { path: '', component: BudgetplannerComponent } // Default route for Budget Planner
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BudgetplannerRoutingModule { }

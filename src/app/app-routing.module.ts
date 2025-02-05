import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'add', component: TaskFormComponent },
  {
    path: 'budgetplanner',
    loadChildren: () =>
      import('./budgetplanner/budgetplanner.module').then((m) => m.BudgetplannerModule),
  },
  // {
  //   path: 'recipe',
  //   loadChildren: () => import('recipe/RecipeModule').then(m => m.RecipeModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

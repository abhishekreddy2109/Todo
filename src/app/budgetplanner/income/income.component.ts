import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {
  @Input() income: { category: string, amount: number }[] = [];
}


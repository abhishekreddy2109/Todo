import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetplannerComponent } from './budgetplanner.component';

describe('BudgetplannerComponent', () => {
  let component: BudgetplannerComponent;
  let fixture: ComponentFixture<BudgetplannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetplannerComponent]
    });
    fixture = TestBed.createComponent(BudgetplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

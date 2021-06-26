import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageIncomeExpensesComponent } from './percentage-income-expenses.component';

describe('PercentageIncomeExpensesComponent', () => {
  let component: PercentageIncomeExpensesComponent;
  let fixture: ComponentFixture<PercentageIncomeExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageIncomeExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageIncomeExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

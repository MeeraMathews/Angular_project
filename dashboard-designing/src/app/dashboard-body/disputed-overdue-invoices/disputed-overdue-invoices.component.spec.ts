import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputedOverdueInvoicesComponent } from './disputed-overdue-invoices.component';

describe('DisputedOverdueInvoicesComponent', () => {
  let component: DisputedOverdueInvoicesComponent;
  let fixture: ComponentFixture<DisputedOverdueInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputedOverdueInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputedOverdueInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

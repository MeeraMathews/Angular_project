import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArApBalanceComponent } from './ar-ap-balance.component';

describe('ArApBalanceComponent', () => {
  let component: ArApBalanceComponent;
  let fixture: ComponentFixture<ArApBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArApBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArApBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

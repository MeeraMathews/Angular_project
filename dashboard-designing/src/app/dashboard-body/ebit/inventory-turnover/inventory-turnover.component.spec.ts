import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTurnoverComponent } from './inventory-turnover.component';

describe('InventoryTurnoverComponent', () => {
  let component: InventoryTurnoverComponent;
  let fixture: ComponentFixture<InventoryTurnoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryTurnoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTurnoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

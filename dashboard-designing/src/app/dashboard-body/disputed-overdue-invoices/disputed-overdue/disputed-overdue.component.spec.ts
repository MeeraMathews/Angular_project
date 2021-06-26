import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputedOverdueComponent } from './disputed-overdue.component';

describe('DisputedOverdueComponent', () => {
  let component: DisputedOverdueComponent;
  let fixture: ComponentFixture<DisputedOverdueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputedOverdueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputedOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

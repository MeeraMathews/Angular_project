import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbitCogsComponent } from './ebit-cogs.component';

describe('EbitCogsComponent', () => {
  let component: EbitCogsComponent;
  let fixture: ComponentFixture<EbitCogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbitCogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbitCogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

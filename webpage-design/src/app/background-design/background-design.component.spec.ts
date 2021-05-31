import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundDesignComponent } from './background-design.component';

describe('BackgroundDesignComponent', () => {
  let component: BackgroundDesignComponent;
  let fixture: ComponentFixture<BackgroundDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

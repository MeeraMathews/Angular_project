import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteBodyComponent } from './website-body.component';

describe('WebsiteBodyComponent', () => {
  let component: WebsiteBodyComponent;
  let fixture: ComponentFixture<WebsiteBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

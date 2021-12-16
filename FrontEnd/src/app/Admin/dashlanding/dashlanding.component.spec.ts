import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashlandingComponent } from './dashlanding.component';

describe('DashlandingComponent', () => {
  let component: DashlandingComponent;
  let fixture: ComponentFixture<DashlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashlandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

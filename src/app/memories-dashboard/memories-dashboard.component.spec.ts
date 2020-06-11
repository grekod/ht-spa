import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesDashboardComponent } from './memories-dashboard.component';

describe('MemoriesDashboardComponent', () => {
  let component: MemoriesDashboardComponent;
  let fixture: ComponentFixture<MemoriesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

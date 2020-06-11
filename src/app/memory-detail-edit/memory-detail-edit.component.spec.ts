import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryDetailEditComponent } from './memory-detail-edit.component';

describe('MemoryDetailEditComponent', () => {
  let component: MemoryDetailEditComponent;
  let fixture: ComponentFixture<MemoryDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

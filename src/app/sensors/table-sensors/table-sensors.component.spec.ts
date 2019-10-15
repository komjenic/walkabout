import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSensorsComponent } from './table-sensors.component';

describe('TableSensorsComponent', () => {
  let component: TableSensorsComponent;
  let fixture: ComponentFixture<TableSensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSensorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

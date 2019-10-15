import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSensorsComponent } from './card-sensors.component';

describe('CardSensorsComponent', () => {
  let component: CardSensorsComponent;
  let fixture: ComponentFixture<CardSensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSensorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoriontalNavComponent } from './horiontal-nav.component';

describe('HoriontalNavComponent', () => {
  let component: HoriontalNavComponent;
  let fixture: ComponentFixture<HoriontalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoriontalNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoriontalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

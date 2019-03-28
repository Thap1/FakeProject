import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HreadresComponent } from './hreadres.component';

describe('HreadresComponent', () => {
  let component: HreadresComponent;
  let fixture: ComponentFixture<HreadresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HreadresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HreadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

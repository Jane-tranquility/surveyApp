import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoButtonComponent } from './two-button.component';

describe('TwoButtonComponent', () => {
  let component: TwoButtonComponent;
  let fixture: ComponentFixture<TwoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

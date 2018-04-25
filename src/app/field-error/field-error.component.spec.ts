import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldErrorComponent } from './field-error.component';

describe('FieldErrorComponent', () => {
  let component: FieldErrorComponent;
  let fixture: ComponentFixture<FieldErrorComponent>;
  const flightControl = {
    errors: {
      required: true
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldErrorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show errors when present', () => {
    component.flightControl = {
      errors: {
        required: true
      }
    };
    component.errors();
    setTimeout(() => {
      expect(component.showErrors()).toBeTruthy();
    }, 3000);

  });
});

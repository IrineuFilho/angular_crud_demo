import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyCustomerComponent } from './destroy-customer.component';

describe('DestroyCustomerComponent', () => {
  let component: DestroyCustomerComponent;
  let fixture: ComponentFixture<DestroyCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestroyCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestroyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

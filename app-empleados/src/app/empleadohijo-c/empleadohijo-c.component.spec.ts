import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadohijoCComponent } from './empleadohijo-c.component';

describe('EmpleadohijoCComponent', () => {
  let component: EmpleadohijoCComponent;
  let fixture: ComponentFixture<EmpleadohijoCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadohijoCComponent]
    });
    fixture = TestBed.createComponent(EmpleadohijoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

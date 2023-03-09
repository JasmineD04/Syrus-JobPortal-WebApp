import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSignUpComponent } from './employer-sign-up.component';

describe('EmployerSignUpComponent', () => {
  let component: EmployerSignUpComponent;
  let fixture: ComponentFixture<EmployerSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

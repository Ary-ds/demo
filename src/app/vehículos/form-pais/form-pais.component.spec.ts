import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPaisComponent } from './form-pais.component';

describe('FormPaisComponent', () => {
  let component: FormPaisComponent;
  let fixture: ComponentFixture<FormPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

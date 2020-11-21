import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBindedComponent } from './modal-binded.component';

describe('ModalBindedComponent', () => {
  let component: ModalBindedComponent;
  let fixture: ComponentFixture<ModalBindedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBindedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBindedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

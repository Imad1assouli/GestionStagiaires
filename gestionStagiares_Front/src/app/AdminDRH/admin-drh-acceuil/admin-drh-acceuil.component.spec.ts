import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDRHAcceuilComponent } from './admin-drh-acceuil.component';

describe('AdminDRHAcceuilComponent', () => {
  let component: AdminDRHAcceuilComponent;
  let fixture: ComponentFixture<AdminDRHAcceuilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDRHAcceuilComponent]
    });
    fixture = TestBed.createComponent(AdminDRHAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

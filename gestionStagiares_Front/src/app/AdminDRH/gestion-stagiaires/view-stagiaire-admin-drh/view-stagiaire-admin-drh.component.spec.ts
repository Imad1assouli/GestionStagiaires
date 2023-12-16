import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStagiaireAdminDrhComponent } from './view-stagiaire-admin-drh.component';

describe('ViewStagiaireAdminDrhComponent', () => {
  let component: ViewStagiaireAdminDrhComponent;
  let fixture: ComponentFixture<ViewStagiaireAdminDrhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStagiaireAdminDrhComponent]
    });
    fixture = TestBed.createComponent(ViewStagiaireAdminDrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

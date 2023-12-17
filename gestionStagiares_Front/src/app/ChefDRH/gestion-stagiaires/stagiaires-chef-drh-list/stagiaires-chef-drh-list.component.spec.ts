import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiairesChefDrhListComponent } from './stagiaires-chef-drh-list.component';

describe('StagiairesChefDrhListComponent', () => {
  let component: StagiairesChefDrhListComponent;
  let fixture: ComponentFixture<StagiairesChefDrhListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StagiairesChefDrhListComponent]
    });
    fixture = TestBed.createComponent(StagiairesChefDrhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantsListChefDrhComponent } from './encadrants-list-chef-drh.component';

describe('EncadrantsListChefDrhComponent', () => {
  let component: EncadrantsListChefDrhComponent;
  let fixture: ComponentFixture<EncadrantsListChefDrhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncadrantsListChefDrhComponent]
    });
    fixture = TestBed.createComponent(EncadrantsListChefDrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

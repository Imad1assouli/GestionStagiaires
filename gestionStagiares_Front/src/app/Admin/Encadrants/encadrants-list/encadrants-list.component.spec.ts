import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantsListComponent } from './encadrants-list.component';

describe('EncadrantsListComponent', () => {
  let component: EncadrantsListComponent;
  let fixture: ComponentFixture<EncadrantsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncadrantsListComponent]
    });
    fixture = TestBed.createComponent(EncadrantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesListDRHComponent } from './stages-list.component';

describe('StagesListComponent', () => {
  let component: StagesListDRHComponent;
  let fixture: ComponentFixture<StagesListDRHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StagesListDRHComponent]
    });
    fixture = TestBed.createComponent(StagesListDRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesChefDRHListComponent } from './stages-chef-drh-list.component';

describe('StagesChefDRHListComponent', () => {
  let component: StagesChefDRHListComponent;
  let fixture: ComponentFixture<StagesChefDRHListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StagesChefDRHListComponent]
    });
    fixture = TestBed.createComponent(StagesChefDRHListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

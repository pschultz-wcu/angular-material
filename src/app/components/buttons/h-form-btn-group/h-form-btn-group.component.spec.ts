import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HFormBtnGroupComponent } from './h-form-btn-group.component';

describe('HFormBtnGroupComponent', () => {
  let component: HFormBtnGroupComponent;
  let fixture: ComponentFixture<HFormBtnGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HFormBtnGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HFormBtnGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

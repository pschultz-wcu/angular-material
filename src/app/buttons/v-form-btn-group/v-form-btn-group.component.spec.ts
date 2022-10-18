import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VFormBtnGroupComponent } from './v-form-btn-group.component';

describe('VFormBtnGroupComponent', () => {
  let component: VFormBtnGroupComponent;
  let fixture: ComponentFixture<VFormBtnGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VFormBtnGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VFormBtnGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

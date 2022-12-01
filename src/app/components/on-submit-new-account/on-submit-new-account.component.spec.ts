import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSubmitNewAccountComponent } from './on-submit-new-account.component';

describe('OnSubmitNewAccountComponent', () => {
  let component: OnSubmitNewAccountComponent;
  let fixture: ComponentFixture<OnSubmitNewAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnSubmitNewAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnSubmitNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

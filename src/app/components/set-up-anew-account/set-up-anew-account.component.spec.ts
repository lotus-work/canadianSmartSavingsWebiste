import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpANewAccountComponent } from './set-up-anew-account.component';

describe('SetUpANewAccountComponent', () => {
  let component: SetUpANewAccountComponent;
  let fixture: ComponentFixture<SetUpANewAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetUpANewAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetUpANewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

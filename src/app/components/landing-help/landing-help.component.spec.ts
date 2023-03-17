import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHelpComponent } from './landing-help.component';

describe('LandingHelpComponent', () => {
  let component: LandingHelpComponent;
  let fixture: ComponentFixture<LandingHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

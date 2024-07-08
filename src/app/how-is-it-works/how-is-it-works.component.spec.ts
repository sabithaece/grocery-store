import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowIsItWorksComponent } from './how-is-it-works.component';

describe('HowIsItWorksComponent', () => {
  let component: HowIsItWorksComponent;
  let fixture: ComponentFixture<HowIsItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowIsItWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowIsItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

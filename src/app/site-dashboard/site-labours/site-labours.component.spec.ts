import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLaboursComponent } from './site-labours.component';

describe('SiteLaboursComponent', () => {
  let component: SiteLaboursComponent;
  let fixture: ComponentFixture<SiteLaboursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteLaboursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteLaboursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

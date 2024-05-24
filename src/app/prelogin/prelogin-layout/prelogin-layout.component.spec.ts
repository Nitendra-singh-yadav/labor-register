import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloginLayoutComponent } from './prelogin-layout.component';

describe('PreloginLayoutComponent', () => {
  let component: PreloginLayoutComponent;
  let fixture: ComponentFixture<PreloginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreloginLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreloginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

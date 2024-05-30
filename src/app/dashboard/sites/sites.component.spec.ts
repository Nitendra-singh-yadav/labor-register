import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesComponent } from './sites.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SiteComponent } from '../site/site.component';

describe('SitesComponent', () => {
  let component: SitesComponent;
  let fixture: ComponentFixture<SitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SitesComponent, SiteComponent],
      imports: [MatDialogModule, MatCardModule, MatIconModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLabourComponent } from './add-labour.component';

describe('AddLabourComponent', () => {
  let component: AddLabourComponent;
  let fixture: ComponentFixture<AddLabourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLabourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLabourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

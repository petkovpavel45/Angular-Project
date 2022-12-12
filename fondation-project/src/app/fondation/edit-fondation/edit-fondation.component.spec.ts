import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFondationComponent } from './edit-fondation.component';

describe('EditFondationComponent', () => {
  let component: EditFondationComponent;
  let fixture: ComponentFixture<EditFondationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFondationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFondationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

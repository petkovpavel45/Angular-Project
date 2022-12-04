import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFondationComponent } from './create-fondation.component';

describe('CreateFondationComponent', () => {
  let component: CreateFondationComponent;
  let fixture: ComponentFixture<CreateFondationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFondationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFondationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

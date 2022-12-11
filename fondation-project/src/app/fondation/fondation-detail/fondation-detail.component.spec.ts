import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondationDetailComponent } from './fondation-detail.component';

describe('FondationDetailComponent', () => {
  let component: FondationDetailComponent;
  let fixture: ComponentFixture<FondationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

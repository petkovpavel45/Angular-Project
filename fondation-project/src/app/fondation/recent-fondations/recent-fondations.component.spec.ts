import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentFondationsComponent } from './recent-fondations.component';

describe('RecentFondationsComponent', () => {
  let component: RecentFondationsComponent;
  let fixture: ComponentFixture<RecentFondationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentFondationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentFondationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

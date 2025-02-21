import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedWorksPageComponent } from './completed-works-page.component';

describe('CompletedWorksPageComponent', () => {
  let component: CompletedWorksPageComponent;
  let fixture: ComponentFixture<CompletedWorksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletedWorksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedWorksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

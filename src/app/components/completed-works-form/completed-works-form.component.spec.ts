import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedWorksFormComponent } from './completed-works-form.component';

describe('CompletedWorksFormComponent', () => {
  let component: CompletedWorksFormComponent;
  let fixture: ComponentFixture<CompletedWorksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletedWorksFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedWorksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

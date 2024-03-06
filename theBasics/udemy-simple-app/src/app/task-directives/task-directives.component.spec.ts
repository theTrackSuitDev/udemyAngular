import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDirectivesComponent } from './task-directives.component';

describe('TaskDirectivesComponent', () => {
  let component: TaskDirectivesComponent;
  let fixture: ComponentFixture<TaskDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskDirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

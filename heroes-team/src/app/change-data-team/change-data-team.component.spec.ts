import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDataTeamComponent } from './change-data-team.component';

describe('ChangeDataTeamComponent', () => {
  let component: ChangeDataTeamComponent;
  let fixture: ComponentFixture<ChangeDataTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDataTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDataTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

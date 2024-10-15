import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewtelevisionComponent } from './addnewtelevision.component';

describe('AddnewtelevisionComponent', () => {
  let component: AddnewtelevisionComponent;
  let fixture: ComponentFixture<AddnewtelevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddnewtelevisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewtelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

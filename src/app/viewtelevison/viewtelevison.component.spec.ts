import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtelevisonComponent } from './viewtelevison.component';

describe('ViewtelevisonComponent', () => {
  let component: ViewtelevisonComponent;
  let fixture: ComponentFixture<ViewtelevisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewtelevisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtelevisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

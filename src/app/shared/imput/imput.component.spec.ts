import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputComponent } from './imput.component';

describe('ImputComponent', () => {
  let component: ImputComponent;
  let fixture: ComponentFixture<ImputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

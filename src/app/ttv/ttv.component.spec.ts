import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtvComponent } from './ttv.component';

describe('TtvComponent', () => {
  let component: TtvComponent;
  let fixture: ComponentFixture<TtvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

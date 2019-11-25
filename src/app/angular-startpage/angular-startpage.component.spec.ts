import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStartpageComponent } from './angular-startpage.component';

describe('AngularStartpageComponent', () => {
  let component: AngularStartpageComponent;
  let fixture: ComponentFixture<AngularStartpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularStartpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxTestComponent } from './message-box-test.component';

describe('MessageBoxTestComponent', () => {
  let component: MessageBoxTestComponent;
  let fixture: ComponentFixture<MessageBoxTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBoxTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

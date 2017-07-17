import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelFeedComponent } from './channel-feed.component';

describe('ChannelFeedComponent', () => {
  let component: ChannelFeedComponent;
  let fixture: ComponentFixture<ChannelFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointDemo } from './endpoint-demo';

describe('EndpointDemo', () => {
  let component: EndpointDemo;
  let fixture: ComponentFixture<EndpointDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndpointDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndpointDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

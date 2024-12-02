import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourcomponentComponent } from './yourcomponent.component';

describe('YourcomponentComponent', () => {
  let component: YourcomponentComponent;
  let fixture: ComponentFixture<YourcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameItemComponent } from './username-item.component';

describe('UsernameItemComponent', () => {
  let component: UsernameItemComponent;
  let fixture: ComponentFixture<UsernameItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

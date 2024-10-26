import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationIconButtonComponent } from './navigation-icon-button.component';

describe('HeaderIconButtonComponent', () => {
  let component: NavigationIconButtonComponent;
  let fixture: ComponentFixture<NavigationIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationIconButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

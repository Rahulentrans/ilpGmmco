import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbgComponent } from './loginbg.component';

describe('LoginbgComponent', () => {
  let component: LoginbgComponent;
  let fixture: ComponentFixture<LoginbgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginbgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const authSpy = jasmine.createSpyObj('AuthService', ['login']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [FormsModule], // FormsModule hozzáadása
      providers: [
        { provide: AuthService, useValue: authSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login and navigate to home on successful login', () => {
    authService.login.and.returnValue(true);

    // Mock user input
    component.onLoginSubmit({ value: { logInUserName: 'user', logInUserPassword: 'secret' } });

    expect(authService.login).toHaveBeenCalledWith('user', 'secret');
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should show alert on failed login', () => {
    spyOn(window, 'alert');
    authService.login.and.returnValue(false);

    component.onLoginSubmit({ value: { logInUserName: 'user', logInUserPassword: 'wrongpassword' } });

    expect(authService.login).toHaveBeenCalledWith('user', 'wrongpassword');
    expect(window.alert).toHaveBeenCalledWith('Hibás felhasználónév vagy jelszó!');
  });
});

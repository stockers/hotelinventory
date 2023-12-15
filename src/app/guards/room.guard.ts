import { CanActivateChildFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject} from '@angular/core';

export const roomGuard: CanActivateChildFn = (childRoute, state) => {
  const loginService : LoginService = inject(LoginService);
  const router : Router = inject(Router);
  console.log("LoginService.isAdmin = "+loginService.isAdmin);    
  
  if(loginService.isLoggedIn && loginService.isAdmin)
    return true;
  else
  {
    return false; // return false rather than redirect in this case
  }
};

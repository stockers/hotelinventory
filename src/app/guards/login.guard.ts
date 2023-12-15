import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject} from '@angular/core';


export const loginGuard: CanActivateFn = (route, state) => {
  const loginService : LoginService = inject(LoginService);
  const router : Router = inject(Router);
  console.log("LoginService.isLoggedIn = "+loginService.isLoggedIn);    
  //return loginService.isLoggedIn; //doesn't work even though its a Boolean !?
  if(loginService.isLoggedIn)
    return true;
  else
  {
    return router.navigate(['/login']); //   return a redirect ! 
  }
}

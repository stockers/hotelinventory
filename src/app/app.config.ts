import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';

/* not used
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    {
       provide: HTTP_INTERCEPTORS,
       useClass : RequestInterceptor,       
       multi: true
    }
  ]
};
/*
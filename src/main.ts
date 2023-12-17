import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ErrorHandler, enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

import { BrowserModule } from '@angular/platform-browser';

import { ROUTES, RouterModule, provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { RequestInterceptor } from './app/request.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { GlobalErrorHandlerService } from './app/services/global.error.handler.service';


if(environment.production) {
  console.log("PRODUCTION MODE ENABLED");
  enableProdMode();
}
bootstrapApplication(AppComponent, {
        providers: [
      provideRouter(routes),
      provideHttpClient(withFetch()),
      provideAnimations(),
      {provide: ErrorHandler, useClass: GlobalErrorHandlerService}
    ]
  }
 // appConfig
  )
  .catch((err) => console.error(err));


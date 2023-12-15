import {InjectionToken} from '@angular/core';

export const storageToken = new InjectionToken<any>('browser storage', {
    providedIn: 'root',
    factory() {
        return sessionStorage;  // or localStroage;
        // seems to be implicit window.localStorage (Storage type)
        // which is browser key/value local store for browser window 
        // (all tab instances for this url have access)
    }
});

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './login/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService,
        private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger
        if (req.url.indexOf('basicauth') === -1) {
            if (this.authenticationService.isUserLoggedIn() && (this.authenticationService.username != undefined)) {
                const authReq = req.clone({
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${window.btoa(this.authenticationService.username + ":" + this.authenticationService.password)}`
                    })
                });
                return next.handle(authReq);
            } else {
                // return next.handle(req);
               // window.alert("please login again");
                this.authenticationService.logout();
                this.router.navigate(['/logout']);
            }
        } else {
            return next.handle(req);
        }
    }
}
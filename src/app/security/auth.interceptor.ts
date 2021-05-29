import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { LoginService } from "./login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    //Injector -> pode injetar qualquer serviço, assim, não se faz necesário criar uma referencia dele no construtor 
    constructor(private injector: Injector) {}

    //intercepta os requests passados para o backend
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this.injector.get(LoginService)

        if(loginService.isLoggedIn()){
            //customiza o novo request, setando um header com o valor do Token para permir o acesso
            const authRequest = request.clone(
                {setHeaders:{'Authorization': `Bearer ${loginService.user.accessToken}`}}
            )
            return next.handle(authRequest)
        }else{
            return next.handle(request)
        }

        //versção antiga para setar headers, era feito manualmente com cada componente, com a nova forma se pode definir o intercept para todos, sem ter que repetir código

        /*
        let headers = new HttpHeaders()
        if(this.loginService.isLoggedIn()){
            headers = headers.set(`Authorization`, `Bearer ${this.loginService.user.accessToken}`)
        }
        */

        
    }
}
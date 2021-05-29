import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from "app/app.api";
import {User} from "./user.model";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { NavigationEnd, Router } from "@angular/router";


@Injectable()
export class LoginService{

    user: User
    lastUrl: string

    constructor(private http: HttpClient, private router: Router){

        //event -> monitora todos os eventos que estarão acontecendo no browser
        //filter -> filtra os eventos para obter apenas os relacionados a NavigationEnd
        this.router.events.filter(e => e instanceof NavigationEnd)
            .subscribe( (e: NavigationEnd) => this.lastUrl = e.url)
    }

    isLoggedIn(): boolean {
        return this.user !== undefined
    }

    login(email: string, password: string): Observable<User>{
        return this.http.post<User>(`${MEAT_API}/login`, {email: email, password: password})
                        .do(user => this.user = user)
    }

    logout(){
        this.user = undefined    
    }

    handleLogin(path: string = this.lastUrl){
        // btoa -> tira os caracteres que deixam a Url 'bagunçada', a deixando mais limpa.
        this.router.navigate(['/login', btoa(path)])
    }

}
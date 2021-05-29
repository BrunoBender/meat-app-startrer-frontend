import {Restaurant} from "./restaurant/restaurant.model";
import {MEAT_API} from "app/app.api"
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';


@Injectable()
export class RestaurantsService{
    constructor(private http: HttpClient){}

    getRestaurants(search?: string): Observable<Restaurant[]>{
        let params: HttpParams = undefined
        if(search){
            params = new HttpParams().append('q', search)
        }

        //converte o retorno response para o tipo json, podendo assim retornar um Observable<Restorant[]>
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`,{params: params})
    }

    getRestaurantById(id: string): Observable<Restaurant>{
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    getReviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    getMenuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }
}
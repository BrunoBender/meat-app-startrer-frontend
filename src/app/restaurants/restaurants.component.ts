import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  animations:[
    trigger('toggleSearch',[
      state('hidden', style({
        opacity: 0,
        "max-height":"0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "20px",
        "margin-bottom" : "20px",
        "margin-top" : "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})

export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden'
  restaurants: Restaurant[]

  searchForm: FormGroup
  searchControl: FormControl
 
  constructor(private restaurantsService: RestaurantsService, 
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    //passa o valor recebido para a propriedade this.restaurants
    this.restaurantsService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants); 

    this.searchControl = this.formBuilder.control('')

    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    })

    //O valueChanges irá executar sempre que algo for alterado no imput, enviando uma noticação para o subscribe
    this.searchControl.valueChanges
      //adiciona um tempo entre uma execução e outra, evitando a chamada ao banco o tempo todo
      .debounceTime(500)
      //evita realizar mais de uma chama com o imput igual em um curto periodo de tempo
      .distinctUntilChanged()
      .switchMap(searchTerm => 
        this.restaurantsService
        .getRestaurants(searchTerm)
        .catch(error=>Observable.from([])))
      .subscribe(restaurants => this.restaurants = restaurants)

  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}

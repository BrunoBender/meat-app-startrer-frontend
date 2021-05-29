import { Component, Injectable, OnInit } from '@angular/core';
import { NotificationService } from 'app/shared/messages/notification.service';
import { ShoppingCartService } from './shopping-cart.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';


@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  animations:[
    trigger('row',[
      state('ready', style({opacity: 1})),
      transition('void=> ready', animate('300ms 0s ease-in', keyframes([
        style({opacity:0 ,transform: 'translateX(-30px)', offset:0}),
        style({opacity:0.8 ,transform: 'translateX(10px)', offset:0.8}),
        style({opacity:1 ,transform: 'translateX(0px)', offset:1}),
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({opacity:1 ,transform: 'translateX(0px)', offset:0}),
        style({opacity:0.8 ,transform: 'translateX(-10px)', offset:0.2}),
        style({opacity:0 ,transform: 'translateX(30px)', offset:1}),
      ])))
    ])
    
  ]
})

export class ShoppingCartComponent implements OnInit {

  rowState = 'ready'
  constructor(private shoppingCartService: ShoppingCartService, private notificationService: NotificationService) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total()
  }

  clear(){
    this.shoppingCartService.clear();
    this.notificationService.notify(`Carrinho limpo`);
  }

  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }

}

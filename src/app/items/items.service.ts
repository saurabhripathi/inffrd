import { Injectable } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public cartList = new BehaviorSubject<any>(null)

  constructor() { }
  getItems(){
    return of({items:[{id:1,quantity:20,brand:'Flying Machine',color:'green',price:500},
    {id:2,quantity:20,brand:'Wrongn',color:"blue",price:500},
    {id:3,quantity:20,brand:'Rodstar',color:'red',price:500},
    {id:4,quantity:20,brand:'U.C.B',color:'green',price :1000},
    {id:5,quantity:20,brand:'Arrow',color:'black',price :2000},
    {id:6,quantity:20,brand:'Vimal',color:'white',price :2000},
    {id:7,quantity:20,brand:'Blackberry',color:'orange',price :2000},
    {id:8,quantity:20,brand:'John Player',color:'green',price :2000},
    {id:9,quantity:20,brand:'US Polo',color:'blue',price :2000},
    {id:10,quantity:20,brand:'Red Tape',color:'brown',price :2000},
    {id:11,quantity:20,brand:'Red Cheif',color:'black',price :2000},
    {id:12,quantity:20,brand:'Woodland',color:"blue",price:500},
    {id:13,quantity:20,brand:'War Craft',color:'red',price:500},
    {id:14,quantity:20,brand:'Levis',color:'yellow',price :1000},


  ]})
  }

  cartListSend(cartList){
    this.cartList.next(cartList)
  }
}

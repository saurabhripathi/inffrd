import { Component, OnInit, OnDestroy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { ItemsService } from '../../items.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormArrayName, FormArray } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy, DoCheck {
  ngDoCheck(): void {

  }

  cartListArray: any = []
  sub: Subscription
  totalAmount: number = 0
  cartFg: FormGroup
  items: any = 0

  constructor(private readonly itemsService: ItemsService,
    private readonly cdrf:ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.cartListArray)
    this.sub = this.itemsService.cartList.subscribe((cartArray) => {
      if (cartArray) {
        this.cartListArray = this.cartListArray.concat(cartArray)
        console.log(this.cartListArray )
      }

    })

    this.cartListArray.length > 0 ? this.calculateTotalAmount() : null
    this.itemsInCart()







  }

  ngOnDestroy(): void {
    // this.sub./unsubscribe()

  }
  calculateTotalAmount() {

    for (let x of this.cartListArray) {
      this.totalAmount = this.totalAmount + x.price * (parseInt(x.addQuantity))
    }

  }


  itemsInCart() {
    for (let x of this.cartListArray) {
      this.items = parseInt(this.items) + parseInt(x.addQuantity)
    }
  }

  change(e, id,i) {
    const r = /^[0-9]{1,}$/
    let previousAddQuantity = this.cartListArray[i].addQuantity
    let match = this.matchExact(r, e.target.value)
    if (match) {
      // this.cartListArray.forEach((item, index) => {

      //   if (item.id === id) {
      //     let tempItem = { ...item }
      //     tempItem.addQuantity = e.target.value
      //     this.cartListArray[index] = tempItem
      //   }
      // })
      if(e.target.value<=this.cartListArray[i].quantity){
        this.cartListArray[i]['outOfStock']= false
        console.log(  this.cartListArray)
        let tempItem =  {...this.cartListArray[i]}
        tempItem.addQuantity = e.target.value
        this.cartListArray[i] = tempItem
       

       
      }
      else{
        this.cartListArray[i]['outOfStock']= true
     
        // this.cartListArray[i].addQuantity = parseInt(previousAddQuantity)
        // this.cdrf.detectChanges()
        // console.log(this.cartListArray)

      }
      this.totalAmount = 0
      this.items = 0
      this.calculateTotalAmount()
      this.itemsInCart()
    
    }

  }

  matchExact(r, str) {
    var match = str.match(r);
    return match && str === match[0];
  }


  removeClicked(id) {

    this.cartListArray.forEach((item, index) => {
      if (item.id === id) {
        this.cartListArray.splice(index, 1)
      }
    })
    this.totalAmount = 0
    this.items = 0
    this.calculateTotalAmount()
    this.itemsInCart()


  }



}

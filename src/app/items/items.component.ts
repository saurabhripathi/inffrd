import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ItemsService } from './items.service';
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemsArray: any = []
  cartArray: any = []
  itemFg: FormGroup
  searchProduct: any = null
  cartView: boolean = false
  @ViewChild('ref') ref: ElementRef

  constructor(private readonly itemsService: ItemsService,
    private cdrf: ChangeDetectorRef,
    private readonly router: Router) { }

  ngOnInit(): void {


    this.itemsService.getItems().subscribe((response) => {
      this.itemsArray = response.items
      this.setUpFormControl()

    })

    this.itemFg.get('searchProduct').valueChanges.subscribe((value) => {
      this.searchProduct = value
    })


  }

  setUpFormControl() {
    this.itemFg = new FormGroup({
      searchProduct: new FormControl(''),
      quantity: new FormControl('')

    })

  }

  click(x: any,i) {

    console.log(i)
    let temp = { ...x, addQuantity: 1 }
   let index= this.itemsArray.findIndex((item,index)=>{
      return item.id === x.id
    })
    this.itemsArray[index]['isAdded'] = true


    // if (this.checkAvailableQunt(temp) === false) {
    //   const index = this.cartArray.findIndex((item, index) => {
    //     return item.id === temp.id

    //   })


      // if (index !== -1) {

        // this.cartArray[index] = { ...temp, addQuantity: parseInt(this.cartArray[index].addQuantity) + parseInt(temp.addQuantity) }
      // }
      // else {

        this.cartArray.push(temp)


      }


    











  
  clickOnCart() {
    this.itemsService.cartListSend(this.cartArray)
    this.router.navigate(['/cart'])

  }


  checkAvailableQunt(temp: any) {

    const index = this.itemsArray.findIndex((item, index) => {
      return item.id === temp.id

    })
    console.log(index)
    if (this.itemsArray[index].quantity < temp.addQuantity) {

      this.itemsArray[index]['outOfStock'] = true

      return true

    }
    else {

      this.itemsArray[index]['outOfStock'] = false
      this.itemsArray[index].quantity = this.itemsArray[index].quantity - temp.addQuantity
      temp['remaining-quantity'] = this.itemsArray[index].quantity
      return false

    }

  }


  sort(){
    this.itemsArray.sort(function(a, b){
      if(a.brand < b.brand) { return -1; }
      if(a.brand > b.firstname) { return 1; }
      return 0;
  })
    
  }

}


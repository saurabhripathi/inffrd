import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'items'
})
export class ItemsPipe implements PipeTransform {

  transform(value: any,filter:any): any {
    console.log(value)
    if(filter!==null){
      const newValue= value.filter((item,index)=>{
        return (item.brand.toLowerCase().includes(filter.toLowerCase()) || 
        item.color.toLowerCase()===(filter.toLowerCase()))
      })
      return newValue

    }
   else{
    return value
   }
    

    ;
  }

}

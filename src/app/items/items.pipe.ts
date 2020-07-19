import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'items',
  pure :false
})
export class ItemsPipe implements PipeTransform {

  transform(value: any,filter:any): any {
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

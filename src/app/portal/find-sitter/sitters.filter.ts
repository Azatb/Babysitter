import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Sitter } from '../../entities/sitter';
@Pipe({name: 'filterSitters'}) // giver reference til find-stter.html
@Injectable()  // instanc = error
export class FilterSitters implements PipeTransform { 
   // for at create en pipe skal man implementer en pipetransform
        transform(items: Sitter[], search: number): any {

        if (search != null){
               return items.filter(item => item.hourlyWage < search);
               // returnere mindre eller ligmed
        }
        else{
                return items;
        }
	// your custom code here
 }
}

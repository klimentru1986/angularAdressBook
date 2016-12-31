import {Pipe, PipeTransform} from "@angular/core";
import {IContact} from "../icontact";

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(value: IContact[], args: string): IContact[] {
    if(!value){
      return [];
    }
    let inputText = args.toLowerCase();
    if (inputText) {
      return value.filter(contact => contact.name.toLowerCase().indexOf(inputText) !== -1);
    } else {
      return value;
    }
  }
}

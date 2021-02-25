
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'pipeType'
})
export class SearchTypePipe implements PipeTransform {
  transform(values, search = ''): any {
    if(!search.trim()) {
      return values
    }

    return values.filter(value => {
      return value.phone.toLowerCase().includes(search.toLowerCase())
    })
  }
}

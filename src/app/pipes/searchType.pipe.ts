
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'pipeType'
})
export class SearchTypePipe implements PipeTransform {
  transform(values, search = ''): any {
    if(!search.trim() || search == 'Все') {
      return values
    }

    return values.filter(value => {
      return value.postId == search
    })
  }
}

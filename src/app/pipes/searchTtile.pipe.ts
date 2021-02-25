
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'pipeTitle'
})
export class SearchTitlePipe implements PipeTransform {
  transform(values, search = ''): any {
    if(!search.trim()) {
      return values
    }

    return values.filter(value => {
      return value.title.toLowerCase().includes(search.toLowerCase())
    })
  }
}

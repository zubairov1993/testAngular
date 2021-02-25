import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'pipeSearch'
})
export class SearchPipe implements PipeTransform {
  transform(values: any, arg1: any, arg2: any, arg3: any): any {
    if (arg1 == undefined && arg2 == undefined && arg3 == undefined) {
      return values
    }

    let args1 = values.filter(value => value.email == arg1)
    let args2 = values.filter(value => value.email == arg2)
    let args3 = values.filter(value => value.email == arg3)

    let args = [...args1, ...args2, ...args3]

    return (args)
  }

}

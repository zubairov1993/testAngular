import {Injectable} from '@angular/core'

export const users = [
  {
    title: ',,,,,,,,,',
    email: 'Fort Lauderdale',
    phone: 'Barge',
  },
  {
    title: 'jjjjjjjff',
    email: 'Port Canaveral',
    phone: 'High Speed Craft',
  },
  {
    title: 'jjjjjjj',
    email: 'Fort Lauderdale',
    phone: 'High Speed Craft',
  },
  {
    title: 'yyyyyyyy',
    email: 'Port of Los Angeles',
    phone: 'Cargo',
  },
  {
    title: 'uuuuuuuuuu',
    email: 'Fort Lauderdale',
    phone: 'Barge'
  },
  {
    title: 'mmmmmmmmmm',
    email: 'Port of Los Angeles',
    phone: 'High Speed Craft'
  },
  {
    title: 'nnnnnnnnnnnnn',
    email: 'Fort Lauderdale',
    phone: 'Tug',
  },
  {
    title: 'hhhhhhhhhh',
    email: 'Port of Los Angeles',
    phone: 'Cargo'
  },
  {
    title: 'ggggggggggggg',
    email: 'Port Canaveral',
    phone: 'Barge',
  },
  {
    title: 'ffffffff',
    email: 'Fort Lauderdale',
    phone: 'High Speed Craft',
  },
  {
    title: 'bbbbbbbbb',
    email: 'Port of Los Angeles',
    phone: 'Tug',
  },
  {
    title: '',
    email: 'Port of Los Angeles',
    phone: 'Barge',
  },
  {
    title: 'xxxxxxx',
    email: 'Port of Los Angeles',
    phone: 'High Speed Craft',
  },
  {
    title: 'dddddddd',
    email: 'Fort Lauderdale',
    phone: 'Cargo',
  },
  {
    title: 'bbbbbbbbb',
    email: 'Port Canaveral',
    phone: 'Barge',
  },
  {
    title: 'vvvvvvvvv',
    email: 'Port of Los Angeles',
    phone: 'High Speed Craft',
  },
  {
    title: 'qqqqqqqqq',
    email: 'Fort Lauderdale',
    phone: 'Cargo',
  },
  {
    title: 'aaaaaaaa',
    email: 'Port of Los Angeles',
    phone: 'Barge',
  },
  {
    title: 'wwwwwwwww',
    email: 'Fort Lauderdale',
    phone: 'High Speed Craft',
  },
  {
    title: 'ddddd',
    email: 'Port of Los Angeles',
    phone: 'Barge',
  },
]

///dssssssssssssssssssssjiojeiwwwwwwwwwwwm
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public users = users
  public dataApi: Array<any>

  public getDataApi() {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  public getUserss(): Array<any> {

    return this.users
  }

}

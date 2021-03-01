import {Injectable} from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import {HttpClient} from '@angular/common/http'


export interface DataList {
  body: string
  email: string
  id: number
  name: string
  postId: number
}

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  public dataApi: BehaviorSubject<[]> = new BehaviorSubject<[]>([])

  constructor(private http: HttpClient) {}

  getDataApi(): Observable<DataList[]> {
    this.http.get('https://jsonplaceholder.typicode.com/comments?_limit=20')
      .pipe(map(elem => {
        const dat = JSON.parse(JSON.stringify(elem))
        this.dataApi.next(dat)
      })).subscribe()
    return this.dataApi
  }
}

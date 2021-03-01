import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataList, SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.scss']
})
export class PageCardComponent implements OnInit {
public page$: BehaviorSubject<DataList[]> = new BehaviorSubject<DataList[]>([])

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id
    this.sharedService.getDataApi().pipe(map(page => {
      if (page) {
        return page.filter(page => {
          return page.id == id
        })
      }
    })).subscribe(page => this.page$.next(page))
  }
}

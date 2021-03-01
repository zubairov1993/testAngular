import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataList, SharedService } from '../services/shared.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  public dataApi$: Observable<DataList[]>
  public pageOfItems: Array<any>;
  public checkedList: Array<any>
  public searchTitle: string
  public searchType: string
  public arg1: string
  public arg2: string
  public arg3: string

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.dataApi$ = this.sharedService.getDataApi()
  }

  onOptionChange(value) {
    this.searchType = value
   }

  onChangePage(pageOfItems: DataList[]) {
    this.pageOfItems = pageOfItems;
  }

  shareCheckedList(item: any[]) {
    this.checkedList = item
    if (this.checkedList[0]) {
      this.arg1 = this.checkedList[0]
    }
    if (this.checkedList[1]) {
      this.arg2 = this.checkedList[1]
    }
    if (this.checkedList[2]) {
      this.arg3 = this.checkedList[2]
    }
  }
}

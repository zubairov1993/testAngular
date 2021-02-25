import { Component, OnInit } from '@angular/core';
import { CheckboxItem } from '../checkbox/checkbox';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  public users: Array<any>
  public pageOfItems: Array<any>;
  public checkedList: Array<any>
  public searchTitle: string
  public searchType: string
  public arg1: string
  public arg2: string
  public arg3: string


  public userRoles = [
    { id: 1, name: 'Barge' },
    { id: 2, name: 'Cargo' },
    { id: 3, name: 'High Speed Craft' },
    { id: 4, name: 'Tug' }
  ];


  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.users = this.sharedService.getUserss()
    this.sharedService.getDataApi()
  }

  onRolesChange(value) {
    this.searchType = value

   }


  onChangePage(pageOfItems: Array<any>) {
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

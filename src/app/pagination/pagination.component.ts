import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import paginate = require('jw-paginate');

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 1;

  pager: any = {};

  ngOnInit() {
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  private setPage(page: number) {
    this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages);

    let shuffledArr = this.items.sort(function(){
      return Math.random() - 0.5;
    });

    let pageOfItems = shuffledArr.slice(this.pager.startIndex, this.pager.endIndex + 1);

    this.changePage.emit(pageOfItems);
  }
}

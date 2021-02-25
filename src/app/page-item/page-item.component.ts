import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.scss']
})
export class PageItemComponent implements OnInit {
  @Input('title') titleProps: string
  @Input('email') emailProps: string
  @Input('phone') phoneProps: string

  constructor() { }

  ngOnInit(): void {
  }

}

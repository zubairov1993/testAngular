import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.scss']
})
export class PageItemComponent implements OnInit {
  @Input('id') idProps: string
  @Input('title') titleProps: string
  @Input('email') emailProps: string
  @Input('number') numberProps: string

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onToPage(): void {
    this.router.navigate([`/item/${this.idProps}`])
  }

}

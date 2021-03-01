import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Output() toggle = new EventEmitter<any[]>();

  public options = [
    { name: 'Все'},
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' }
  ];

  changeRadio(event) {
    this.toggle.emit(event.target.value);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  public selectedValue
  @Input() options = Array<any>();
  @Output() toggle = new EventEmitter<any[]>();
  constructor() { }



  changeRadio(event) {
    this.selectedValue = event.target.value
    console.log(this.selectedValue);
    this.toggle.emit(this.selectedValue);
  }



}

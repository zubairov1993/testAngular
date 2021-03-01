import { Component, Output, EventEmitter, OnInit } from '@angular/core';

export interface List {
  value: string
  checked: boolean
}

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  public showDropDown = false
  public checkedList: any[];
  public list: List[]

  @Output() shareCheckedList = new EventEmitter();

  constructor() {
    this.checkedList = [];
  }

  ngOnInit(): void {
    this.list = [
      {value :"1", checked : false},
      {value :"2", checked : false},
      {value :"3", checked : false},
      {value :"4", checked : false},
    ]
  }

  getSelectedValue(event, value: String) {
    console.log(event);
    this.list.map(list => {
      if (list.value == value) {
        list.checked = event.target.checked
      }
    })

    if(event.target.checked){
      this.checkedList.push(value);
    } else {
      let index = this.checkedList.indexOf(value);
      this.checkedList.splice(index,1);
    }
    this.shareCheckedlist();
  }

    shareCheckedlist(){
      this.shareCheckedList.emit(this.checkedList);
    }

}

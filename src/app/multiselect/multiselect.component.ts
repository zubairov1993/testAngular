import { Component, Output, EventEmitter, OnInit } from '@angular/core';

export interface List {
  name: string
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
      {name :'Fort Lauderdale', checked : false},
      {name :'Port of Los Angeles', checked : false},
      {name :'Port Canaveral', checked : false}
    ]
  }

  getSelectedValue(event, value: String) {
    console.log(event);
    this.list.map(list => {
      if (list.name == value) {
        list.checked = event.target.checked
      }
    })
    console.log(this.list);

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

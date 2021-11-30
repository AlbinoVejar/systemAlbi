import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() showMenu: EventEmitter<boolean> = new EventEmitter();

  menu: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  public ChangeMenu(){
    this.menu = !this.menu;
    this.showMenu.emit(this.menu);
  }
}

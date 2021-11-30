import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  showMenu: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  ChangeMenu(value: boolean){
    this.showMenu = value;
  }
}

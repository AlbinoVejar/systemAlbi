import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inputs-readonly-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() form: FormGroup;
  hasBrothers: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}

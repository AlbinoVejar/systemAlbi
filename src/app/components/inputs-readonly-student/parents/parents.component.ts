import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inputs-readonly-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}

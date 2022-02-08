import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent-inputs',
  templateUrl: './parent-inputs.component.html',
  styleUrls: ['./parent-inputs.component.scss']
})
export class ParentInputsComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}

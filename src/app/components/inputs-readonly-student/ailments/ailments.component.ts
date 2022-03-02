import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inputs-readonly-ailments',
  templateUrl: './ailments.component.html',
  styleUrls: ['./ailments.component.scss']
})
export class AilmentsComponent implements OnInit {
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}

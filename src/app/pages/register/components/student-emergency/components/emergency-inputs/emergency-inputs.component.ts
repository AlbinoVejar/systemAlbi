import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency-inputs',
  templateUrl: './emergency-inputs.component.html',
  styleUrls: ['./emergency-inputs.component.scss']
})
export class EmergencyInputsComponent implements OnInit {
  @Input() emergency: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}

import { StudentService } from './../../../services/student.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

enum TABS{
  main = 0,
  parents = 1,
  ailments = 2,
  emergency = 3,
  billing = 4,
  card = 5
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('staticTabs', {static: false}) staticTabs?: TabsetComponent;
  tabs = TABS;
  constructor(
    private serviceStudent: StudentService,
  ) { }

  ngOnInit() {
  }

  public goBack(tab: number){
    this.selectTab(tab - 1);
  }
  //Gets Forms
  public GetMainForm(data: any){
    this.selectTab(this.tabs.parents);
  }
  public GetAilmentsForm(data: any){
    this.selectTab(this.tabs.emergency);
  }
  public GetParentsForm(data: any){
    this.selectTab(this.tabs.ailments);
  }
  public GetEmergencyForm(data: any){
    this.selectTab(this.tabs.billing);
  }
  public GetBillingForm(data: any){
    this.selectTab(this.tabs.card);
  }
  public GetStudentCardForm(data: any){
    // this.SaveStudent();
  }
  private selectTab(tab: number){
    this.staticTabs.tabs[tab] &&
    (this.staticTabs.tabs[tab].active = true);
  }
  //Methos to API
  private async SaveStudent(data: any){
    const result = await this.serviceStudent.StoreStudent(data);
    return result;
  }
  
}

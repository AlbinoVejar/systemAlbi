import { StudentService } from './../../../services/student.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Student } from './../../../models/student';
import { Ailments } from 'src/models/ailments';
import { Parent } from 'src/models/parent';
import { Emergency } from 'src/models/emergency';
import { Billing } from 'src/models/billing';
import { Card } from 'src/models/card';

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
  @ViewChild('staticTabs', {static: true}) staticTabs?: TabsetComponent;
  newStudent: Student = new Student();
  tabs = TABS;
  constructor(
    private serviceStudent: StudentService,
  ) {
  }

  ngOnInit() {
  }

  public goBack(tab: number){
    this.selectTab(tab - 1);
  }
  private TransformMainForm(data: any){
    const date = `${data.bornDate.year}/${data.bornDate.month}/${data.bornDate.day}`;
    this.newStudent.yearSchool = data.yearSchool;
    this.newStudent.campus = data.campus;
    this.newStudent.section = data.section;
    this.newStudent.grade = data.grade;
    this.newStudent.last_name_first = data.lastFirstName;
    this.newStudent.last_name_second = data.lastSecondName;
    this.newStudent.names = data.names;
    this.newStudent.born_date = date != "null/null/null" ? date : null;
    this.newStudent.born_place = data.bornPlace;
    this.newStudent.address = data.address;
    this.newStudent.colony = data.col;
    this.newStudent.postal_code = data.postalCode;
    this.newStudent.phone = data.phone;
    this.newStudent.curp = data.curp;
    this.newStudent.height = data.height;
    this.newStudent.weight = data.weight;
    this.newStudent.blood_type = data.bloodType;
    this.newStudent.glasses = data.glasess;
    this.newStudent.alergic = data.alergic;
    this.newStudent.last_school_name = data.lastSchoolName;
    this.newStudent.brothers_names = data.brothersNames;
    this.newStudent.id_branch = 1;
  }
  private TransformAilemnt(data: any){
    let objAilment = new Ailments();
    objAilment = data;
    
    this.newStudent.ailments = objAilment;
  }
  private TransformParent(data: any){
    let objParentFather = new Parent();
    let objParentMother = new Parent();
    //Father
    objParentFather = data.fatherData;
    //Mother
    objParentMother = data.motherData;
    
    this.newStudent.father = objParentFather;
    this.newStudent.mother = objParentMother;
  }
  private TransformEmergency(data: any){
    this.newStudent.emergency == undefined && (this.newStudent.emergency = []);
    let objEmergency1 = new Emergency();
    let objEmergency2 = new Emergency();
    let objEmergency3 = new Emergency();

    objEmergency1 = data.family1;
    objEmergency2 = data.family2;
    objEmergency3 = data.family3;
    this.newStudent.emergency.push(objEmergency1,objEmergency2, objEmergency3);
  }
  private TransformBilling(data: any){
    let objBilling = new Billing();
    objBilling = data;
    this.newStudent.billing = objBilling;
  }
  private TransformCard(data: any){
    let objCard = new Card();
    objCard = data;
    this.newStudent.card = objCard;
  }
  //Gets Forms
  public GetMainForm(data: any){
    if(data){
      this.TransformMainForm(data);
      this.selectTab(this.tabs.parents);
    }
  }
  public GetAilmentsForm(data: any){
    if(data)
      this.TransformAilemnt(data);
    this.selectTab(this.tabs.emergency);
  }
  public GetParentsForm(data: any){
    if(data)
      this.TransformParent(data);
    this.selectTab(this.tabs.ailments);
  }
  public GetEmergencyForm(data: any){
    if(data)
      this.TransformEmergency(data);
    this.selectTab(this.tabs.billing);
  }
  public GetBillingForm(data: any){
    if(data)
      this.TransformBilling(data);
    this.selectTab(this.tabs.card);
  }
  public GetStudentCardForm(data: any){
    if(data)
      this.TransformCard(data);
    this.SaveStudent();
  }
  private selectTab(tab: number){
    this.staticTabs?.tabs[tab] &&
    (this.staticTabs.tabs[tab].active = true);
  }
  //Methos to API
  private async SaveStudent(){
    const result = await this.serviceStudent.StoreStudent(this.newStudent);
    console.log(result);
    return result;
  }
  
}

import { StudentService } from './../../../services/student.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Student } from './../../../models/student';
import { Ailments } from 'src/models/ailments';
import { Parent } from 'src/models/parent';
import { Emergency } from 'src/models/emergency';
import { Billing } from 'src/models/billing';

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
  newStudent: Student = new Student();
  tabs = TABS;
  constructor(
    private serviceStudent: StudentService,
  ) { }

  ngOnInit() {
  }

  public goBack(tab: number){
    this.selectTab(tab - 1);
  }
  private TransformMainForm(data: any){
    this.newStudent.yearSchool = data.yearSchool;
    this.newStudent.campus = data.campus;
    this.newStudent.section = data.section;
    this.newStudent.grade = data.grade;
    this.newStudent.last_name_first = data.lastFirstName;
    this.newStudent.last_name_second = data.lastSecondName;
    this.newStudent.names = data.names;
    this.newStudent.born_date = `${data.bornDate.year}/${data.bornDate.month}/${data.bornDate.day}`;
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
  }
  private TransformAilemnt(data: any){
    let objAilment = new Ailments();
    objAilment.has_deficit = data.isDefecit;
    objAilment.use_medicine = data.useMedicine;
    objAilment.medicines = data.medicines;
    objAilment.info_vital = data.informationAboutStudent;
    this.newStudent.ailments = objAilment;
  }
  private TransformParent(data: any){
    let objParentParent = new Parent();
    let objParentMother = new Parent();
    //Father
    objParentParent.names = data.fatherData.names;
    objParentParent.phone = data.fatherData.mainPhoneNumber;
    objParentParent.cellphone = data.fatherData.phoneNumber;
    objParentParent.address = data.fatherData.address;
    objParentParent.colony = data.fatherData.colony;
    objParentParent.postal_code = data.fatherData.postalCode;
    objParentParent.country = data.fatherData.country;
    objParentParent.state = data.fatherData.state;
    objParentParent.city = data.fatherData.city;
    objParentParent.job = data.fatherData.workData.jobDescription;
    objParentParent.job_address = data.fatherData.workData.workPlace;
    objParentParent.job_phone = data.fatherData.workData.workPhone;
    objParentParent.schedule = data.fatherData.workData.schedule;
    //Mother
    objParentMother.names = data.motherData.names;
    objParentMother.phone = data.motherData.mainPhoneNumber;
    objParentMother.cellphone = data.motherData.phoneNumber;
    objParentMother.address = data.motherData.address;
    objParentMother.colony = data.motherData.colony;
    objParentMother.postal_code = data.motherData.postalCode;
    objParentMother.country = data.motherData.country;
    objParentMother.state = data.motherData.state;
    objParentMother.city = data.motherData.city;
    objParentMother.job = data.motherData.workData.jobDescription;
    objParentMother.job_address = data.motherData.workData.workPlace;
    objParentMother.job_phone = data.motherData.workData.workPhone;
    objParentMother.schedule = data.motherData.workData.schedule;
    this.newStudent.father = objParentParent;
    this.newStudent.mother = objParentMother;
  }
  private TransformEmergency(data: any){
    let objEmergency1 = new Emergency();
    let objEmergency2 = new Emergency();
    let objEmergency3 = new Emergency();
    //1
    objEmergency1.name = data.family1.name;
    objEmergency1.typeFamily = data.family1.typeFamily;
    objEmergency1.phone = data.family1.phone;
    //2
    objEmergency2.name = data.family2.name;
    objEmergency2.typeFamily = data.family2.typeFamily;
    objEmergency2.phone = data.family2.phone;
    //3
    objEmergency3.name = data.family3.name;
    objEmergency3.typeFamily = data.family3.typeFamily;
    objEmergency3.phone = data.family3.phone;
  }
  private TransformBilling(data: any){
    let objBilling = new Billing()
  }
  private TransformCard(data: any){
    
  }
  //Gets Forms
  public GetMainForm(data: any){
    this.TransformMainForm(data);
    this.selectTab(this.tabs.parents);
  }
  public GetAilmentsForm(data: any){
    this.TransformAilemnt(data);
    this.selectTab(this.tabs.emergency);
  }
  public GetParentsForm(data: any){
    this.TransformParent(data);
    this.selectTab(this.tabs.ailments);
  }
  public GetEmergencyForm(data: any){
    this.TransformEmergency(data);
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

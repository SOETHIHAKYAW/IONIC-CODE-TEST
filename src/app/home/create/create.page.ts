import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  id!: number;
  name!: string;
  department!: string;
  position!: string;
  nrc!: string;
  salary!: number;
  date: any = new Date();
  mobile!: string;

  constructor(
    private employeeService: EmployeeService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  idGenerator() {
    this.id =
      Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 10) + 1;
  }

  createEmployee() {
    this.idGenerator();
    const newEmp = {
      id: this.id,
      name: this.name,
      department: this.department,
      position: this.position,
      mobile: this.mobile,
      nrc: this.nrc,
      salary: this.salary,
      dob: this.date,
    };
    this.employeeService.addEmployee(newEmp);
    this.successAlert();
    this.routeToDashboard();
    
    console.log(newEmp)
  }
  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Item added successfully!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  routeToDashboard() {
    this.navCtrl.navigateForward('/');
  }

  ngOnInit() {}
}

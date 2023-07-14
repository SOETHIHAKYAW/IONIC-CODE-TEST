import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private employeeService: EmployeeService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) { }
  employee!: Employee;
  id: any;
  counter: Employee={
    id: 0,
    name: '',
    department: '',
    position: '',
    mobile: '',
    nrc: '',
    salary: 0,
    dob: new Date()
  };

  getItems(id:any) {
    this.employee = this.employeeService.getItemById(id) ?? this.counter;
    console.log(JSON.stringify(this.employee));
}

updateItem() {
  this.employeeService.updateItem(this.employee);
  this.successAlert();
  this.routeToDashboard();
}

async successAlert() {
  const alert = await this.alertController.create({
    header: 'Update',
    message: 'This record was updated!',
    buttons: ['OK']
  });

  await alert.present();
}

routeToDashboard() {
  this.navCtrl.navigateForward('/');
}

ngOnInit() {
  this.id = this.router.snapshot.params['id']; 
  this.getItems(this.id);
}

}

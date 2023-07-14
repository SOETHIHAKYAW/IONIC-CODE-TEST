import { Component, Inject } from '@angular/core';
import { Employee } from '../employee';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  employeeList: Employee[] = [];

  constructor(
    private alertController: AlertController,
    private router: Router,
    @Inject(EmployeeService) private employeeService: EmployeeService
  ) {
    this.employeeList = this.employeeService.getAllEmployees();
    console.log(this.employeeList);
  }
  
  async deleteEmployee(employee: any) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Delete',
          handler: () => {
            this.employeeService.deleteItem(employee);
          }
        }
      ]
    });
  
    await alert.present();
  }

  updateEmp(id: number) {
    this.router.navigate(['update/', id]);
  }

}

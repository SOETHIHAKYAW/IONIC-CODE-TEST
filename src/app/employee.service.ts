import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employeeList: Employee[] = [
    {
    id: 1,
    name: "Michael",
    department: "IT",
    position: "Manager",
    mobile: "09-245348254",
    nrc: "9/YaTaNa(N)948374",
    salary: 1500000,
    dob: new Date("1992-05-15")
    },
    {
      id: 2,
      name: "Rose",
      department: "HR",
      position: "Senior",
      mobile: "09-984738753",
      nrc: "9/MaKaNa(N)574832",
      salary: 700000,
      dob: new Date("1996-03-20")
      },
      {
        id: 3,
        name: "William",
        department: "Sale",
        position: "Senior",
        mobile: "09-760041365",
        nrc: "9/MaKaNa(N)574832",
        salary: 900000,
        dob: new Date("1996-03-20")
        },
  ];

  addEmployee(employee: Employee){
    this.employeeList.push(employee);
  }

  getAllEmployees(): Employee[]{

    return this.employeeList;
  }

  deleteItem(emp: any) {
    const index = this.employeeList.indexOf(emp);
    if (index > -1) {
      this.employeeList.splice(index, 1);
    }
  }

  updateItem(updatedEmp: any) {
    const item = this.employeeList.find((item) => item.nrc === updatedEmp.nrc);
    if (item) {
      item.name = updatedEmp.name;
      item.department = updatedEmp.department;
      item.position = updatedEmp.position;
      item.mobile = updatedEmp.mobile;
      item.nrc = updatedEmp.nrc;
      item.salary = updatedEmp.salary;
      item.dob = updatedEmp.dob;
    }
  }

  getItemById(empId: any) {
    return this.employeeList.find(emp => emp.id == empId);
  }
}

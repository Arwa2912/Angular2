import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  dept:Department = new Department(10,"os",40);

ndept:Department=new Department(0,"",0);

Add(){
  this.depts.push(new Department(this.ndept.id,this.ndept.name,this.ndept.capacity));
  this.ndept=new Department(0,"",0);
}

Show(deptid:number){
  for (let i = 0; i < this.depts.length; i++) {
    if (this.depts[i].id==deptid) {
      this.dept=this.depts[i];
      break;
      
    }   
  }

}
  depts:Department[]=[
    new Department(100,"os",40),
    new Department(200,"pd",50),
    new Department(300,"mobile",70)

  ]

  constructor() { }

  ngOnInit(): void {
  }

}

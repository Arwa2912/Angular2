import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
stdName="Ali";
stdImg="assets/img.jpg";
x=2; 

updateName(s:string){
  this.stdName=s;
 // console.log("updaated");
  //console.log(s);
 // console.log(s.target.value);

}

myFun(s:string){
//alert(this.stdName);
this.stdName="sara";
//console.log(this.stdName);
console.log(s);

}
}

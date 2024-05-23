import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';

export class Student {
id:number;
  name: string;
  mobileNo:string;
  email:string;
  city:string;
  state:string;
  pincode:string;
  address:string;
  
  constructor(){
    this.id = 0;
    this.name = '';
    this.mobileNo = 
    this.email = '';
    this.city = '';
    this.state = '';
    this.pincode = '';
    this.address = '';
  }
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  @ViewChild('myModal') model!: ElementRef ;
  title = 'angular-crud';
  studentObj: Student = new Student(); 
  studentList: Student[] = [];


  ngOnInit(): void {
    const localData = localStorage.getItem("angular17crud");
    if(localData != null){
       this.studentList = JSON.parse(localData);
    }
  }

 
   
  openModel(){
    this.studentObj = new Student();
    const modal = document.getElementById("myModal");
    if(modal != null){
      modal.style.display = "block"
    }
   
  }

  closeModel(){
    console.log(this.model);

    if(this.model != null){
       this.model.nativeElement.style.display = 'none';
    }
  }

  saveStudent(){
    // debugger;
    const isLocalPresent = localStorage.getItem("angular17crud");
    if(isLocalPresent != null){
      const oldArry = JSON.parse(isLocalPresent);
      this.studentObj.id = oldArry.length + 1;
      oldArry.push(this.studentObj);
      this.studentList = oldArry;
      localStorage.setItem('angular17crud',JSON.stringify(oldArry))
      
    }else{
       const newArr = []
       newArr.push(this.studentObj);
       this.studentObj.id = 1;
       this.studentList = newArr;
       localStorage.setItem('angular17crud',JSON.stringify(newArr))
       
    }
    this.closeModel()
  }

  onEdit(student: Student){
        this.studentObj = student;
        this.openModel();
  }

}

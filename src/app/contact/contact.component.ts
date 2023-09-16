import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userName=false;
  userAge=false;
  userEmail=false;
  userPassword=false;

  userNameInput(event:any){
    // console.log(event.target.value);
    if(event.target.value ==""){
      this.userName=false;
    }

    else{
      this.userName=true;
    }

    }
    
  userAgeInput(event:any){
    // console.log(event.target.value);
    if(event.target.value ==""){
      this.userAge=false;
    }

    else{
      this.userAge=true;
    }

    }

  userEmailInput(event:any){
    // console.log(event.target.value);
    if(event.target.value ==""){
      this.userEmail=false;
    }

    else{
      this.userEmail=true;
    }

    }

  userPasswordInput(event:any){
    // console.log(event.target.value);
    if(event.target.value ==""){
      this.userPassword=false;
    }

    else{
      this.userPassword=true;
    }

    }

  }

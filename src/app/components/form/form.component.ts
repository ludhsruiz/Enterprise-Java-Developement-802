import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  
  user: {
    name: string,
    occupation: string,
    email: string,
    subject: string,
    content: string
  }

 

  constructor() {
    this.user = {
      name: '',
      occupation: '',
      email: '',
      subject: '',
      content: ''
    }
  }

    ngOnInit(): void {
    }
  
    onSubmit(): void { 
    console.log(this.user);
    }


}

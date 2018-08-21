import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  log(x)
  {
    console.log(x);
  }
  submit(f)
  {

  }

  contactMethods=[
    {id:1, name:"email"},
    {id:2, name:"phone"}
  ]
}

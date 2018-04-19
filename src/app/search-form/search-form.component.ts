import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  passengers = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }
  validate(validateForm) {


    console.log('Successfully Submitted');


    console.log(validateForm);


  }
}

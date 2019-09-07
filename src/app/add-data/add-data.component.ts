import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  data1 : any;
  constructor(public dataservice : DataService, public routing : Router) { }

  ngOnInit() {
  }

  add(data){
    this.dataservice.addData(data).then((data) => {
      this.data1 = data;
      this.routing.navigate(['/list-data']);
    })
    console.log(data);
  }
}

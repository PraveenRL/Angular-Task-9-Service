import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  id : any;
  bind : any;
  result : any = {
    name : '',
    email : '',
    contact : '',
  }
  constructor(public routing : ActivatedRoute, public service : DataService) { }

  ngOnInit() {
    this.id = this.routing.snapshot.params['id'];
    console.log(this.id)
    this.service.getData().subscribe(res => {
      this.bind = res;
      for(let i = 0; i <this.bind.length; i++){
        if(this.id === this.bind[i].id){

          this.result.name = this.bind[i].uname
          this.result.email = this.bind[i].email
          this.result.contact = this.bind[i].contact
        }
      }
    })
  }

}

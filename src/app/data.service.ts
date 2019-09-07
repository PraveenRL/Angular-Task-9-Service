import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData1 : any;
  services : any;
  constructor(private http:HttpClient) { }

  addData(value){
    return this.http.post("https://5d3c1d02301f26001416ac6c.mockapi.io/services",value).toPromise()
    .then((data) => {
      resolve(data)
    })
  }
  getData(){
    return this.http.get('https://5d3c1d02301f26001416ac6c.mockapi.io/services')
    .pipe(map(data=>this.getData1=data))
  }
  del(value){
    return this.http.delete('https://5d3c1d02301f26001416ac6c.mockapi.io/services/'+value,)
    .pipe(map(data=>this.getData1=data))
  } 
}

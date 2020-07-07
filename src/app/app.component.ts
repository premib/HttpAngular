import { Component } from '@angular/core';
import { HttpServiceService } from "./http-service.service";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpAngular';
  myForm;
  items: Array<any>= [];
  constructor(private httpService: HttpServiceService, private _fb: FormBuilder){
    this.httpService.getObjects().subscribe(
      (data)=>{
        this.items= data;
        console.log("hello",this.items)
      },
      err=>{
        console.log("error",err)
      },
      ()=>{
        console.log("final")
      }
    )
    this.myForm= _fb.group({
      'id': [''],
      'name': ['']
    })
  }

  submit(form: FormGroup){
    console.log({id: form.value.id,name: form.value.name})
    this.httpService.setObjects({id: form.value.id,name: form.value.name}).subscribe(
      data=>alert("data stored"),
      err=> alert("Date error"),
      ()=>alert("complete")
    )
  }
}

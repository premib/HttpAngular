import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  myForm;
  items: Array<any>= [];
  maxPost: number= 5;

  constructor(private httpService: HttpServiceService){
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
  }

  filterPost(){
    // console.log(this.items)
    console.log(this.items.filter(x=>{ console.log(x.id); parseInt(x.id) < this.maxPost}))
    return this.items.filter(x=>{ console.log(x.id<this.maxPost); parseInt(x.id) < this.maxPost})
  }
  increasePost(){
    this.maxPost += 5;
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpServiceService } from '../http-service.service';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {

  item: any;
  currentProductId
  constructor(private http: HttpServiceService, private activatedRoute:ActivatedRoute) { 
    this.currentProductId = this.activatedRoute.snapshot.params.id
    console.log("prodid",this.currentProductId)
    this.http.getSpecificObject(this.currentProductId).subscribe(
      data=>{
        this.item= data
        console.log(this.item)
      },
      err => console.log("error",err),
      () => console.log("finally")
    )
    
  }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  
  constructor(private client: HttpClient) {

   }

   getObjects(): Observable<any>{
     return this.client.get("https://5f0404934c6a2b00164906a4.mockapi.io/blogs/");
   }
  
   getSpecificObject(data: string): Observable<any>{
     return this.client.get("https://5f0404934c6a2b00164906a4.mockapi.io/blogs/"+data);
   }

   setObjects(data: any): Observable<any>{
     return this.client.post("https://5f0404934c6a2b00164906a4.mockapi.io/users", data, {responseType: 'text'});
   }
}

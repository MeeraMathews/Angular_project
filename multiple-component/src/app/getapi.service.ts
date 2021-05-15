import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GetapiService 
{
    constructor(
      private http:HttpClient
    ) { }
    
    public apicall() {
      return this.http.get('https://api.dev.beaglesecure.com/v1/insights');
    }
}

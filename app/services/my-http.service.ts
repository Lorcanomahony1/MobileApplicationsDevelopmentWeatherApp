import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions, HttpResponse } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { DataService} from '../services/date.service';



@Injectable({
  providedIn: 'root'
})

export class MyHttpService {

  constructor(private http: HttpClient) { }

async get(options: HttpOptions) {
  const response: HttpResponse = await CapacitorHttp.get(options);
  return response.data;
}

  get2(url:string): Observable<any> {
    return this.http.get(url);
  }
}



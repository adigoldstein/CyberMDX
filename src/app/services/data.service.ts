import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  interations: BehaviorSubject<any> = new BehaviorSubject(null);

  setData(data): void {
    this.interations.next(data);
  }

  getData() {
    return this.interations.asObservable();
  }

  login(username: string, password: string): any { // Observable<any>

    const body = `user=${username}&pass=${password}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post('https://ot4f33xd8d.execute-api.us-east-2.amazonaws.com/cybermdx/login', body, httpOptions);

  }
}


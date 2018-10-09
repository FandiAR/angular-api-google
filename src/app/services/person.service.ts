import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private API_KEY = 'YOU_API_KEY_HERE';

  constructor(private http: HttpClient) { }

  getPerson(name: string): Observable<any> {
    const api = `https://kgsearch.googleapis.com/v1/entities:search?query=${name}&key=${this.API_KEY}&limit=1&indent=True`;
    return this.http.get(api);
  }
}

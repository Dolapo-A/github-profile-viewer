import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceName } from './interface-name';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  getData(): string[] {
    return ['data 1', 'data 2', 'data 3'];
  }

  constructor(private http: HttpClient) {}

  getlist(username: string): Observable<InterfaceName> {
    const url = `https://api.github.com/users/${username}`;
    return this.http.get<InterfaceName>(url);
  }
}

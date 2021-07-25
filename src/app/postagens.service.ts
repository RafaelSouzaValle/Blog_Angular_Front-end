import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  constructor(private httpClient: HttpClient) { }

  listarPostagens(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/postagens");
  }
}

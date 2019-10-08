import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_ENDPOINT = environment.API_ENDPOINT;

  constructor(private http: HttpClient) { }

  getItem()
}

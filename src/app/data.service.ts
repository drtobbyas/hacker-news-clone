import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import gql from 'graphql-tag'
import { TopStoriesType } from './types/topstories';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_ENDPOINT = environment.API_ENDPOINT;

  constructor(private apollo: Apollo, httpLink: HttpLink) { }

  // getItem
}

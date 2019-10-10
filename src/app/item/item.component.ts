import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { HnType } from '../types/HnTypes';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  items: any;
  time: any;
  private query: QueryRef<any>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.query = this.apollo
    .watchQuery({
      query: gql `
      {
        hn{
          topStories(limit: 30, offset:0){
            id,
            text,
            url,
            score,
            title,
            by {
              id
            },
            kids {
              id
            },
            time
          }
        }
      }
          
      `
    });
    this.query.valueChanges.subscribe(result => {
      this.items = result.data && result.data.hn.topStories;
      
      // const date = new Date(this.items.time);
      // const hours = date.getHours();
      // this.time = hours;
      // console.log(date)
      console.log(this.items);
    })
  }
  

  

}


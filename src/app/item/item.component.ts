import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  items = [
    {
      name: "abass",
      id: 1
    },

    {
      name: "abass",
      id: 1
    },
    {
      name: "abass",
      id: 1
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  

}


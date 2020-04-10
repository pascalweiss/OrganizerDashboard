import { Component, OnInit } from '@angular/core';
import { CardItem } from 'src/app/shared/card.item';

// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.scss']
// })

export class BaseContent {
  // implements OnInit 
  public cardItem: CardItem;
  public static cardTypeName = 'Unknown Type';
  cardStyle = {};

  constructor() { }

  // ngOnInit(): void { }
}

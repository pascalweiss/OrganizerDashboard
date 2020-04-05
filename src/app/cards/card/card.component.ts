import { Component, OnInit, ElementRef } from '@angular/core';
import { CardItem } from 'src/app/shared/card.item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  public cardItem: CardItem;
  public static cardTypeName = 'Unknown Type';
  cardStyle = {};

  constructor() { }

  ngOnInit(): void { }
}

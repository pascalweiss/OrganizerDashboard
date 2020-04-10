import { Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class CardItemPosition {
  x: number; y: number;
}

export class CardItemData {
  title: string;
  position: CardItemPosition;
  usage: string;
  additional: any;
}

export class CardItem {

  constructor(public component: Type<any>, public data: CardItemData) {

  }
}
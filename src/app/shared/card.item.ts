import { Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class CardItemPosition {
  constructor(public x: number, public y: number) {}
}

export class CardItemData {
  title: string;
  oldPosition: CardItemPosition;
  currentPosition: CardItemPosition;
  usage: string;
  additional: any;
}

export class CardItem {
  subject: BehaviorSubject<CardItem>;
  constructor(public component: Type<any>, public data: CardItemData) {
    this.subject = new BehaviorSubject(this);
  }

  copy(): CardItem {
    return new CardItem(
      this.component, 
      {
        title: this.data.title, 
        oldPosition: {
          x: this.data.oldPosition.x,
          y: this.data.oldPosition.y
        },
        currentPosition: this.data.currentPosition,
        usage: this.data.usage,
        additional: this.data.additional
      }
      )
  }
}
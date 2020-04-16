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
  dragSubject: BehaviorSubject<CardItem>;
  doubleClickSubject: BehaviorSubject<CardItem>;
  constructor(public contentComponent: Type<any>, public editorComponent: Type<any>, 
    public data: CardItemData) {
    this.dragSubject = new BehaviorSubject(this);
    this.doubleClickSubject = new BehaviorSubject(this);
  }

  copy(): CardItem {
    return new CardItem(
      this.contentComponent,
      this.editorComponent, 
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
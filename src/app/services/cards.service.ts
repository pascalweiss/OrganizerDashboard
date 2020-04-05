import { Injectable } from '@angular/core';
import { testcards, cardpreviews, newcards } from '../shared/testcards';
import { of, Observable } from 'rxjs';
import { CardItem } from '../shared/card.item';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  constructor() { }

  getCards(): Observable<CardItem[]> {
    return of(testcards);
  }

  getCardPreviews(): Observable<CardItem[]> {
    return of(cardpreviews);
  }

  getNewCards(): Observable<CardItem[]> {
    return of(newcards);
  }

}

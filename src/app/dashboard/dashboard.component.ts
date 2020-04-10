import { Component, OnInit, ViewChild } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { CardItem, CardItemPosition } from '../shared/card.item';
import { Globals } from '../shared/globals';
import { MatDialog, MatSidenav } from '@angular/material';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [Globals]
})
export class DashboardComponent implements OnInit {
    @ViewChild(MatSidenav) sidenav: MatSidenav;

  cardItems: CardItem[];
  newCardItems: CardItem[];
  events: string[] = [];
  opened: boolean;

  shouldRun = true;
  constructor(      
    public dialog: MatDialog,
    private cardsService: CardsService) { }
  
 
  ngOnInit(): void {
    this.cardsService.getCards().subscribe(cardItems => this.cardItems = cardItems);
    this.cardsService.getNewCards().subscribe(newcardItems => {
      this.newCardItems = newcardItems;
      newcardItems.map(cardItem => cardItem.subject.pipe(skip(1)).subscribe(item => {
        // When a card is dragged from the sideboard to the dashboard, 
        // a copy of this card is created and added to the cardItem array.
        // With the directives in the html, a new card container is created.
          let copy = item.copy()
          this.cardItems.push(copy);
      }))
    });
  }
}
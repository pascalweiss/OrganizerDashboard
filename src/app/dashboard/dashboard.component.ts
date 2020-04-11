import { Component, OnInit, ViewChild } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { CardItem } from '../shared/card.item';
import { MatDialog, MatSidenav } from '@angular/material';
import { skip } from 'rxjs/operators'; 
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
  trigger('changeWidth', [
    state('initial', style({
      'width': '0px',
    })),
    state('final', style({
      'width': '220px',
    })),
    transition('initial=>final', animate('600ms 0.2ms ease-in-out')),
    transition('final=>initial', animate('600ms 0.2ms ease-in-out'))
  ]),
]
})
export class DashboardComponent implements OnInit {
    @ViewChild(MatSidenav) sidenav: MatSidenav;

  cardItems: CardItem[];
  newCardItems: CardItem[];
  events: string[] = [];
  currentState = 'initial';
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

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { CardItem } from '../shared/card.item';
import { MatDialog, MatSidenav } from '@angular/material';
import { skip } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotecontentComponent } from '../plugins/note/content/notecontent.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

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
    // init existing cards
    this.cardsService.getCards().subscribe(cardItems => {
      this.cardItems = cardItems;
      cardItems.map(cardItem => this.subscribeDoubleClick(cardItem))
    });

    // init new cards in sidebar
    this.cardsService.getNewCards().subscribe(newcardItems => {
      this.newCardItems = newcardItems;
      newcardItems.map(cardItem => {
        cardItem.dragSubject.pipe(skip(1)).subscribe(item => {
          this.addNewCard(this, item);
        });
      })
    })
  }

  subscribeDoubleClick(cardItem: CardItem) {
    cardItem.doubleClickSubject.pipe(skip(1)).subscribe(item => this.showCardEditor(this, item));
  }

  // When a card is double-clicked it opens up a dialog with the 
  // editor for the respective card. Also it closes the sidebar.
  showCardEditor(self: DashboardComponent, item: CardItem) {
    this.currentState = 'initial';
    this.dialog.open(item.editorComponent, {width:"350px", height:"550px", data: {cardItem: item}});
  }

  // When a card is dragged from the sideboard to the dashboard, 
  // a copy of this card is created and added to the cardItem array.
  // With the directives in the html, a new card container is created.
  addNewCard(self: DashboardComponent, item: CardItem) {
    const copy = item.copy()
    copy.data.title = "added";
    self.cardItems.push(copy)
    self.subscribeDoubleClick(copy);
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { CardItem } from '../shared/card.item';
import { Globals } from '../shared/globals';
import { MatDialog, MatSidenav } from '@angular/material';

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
    this.cardsService.getNewCards().subscribe(cardItems => this.newCardItems = cardItems);
  }
}
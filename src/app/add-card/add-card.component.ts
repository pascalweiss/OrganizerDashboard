import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { CardItem } from '../shared/card.item';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  showFiller = false;
  public previewCardItems: CardItem[];
  constructor(private cardService: CardsService) { }

  ngOnInit(): void {
    this.cardService.getCardPreviews()
      .subscribe(cardItems => this.previewCardItems = cardItems);
  }
}

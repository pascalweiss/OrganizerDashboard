import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { CardItem } from '../shared/card.item';

@Component({
  selector: 'app-add-card',
  templateUrl: './sidebar-previews.component.html',
  styles: ['']
})
export class SidebarPreviewsComponent implements OnInit {
  showFiller = false;
  public previewCardItems: CardItem[];
  constructor(private cardService: CardsService) { }

  ngOnInit(): void {
    this.cardService.getCardPreviews()
      .subscribe(cardItems => this.previewCardItems = cardItems);
  }
}

import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss', '../card/card.component.scss']
})
export class NotecardComponent extends CardComponent {
  public static cardTypeName = "Note";
  public static cardTypeDescription = "With this card you can create a simple note";
  cardStyle = {
    background: "yellow"
  };

  constructor() {
    super();
   }

  ngOnInit(): void {
   }
}

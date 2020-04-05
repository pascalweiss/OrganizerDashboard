import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-checklistcard',
  templateUrl: './checklistcard.component.html',
  styleUrls: ['./checklistcard.component.scss', '../card/card.component.scss']
})
export class ChecklistcardComponent extends CardComponent {
  public static cardTypeName = "Checklist"
  public static cardTypeDescription = "With this card you can create a checklist."
  constructor() {
    super();
   }

  ngOnInit(): void {
  }

  // setData(data: any) {
  //   super.setData(data);
  // }
}

import { Component } from '@angular/core';
import { BaseContent } from '../basecontent';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecontent.component.html',
  styleUrls: ['./notecontent.component.scss']
})
export class NotecontentComponent extends BaseContent {
  public static cardTypeName = "Note";
  public static cardTypeDescription = "With this card you can create a simple note";
  cardStyle = {
    background: "yellow"
  };

  constructor() {
    super();
   }
}

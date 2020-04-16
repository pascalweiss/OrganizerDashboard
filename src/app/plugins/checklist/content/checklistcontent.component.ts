import { Component } from '@angular/core';
import { BaseContent } from '../../basecontent';

@Component({
  selector: 'app-checklistcard',
  templateUrl: './checklistcontent.component.html',
  styleUrls: ['./checklistcontent.component.scss']
})
export class ChecklistcontentComponent extends BaseContent {
  public static cardTypeName = "Checklist"
  public static cardTypeDescription = "With this card you can create a checklist."
}
